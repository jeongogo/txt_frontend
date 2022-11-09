import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import Reservation from '../../components/admin/Reservation';
import Loader from '../../components/common/Loader';

const ReservationContainer = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const queryClient = useQueryClient();
  const getRerservation = async () => {
    const { data } = await client.get('/api/admin/reservation');
    return data;
  }

  const events = useQuery("adminEvents", getRerservation);

  const handleDelete = useMutation(
    (id) => {
      return client.delete(`/api/reservation/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("adminEvents");
        toast.success("삭제 완료되었습니다.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setOpenDetail(false);
      },
    },
    {
      onError: () => {
        toast.success("삭제 실패했습니다.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setOpenDetail(false);
      },
    }
  );

  return (
    <>
      <Header />
      {events.isLoading
        ?
        <Loader />
        :
        <Reservation
          events={events}
          handleDelete={handleDelete}
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
        />
      }
      <ToastContainer />
    </>
  )
}

export default ReservationContainer