import React from 'react';
import { useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Login from '../../components/auth/Login';

const LoginContainer = () => {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const onLogin = async (userData) => {
    const { data } = await client.post('/api/auth/login', userData);
    if (data.status === 'success') {
      setCurrentUser({ 
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        accessToken: data.accessToken,
        isAdmin: data.user.isAdmin
      });
      console.log(data)
      navigate('/');
    }
  }

  return (
    <Login onLogin={onLogin} />
  )
}

export default LoginContainer