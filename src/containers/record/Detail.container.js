import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Detail from '../../components/record/Detail'

const DetailContainer = () => {
  const { id } = useParams();
  const currentUser = useStore((state) => state.currentUser);
  const setRecordUser = useStore((state) => state.setRecordUser);

  const getUser = async () => {
    const { data } = await client.get(`/api/auth/user/${id}`);
    setRecordUser(data.user);
  }

  useEffect(() => {
    if (currentUser.isAdmin) {
      getUser();
    }
  }, []);

  return (
    <Detail />
  )
}

export default DetailContainer