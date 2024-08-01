//path = my-scrollable-website/my-scrollable-website/src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { Container, Typography, Box, FormHelperText } from '@mui/material';
import InputBox from '../components/InputBox';
import CustomButton from '../components/custom_button';
import { validatePassword, validateEmail } from '../utils/validationUtils';



const SignUpPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
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
            Register
          </Typography>
          <form style={{ width: '100%', marginTop: 3 }}>
            <InputBox label="Full Name*" type="text" />
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
            <CustomButton title="Sign Up" type="submit" disabled={!!passwordError || !!emailError} />
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpPage;
