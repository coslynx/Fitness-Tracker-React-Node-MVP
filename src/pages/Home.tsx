import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@emotion/styled';
import { Typography, Container, Box } from '@mui/material';
import Button from '../components/Button';
import Input from '../components/Input';
import Modal from '../components/Modal';
import AuthContext from '../context/AuthContext';

const HomePageContainer = styled(Container)`
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

const Home: React.FC = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (user) {
    router.push('/dashboard');
    return null;
  }

  return (
    <HomePageContainer maxWidth="sm">
      <StyledBox>
        <Typography variant="h3" gutterBottom>
          Welcome to Fitness Tracker
        </Typography>
        <Typography variant="body1" gutterBottom>
          Track your progress, set personalized goals, and connect with a supportive community.
        </Typography>
        <Button variant="contained" onClick={() => router.push('/login')}>
          Login / Register
        </Button>
      </StyledBox>
    </HomePageContainer>
  );
};

export default Home;