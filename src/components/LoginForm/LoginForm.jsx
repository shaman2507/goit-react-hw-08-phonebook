import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/auth/operationsAuth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password })).unwrap()
    .then(() => navigate('/contacts')).then(()=>toast.success('Welcome back!'))
    .catch(() => toast.error('wrong email or password'))
    if (email === '' || password === '') {
      return;
    }
    setEmail('');
    setPassword('');
  };

  const emailColor = email === '' ? 'secondary' : 'warning'; 
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          className={css.field}
          label="Email"
          variant="filled"
          id="email"
          type="email"
          color={emailColor} 
          onChange={handleChangeEmail}
          value={email}
          focused
          required
        />
        <TextField
          className={css.field}
          label="Password"
          variant="filled"
          id="password"
          type="password"
          color="secondary" 
          onChange={handleChangePassword}
          value={password}
          focused
          required
        />
        <Button className={css.btn} variant="contained" color="success" type="submit" >
          submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;