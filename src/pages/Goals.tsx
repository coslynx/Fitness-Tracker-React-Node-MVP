import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@emotion/styled';
import { Typography, Container, Box, Grid, TextField, Button } from '@mui/material';
import useAuth from '../hooks/useAuth';
import api from '../services/api';

const GoalsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Goals: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [goals, setGoals] = useState<any[]>([]);
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalDescription, setNewGoalDescription] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await api.getGoals(user.id);
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals:', error);
        // Handle the error appropriately, e.g., display an error message
      }
    };
    fetchGoals();
  }, [user.id]);

  const handleUpdateGoal = (goalId: string) => {
    router.push(`/goals/${goalId}/update`);
  };

  const handleDeleteGoal = async (goalId: string) => {
    try {
      await api.deleteGoal(goalId);
      setGoals(goals.filter((g) => g.id !== goalId));
    } catch (error) {
      console.error('Error deleting goal:', error);
      // Handle the error appropriately, e.g., display an error message
    }
  };

  const createNewGoal = async () => {
    try {
      await api.createGoal({ name: newGoalName, description: newGoalDescription, userId: user.id });
      setGoals([...goals, { id: Date.now().toString(), name: newGoalName, description: newGoalDescription, progress: 0 }]);
      setNewGoalName('');
      setNewGoalDescription('');
    } catch (error) {
      console.error('Error creating goal:', error);
      // Handle the error appropriately, e.g., display an error message
    }
  };

  return (
    <GoalsContainer maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Your Goals
        </Typography>
        <Grid container spacing={2}>
          {goals.map((goal) => (
            <Grid item xs={12} md={6} key={goal.id}>
              <Typography variant="subtitle1" gutterBottom>
                {goal.name}
              </Typography>
              <Typography variant="body2">
                {goal.description}
              </Typography>
              <Typography variant="body2">
                Progress: {goal.progress}%
              </Typography>
              <Button variant="contained" onClick={() => handleUpdateGoal(goal.id)}>
                Update
              </Button>
              <Button variant="contained" color="secondary" onClick={() => handleDeleteGoal(goal.id)}>
                Delete
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Create New Goal
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Goal Name"
              variant="outlined"
              fullWidth
              value={newGoalName}
              onChange={(e) => setNewGoalName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Goal Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={newGoalDescription}
              onChange={(e) => setNewGoalDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={createNewGoal}>
              Create Goal
            </Button>
          </Grid>
        </Grid>
      </Box>
    </GoalsContainer>
  );
};

export default Goals;