import React from 'react'
import { useParams } from "react-router-dom";
import client from '../../lib/api/client';
import Record from '../../components/record/Record';

const RecordContainer = () => {
  const { id } = useParams();
  
  return (
    <Record />
  )
}

export default RecordContainer