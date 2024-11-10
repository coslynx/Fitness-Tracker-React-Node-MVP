import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext<{
    user: any | null; // Our current user's details, or null if not logged in
    login: (email: string, password: string) => Promise<void>; 
    logout: () => Promise<void>;
}>({ user: null, login: () => Promise.resolve(), logout: () => Promise.resolve() }); 

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, login, logout } = useAuth(); 

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthProvider };