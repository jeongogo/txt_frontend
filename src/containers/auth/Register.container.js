import React from 'react'
import { useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Register from '../../components/auth/Register'

const RegisterContainer = () => {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const handleRegister = async (userData) => {
    await client.post('/api/auth/register', userData)
    .then((res) => {
      const { user } = res.data;
      setCurrentUser({ 
        id: user._id,
        email: user.email,
        name: user.name,
        accessToken: res.data.accessToken,
        isAdmin: user.isAdmin
      });
      navigate('/');

    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <Register handleRegister={handleRegister} />
  )
}

export default RegisterContainer