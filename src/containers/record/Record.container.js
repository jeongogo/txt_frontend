import React from 'react'
import { useParams } from "react-router-dom";
import client from '../../lib/api/client';
import Record from '../../components/record/Record';

const RecordContainer = () => {
  const { id } = useParams();
  
  const handleRegister = async (recordData) => {
    client.post(`/api/admin/record/${id}`, recordData)
    .then((res) => {

    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <Record handleRegister={handleRegister} />
  )
}

export default RecordContainer