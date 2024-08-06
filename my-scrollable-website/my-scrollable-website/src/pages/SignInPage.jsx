// src/pages/SignInPage.jsx
import React, { useState } from 'react';
import { Container, Typography, Box, Link, FormHelperText } from '@mui/material';
import InputBox from '../components/InputBox';
import CustomButton from '../components/custom_button';
import { validatePassword, validateEmail } from '../utils/validationUtils';



const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Typography component="h1" variant="h5" color="black">
            Sign In
          </Typography>
          <form style={{ width: '100%', marginTop: 3 }}>
            <InputBox 
              label="Email*" 
              type="email" 
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <FormHelperText error>{emailError}</FormHelperText>
            )}
            <InputBox 
              label="Password*" 
              type="password" 
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <FormHelperText error>{passwordError}</FormHelperText>
            )}
            <CustomButton title="Sign In" type="submit" disabled={!!passwordError || !!emailError} />
            <Box sx={{ mt: 2 }}>
              <Link href="#" variant="body2">
                Forgot Password? Click here
              </Link>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default SignInPage;