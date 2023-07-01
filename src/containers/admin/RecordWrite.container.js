import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import RecordWrite from '../../components/admin/RecordWrite';

const RecordWriteContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleRegister = async (recordData) => {
    try {
      await client.post(`/api/record/${id}`, recordData);
      navigate('/admin/users');
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }

  return (
    <>
      <Header />
      <RecordWrite handleRegister={handleRegister} />
    </>
  )
}

export default RecordWriteContainer