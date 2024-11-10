#!/bin/bash

# Set strict error handling
set -euo pipefail

# Define project root directory
PROJECT_ROOT=$(dirname "$0")

# Define log file location
LOG_FILE="$PROJECT_ROOT/logs/startup.log"

# Define PID file location
PID_FILE="$PROJECT_ROOT/pids/startup.pid"

# Define service timeouts
TIMEOUT=30

# Load environment variables
if [ -f "$PROJECT_ROOT/.env" ]; then
    source "$PROJECT_ROOT/.env"
fi

# Validate required environment variables
if [ -z "$MONGODB_URI" ]; then
    echo "Error: MONGODB_URI environment variable not set." >&2
    exit 1
fi

if [ -z "$JWT_SECRET" ]; then
    echo "Error: JWT_SECRET environment variable not set." >&2
    exit 1
fi

# Set default values for optional variables
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-"http://localhost:3000/api"}

# Define utility functions
log_info() {
    echo "$(date +"%Y-%m-%d %H:%M:%S") INFO: $*" >> "$LOG_FILE"
}

log_error() {
    echo "$(date +"%Y-%m-%d %H:%M:%S") ERROR: $*" >&2 >> "$LOG_FILE"
}

cleanup() {
    log_info "Cleaning up..."
    if [ -f "$PID_FILE" ]; then
        kill -9 $(cat "$PID_FILE") 2>/dev/null
        rm "$PID_FILE"
    fi
}

check_dependencies() {
    log_info "Checking dependencies..."
    # Check if npm or yarn is installed
    command -v npm >/dev/null 2>&1 || {
        log_error "Error: npm or yarn not found. Install npm or yarn."
        exit 1
    }
    # Check if Node.js is installed
    command -v node >/dev/null 2>&1 || {
        log_error "Error: Node.js not found. Install Node.js."
        exit 1
    }
}

# Define health check functions
check_port() {
    nc -z "$1" "$2" >/dev/null 2>&1
}

wait_for_service() {
    log_info "Waiting for service on port $2..."
    for i in $(seq 1 "$TIMEOUT"); do
        if check_port "$1" "$2"; then
            log_info "Service available on port $2."
            return 0
        fi
        sleep 1
    done
    log_error "Service not available on port $2 after $TIMEOUT seconds."
    exit 1
}

verify_service() {
    log_info "Verifying service health..."
    # Implement service-specific health check logic
    # Example: curl http://localhost:8080/health
}

# Define service management functions
start_database() {
    log_info "Starting database service..."
    mongod &
    store_pid $!
    wait_for_service "localhost" "27017"
}

start_backend() {
    log_info "Starting backend service..."
    cd backend
    npm run start &
    store_pid $!
    wait_for_service "localhost" "3001"
}

start_frontend() {
    log_info "Starting frontend service..."
    cd apps/web
    npm run dev &
    store_pid $!
    wait_for_service "localhost" "3000"
}

store_pid() {
    log_info "Storing PID: $1..."
    echo "$1" > "$PID_FILE"
}

# Handle exit and error signals
trap cleanup EXIT
trap cleanup ERR

# Main execution flow
log_info "Starting fitness tracker..."
check_dependencies
start_database
start_backend
start_frontend

log_info "Fitness tracker started successfully."