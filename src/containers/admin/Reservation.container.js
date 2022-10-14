import React from 'react'
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import Reservation from '../../components/admin/Reservation';
import Loader from '../../components/common/Loader';

const ReservationContainer = () => {
  const getRerservation = async () => {
    const { data } = await client.get('/api/admin/reservation');
    return data;
  }

  const { isLoading, data } = useQuery("adminEvents", getRerservation);

  return (
    <>
      <Header />
      {isLoading
        ?
          <Loader />
        :
          <Reservation data={data.events} />
      }
    </>
  )
}

export default ReservationContainer