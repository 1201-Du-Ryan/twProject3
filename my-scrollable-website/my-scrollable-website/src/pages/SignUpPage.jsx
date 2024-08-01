//path = my-scrollable-website/my-scrollable-website/src/pages/SignUpPage.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import InputBox from '../components/InputBox';
import CustomButton from '../components/custom_button';

const SignUpPage = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form style={{ width: '100%', marginTop: 3 }}>
          <InputBox label="Username*" type="text" />
          <InputBox label="Email*" type="email" />
          <InputBox label="Password*" type="password" />
          <CustomButton title="Sign Up" type="submit" />
        </form>
      </Box>
    </Container>
  );
};

export default SignUpPage;
