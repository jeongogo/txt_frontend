import React, { useState } from "react";
import useStore from "../../modules/store";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import client from "../../lib/api/client";
import Reservation from "../../components/reservation/Rerservation";

const ReservationContainer = () => {
  const queryClient = useQueryClient();
  const currentUser = useStore((state) => state.currentUser);
  const [openWritePopup, setOpenWritePopup] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const getRerservation = async () => {
    const { data } = await client.get(
      `/api/reservation/list/${currentUser.id}`
    );
    return data;
  };

  const events = useQuery("events", getRerservation);

  const mutation = useMutation(
    (data) => {
      return client.post("/api/reservation/write", data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        toast.success("신청 완료되었습니다.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setOpenWritePopup(false);
      },
    },
    {
      onError: () => {
        toast.success("등록 실패했습니다.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setOpenWritePopup(false);
      },
    }
  );

  const handleDelete = useMutation(
    (id) => {
      return client.delete(`/api/reservation/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
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
      <Reservation
        events={events}
        mutation={mutation}
        openWritePopup={openWritePopup}
        setOpenWritePopup={setOpenWritePopup}
        handleDelete={handleDelete}
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
      />
      <ToastContainer />
    </>
  );
};

export default ReservationContainer;
