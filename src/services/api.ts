// src/services/api.ts
import axios from 'axios';
import { Redis } from 'ioredis';

// Configuration (from src/config/api.ts or .env)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Redis Client Instance (from src/config/redis.ts)
const redisClient = new Redis(process.env.REDIS_URL);

class ApiService {
  private userToken: string | null = null;

  constructor() {
    // Load user token from local storage or cookies
    this.userToken = localStorage.getItem('userToken');
  }

  // Fetch user data
  async getUserData(): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${this.userToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }

  // Fetch goals for a specific user
  async getGoals(userId: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}/goals`, {
        headers: {
          Authorization: `Bearer ${this.userToken}`
        },
        params: {
          userId
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching goals:', error);
      throw error;
    }
  }

  // Create a new goal
  async createGoal(goalData: any): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/goals`, goalData, {
        headers: {
          Authorization: `Bearer ${this.userToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating goal:', error);
      throw error;
    }
  }

  // Update an existing goal
  async updateGoal(goalId: string, goalData: any): Promise<any> {
    try {
      const response = await axios.put(`${API_URL}/goals/${goalId}`, goalData, {
        headers: {
          Authorization: `Bearer ${this.userToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error updating goal:', error);
      throw error;
    }
  }

  // Delete a goal
  async deleteGoal(goalId: string): Promise<any> {
    try {
      const response = await axios.delete(`${API_URL}/goals/${goalId}`, {
        headers: {
          Authorization: `Bearer ${this.userToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting goal:', error);
      throw error;
    }
  }

  // Log activity
  async logActivity(activityData: any): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/activities`, activityData, {
        headers: {
          Authorization: `Bearer ${this.userToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error logging activity:', error);
      throw error;
    }
  }
}

const apiService = new ApiService();

export default apiService;