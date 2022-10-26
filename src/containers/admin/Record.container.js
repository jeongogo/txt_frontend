import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import Record from '../../components/admin/Record';

const RecordContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleRegister = async (recordData) => {
    await client.post(`/api/record/${id}`, recordData)
    .then((res) => {
      navigate('/admin/users');
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <>
      <Header />
      <Record handleRegister={handleRegister} />
    </>
  )
}

export default RecordContainer