import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import { FiX } from "react-icons/fi";
import styled from 'styled-components';

const Detail = ({ title, onCloseDetail, onDelete }) => {
  return (
    <DetailContainer>
      <div className="content">
        <button type='button' className='close' onClick={onCloseDetail}><FiX /></button>
        <div className='title'>{title}</div>
        <button type='button' className='btn md round red' onClick={(e) => onDelete(e)}>삭제하기</button>
      </div>
    </DetailContainer>
  )
}

const Reservation = ({ events, handleDelete, openDetail, setOpenDetail }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [filterEvents, setFilterEvents] = useState([]);
  
  useEffect(() => {
    const newEvents = events.data.events.map((item) => {
      let newObject = {};
      newObject["title"] = item["userName"] + ' - ' + item["title"];
      newObject["date"] = item["date"];
      newObject["_id"] = item["_id"];
      return newObject;
    });
    setFilterEvents(newEvents);
  }, [events]);

  const onEventClick = (e) => {
    setTitle(e.event._def.title);
    console.log(e.event._def)
    setId(e.event._def.extendedProps._id);
    setOpenDetail(true);
  }

  const onCloseDetail = () => {
    setTitle('');
    setId('');
    setOpenDetail(false);
  }

  const onDelete = () => {
    handleDelete.mutate(id);
  }

  return (
    <Container className='admin-container'>
      {filterEvents &&
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          locale="ko"
          events={filterEvents}
          eventColor={"#66BB6A"}
          eventClick={onEventClick}
        />
      }
      {openDetail &&
        <Detail
          title={title}
          onCloseDetail={onCloseDetail}
          onDelete={onDelete}
        />
      }
    </Container>
  )
}

const Container = styled.div`
  
`;

const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  .content {
    position: relative;
    min-width: 20rem;
    padding: 2.5rem 3rem;
    text-align: center;
    background-color: #fff;
    border-radius: 2rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
    .close {
      position: absolute;
      top: -4.2rem;
      right: 0;
      font-size: 3.5rem;
      color: #000;
    }
    .title {
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
    }
  }
`;

export default Reservation