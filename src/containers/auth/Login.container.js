import React from 'react';
import { useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Login from '../../components/auth/Login';

const LoginContainer = () => {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const handleLogin = async (userData) => {
    try {
      const { data } = await client.post('/api/auth/login', userData);
      if (data.status === 'failed') {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
        return;
      }
      setCurrentUser({ 
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        accessToken: data.accessToken,
        isAdmin: data.user.isAdmin
      });
      navigate('/');
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }

  return (
    <Login handleLogin={handleLogin} />
  )
}

export default LoginContainer