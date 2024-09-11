import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, Tabs, Tab, TextField, Button } from '@mui/material';

const AuthPage = () => {
  const [tabValue, setTabValue] = useState(0); // 0 for Login, 1 for Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Simulate login
    if (email === 'test@example.com' && password === 'password') {
      navigate('/home'); // Redirect to home on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Simulate registration
    alert('Registration successful!');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Paper elevation={3} sx={{ padding: 3, width: '100%' }}>
          <Typography variant="h5" align="center">
            {tabValue === 0 ? 'Login' : 'Register'}
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>
          </Box>
          <Box component="form" noValidate onSubmit={tabValue === 0 ? handleLoginSubmit : handleRegisterSubmit} sx={{ mt: 1 }}>
            {tabValue === 1 && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="register-name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete={tabValue === 0 ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {tabValue === 0 ? 'Sign In' : 'Register'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default AuthPage;
