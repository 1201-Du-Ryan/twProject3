// path = my-scrollable-website/my-scrollable-website/src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { FormHelperText } from '@mui/material';
import InputBox from '../components/InputBox';
import CustomButton from '../components/custom_button';
import BoxWrapper from '../components/BoxWrapper';
import { validatePassword, validateEmail } from '../utils/validationUtils';

const SignUpPage = () => {
  const [fullName, setFullName] = useState(''); // State for Full Name
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value); // Update fullName state
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && !emailError) {
      // Later you will send data to Firebase here
      const userData = {
        fullName, // Include fullName in the data to be sent to Firebase
        email,
        password,
      };
      console.log('User Data to be sent to Firebase:', userData);

      // Reset fields after successful submission
      setFullName('');
      setPassword('');
      setEmail('');
    }
  };

  return (
    <BoxWrapper title="Register" maxWidth="lg">
      <form style={{ width: '100%', marginTop: 3 }} onSubmit={handleSubmit}>
        <InputBox 
          label="Full Name*" 
          type="text" 
          value={fullName} 
          onChange={handleFullNameChange} // Handle fullName input change
        />
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
    </BoxWrapper>
  );
};

export default SignUpPage;
