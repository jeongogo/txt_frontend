import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import useStore from '../../modules/store';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import Write from './Write';
import Loader from '../common/Loader';
import styled from 'styled-components';

const Rerservation = ({ events, mutation, openWritePopup, setOpenWritePopup }) => {
  const { type } = useParams();
  const currentUser = useStore((state) => state.currentUser);
  const [date, setDate] = useState('');

  const onEventClick = (e) => {
    console.log(e)
  }

  const onDateClick = (e) => {
    setOpenWritePopup(true);
    setDate(e.dateStr);
  }
  
  const onRegister = () => {
    mutation.mutate({ id: currentUser.id, title: type, date: date, userName: currentUser.name });
    setOpenWritePopup(false);
  }

  return (
    <Container className='container'>
      {(events.isLoading || mutation.isLoading) && <Loader /> }
      {events.data &&
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          locale="ko"
          events={events.data}
          eventColor={"#66BB6A"}
          dateClick={onDateClick}
          eventClick={onEventClick}
        />
      }
      {openWritePopup &&
        <Write date={date} onRegister={onRegister} setOpenWritePopup={setOpenWritePopup}
      />}
    </Container>
  )
}

const Container = styled.div``;

export default Rerservation