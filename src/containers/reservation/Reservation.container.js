import React, { useState } from 'react'
import useStore from '../../modules/store';
import { useQuery, useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from "../../lib/api/client";
import Reservation from '../../components/reservation/Rerservation';

const ReservationContainer = () => {
  const currentUser = useStore((state) => state.currentUser);
  const registerSuccess = () => toast.success("신청 완료되었습니다.", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  const registerError = () => toast.success("등록 실패했습니다.", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  const queryClient = useQueryClient();
  const [openWritePopup, setOpenWritePopup] = useState(false);

  const getRerservation = async () => {
    const { data } = await client.get(`/api/reservation/list/${currentUser.id}`);
    return data;
  }

  const events = useQuery("events", getRerservation);

  const mutation = useMutation(data =>
  {
    setOpenWritePopup(false);
    return client.post('/api/reservation/write', data)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('events')
      registerSuccess();
    }
  }, {
    onError: () => {
      registerError();
    }
  });

  return (
    <>
      <Reservation
        events={events}
        mutation={mutation}
        openWritePopup={openWritePopup}
        setOpenWritePopup={setOpenWritePopup}
      />
      <ToastContainer />
    </>
  )
}

export default ReservationContainer