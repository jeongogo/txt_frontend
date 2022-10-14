import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/admin/Header';
import Record from '../../components/admin/Record';

const RecordContainer = () => {
  const { id } = useParams();
  
  const handleRegister = (data) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <Record handleRegister={handleRegister} />
    </>
  )
}

export default RecordContainer