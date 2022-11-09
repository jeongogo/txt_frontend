import React, { useState } from 'react';
import useStore from '../../modules/store';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import Write from './Write';
import Loader from '../common/Loader';
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

const Rerservation = ({ events, mutation, openWritePopup, setOpenWritePopup, handleDelete, openDetail, setOpenDetail }) => {
  const currentUser = useStore((state) => state.currentUser);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [event, setEvent] = useState('FOOTBALL');
  const [date, setDate] = useState('');
  
  const onEventClick = (e) => {
    setTitle(e.event._def.title);
    setId(e.event._def.extendedProps._id);
    setOpenDetail(true);
  }

  const onCloseDetail = () => {
    setTitle('');
    setId('');
    setOpenDetail(false);
  }

  const onDateClick = (e) => {
    if (e.dayEl.childNodes[0].childNodes[1].childNodes.length > 1) {
      alert('1일 1회 신청 가능합니다. 다른 날짜를 선택해 주세요.')
      return false;
    }
    setOpenWritePopup(true);
    setDate(e.dateStr);
  }
  
  const onRegister = () => {
    mutation.mutate({ id: currentUser.id, title: event, date: date, userName: currentUser.name });
    setOpenWritePopup(false);
  }

  const onDelete = () => {
    handleDelete.mutate(id);
  }

  return (
    <Container className='container'>
      <div className="content-wrap">
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
          <Write
            event={event}
            setEvent={setEvent}
            date={date}
            onRegister={onRegister}
            setOpenWritePopup={setOpenWritePopup}
          />
        }
        {openDetail &&
        <Detail
          title={title}
          onCloseDetail={onCloseDetail}
          onDelete={onDelete}
        />
      }
      </div>
    </Container>
  )
}

const Container = styled.div``;

const DetailContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
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
      color: #fff;
    }
    .title {
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
    }
  }
`;

export default Rerservation