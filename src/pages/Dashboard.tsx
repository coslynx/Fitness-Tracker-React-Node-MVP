import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@emotion/styled';
import { Typography, Container, Box, Grid } from '@mui/material';
import Button from '../components/Button';
import Input from '../components/Input';
import Modal from '../components/Modal';
import useAuth from '../hooks/useAuth';
import api from '../services/api';

const DashboardContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth();

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await api.getUserData();
        setUserData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <Typography variant="h6">Loading user data...</Typography>;
  }

  if (error) {
    return (
      <Modal open={true} onClose={() => setError(null)}>
        <Typography variant="body1">Error: {error.message}</Typography>
      </Modal>
    );
  }

  return (
    <DashboardContainer maxWidth="md">
      <StyledBox>
        <Typography variant="h4" gutterBottom>
          Welcome, {userData.username}!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Your Goals
            </Typography>
            <ul>
              {userData.goals.map((goal: any) => (
                <li key={goal.id}>
                  {goal.name} - {goal.progress}%
                </li>
              ))}
            </ul>
            <Button variant="contained" onClick={() => router.push('/goals')}>
              Manage Goals
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <ul>
              {userData.activities.map((activity: any) => (
                <li key={activity.id}>
                  {activity.type} - {activity.date}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </StyledBox>
    </DashboardContainer>
  );
};

export default Dashboard;