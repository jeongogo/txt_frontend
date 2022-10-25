import React from 'react';
import { useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Login from '../../components/auth/Login';

const LoginContainer = () => {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const handleLogin = async (userData) => {
    await client.post('/api/auth/login', userData)
    .then((res) => {
      const { user } = res.data;
      setCurrentUser({ 
        id: user._id,
        email: user.email,
        name: user.name,
        accessToken: res.data.accessToken,
        isAdmin: user.isAdmin
      });
      console.log(res.data);
      navigate('/');
    }).catch((e) => {
      console.log(e)
    });
  }

  return (
    <Login handleLogin={handleLogin} />
  )
}

export default LoginContainer