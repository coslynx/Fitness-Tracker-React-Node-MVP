import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import auth from '../services/auth';

const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const response = await auth.login(email, password);
      setUser(response.data);
      router.push('/dashboard');
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await auth.logout();
      setUser(null);
      router.push('/');
    } catch (error) {
      // Handle logout error, e.g., display an error message
      console.error('Logout error:', error);
    }
  };

  return { user, login, logout };
};

export default useAuth;