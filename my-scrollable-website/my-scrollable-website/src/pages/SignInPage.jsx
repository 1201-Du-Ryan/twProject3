// src/pages/SignInPage.jsx
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import { Link, FormHelperText, Box } from '@mui/material';
import InputBox from '../components/InputBox';
import CustomButton from '../components/custom_button';
import BoxWrapper from '../components/BoxWrapper';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && !emailError) {
      // Later you will send data to Firebase here
      const userData = {
        email,
        password,
      };
      console.log('User Data to be sent to Firebase:', userData);

      // Reset fields after successful submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <BoxWrapper title="Sign In" maxWidth="lg">
      <form style={{ width: '100%', marginTop: 3 }} onSubmit={handleSubmit}>
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
          <Link component={RouterLink} to="/forgot-password" variant="body2">
            Forgot Password? Click here
          </Link>
        </Box>
      </form>
    </BoxWrapper>
  );
};

export default SignInPage;
