import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import Record from '../../components/admin/Record';

const RecordContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleRegister = async (recordData) => {
    const { data } = await client.post(`/api/admin/record/${id}`, recordData);
    navigate('/admin/users');
  }

  return (
    <>
      <Header />
      <Record handleRegister={handleRegister} />
    </>
  )
}

export default RecordContainer