import React from 'react'
import { useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Register from '../../components/auth/Register'

const RegisterContainer = () => {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const onRegister = async (userData) => {
    const { data } = await client.post('/api/auth/register', userData);
    if (data.status === 'success') {
      setCurrentUser({ 
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        accessToken: data.accessToken,
        isAdmin: data.user.isAdmin
      });
      navigate('/');
    }
  }

  return (
    <Register onRegister={onRegister} />
  )
}

export default RegisterContainer