// src/pages/SignInPage.jsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import InputBox from '../components/InputBox';
import CustomButton from '../components/custom_button';

const SignInPage = () => {
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
          Sign In
        </Typography>
        <form style={{ width: '100%', marginTop: 3 }}>
          <InputBox label="Username/Email" type="text" />
          <InputBox label="Password" type="password" />
          <CustomButton title="Sign In" type="submit" />
          <Link href="#" variant="body2">
            Forgot Password? Click here
          </Link>
        </form>
      </Box>
    </Container>
  );
};

export default SignInPage;
