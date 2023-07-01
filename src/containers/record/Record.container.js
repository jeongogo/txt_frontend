import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import useStore from '../../modules/store';
import client from '../../lib/api/client';
import Record from '../../components/record/Record';
import Loader from '../../components/common/Loader';

const RecordContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const setRecordDetail = useStore((state) => state.setRecordDetail);
  const setRecordUser = useStore((state) => state.setRecordUser);

  const getRecord = async () => {
    const { data } = await client.get(`/api/record/${id}`);
    return data;
  }

  const records = useQuery("records", getRecord);

  const handleRecordDetail = (data) => {
    setRecordDetail(data);
    navigate(`/record/detail/${id}`);
  }

  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await client.get(`/api/auth/user/${id}`);
      setRecordUser(data.user);
    }
    getUser();
  }, [id, setRecordUser]);

  return (
    <>
      {records.isLoading ?
        <Loader />
        :
        <Record records={records} handleRecordDetail={handleRecordDetail} />
      }
    </>
  )
}

export default RecordContainer