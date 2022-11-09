import React from 'react';
import { FiX } from "react-icons/fi";
import styled from 'styled-components';

const Write = ({ setEvent, date, onRegister, setOpenWritePopup }) => {
  return (
    <Container>
      <div className="content">
        <button type='button' className='close' onClick={() => setOpenWritePopup(false)}><FiX /></button>
        <div className='date'>{date}</div>
        <div className="select">
          <select onChange={(e) => setEvent(e.target.value)}>
            <option value="FOOTBALL">FOOTBALL</option>
            <option value="TENNIS">TENNIS</option>
          </select>
        </div>
        <div className="btn">
          <button type='button' className='btn md round red' onClick={onRegister}>신청하기</button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  background-color: rgba(0,0,0,0.5);
  .content {
    position: relative;
    min-width: 20rem;
    padding: 2.5rem 3rem;
    text-align: center;
    background-color: #fff;
    border-radius: 2rem;
    .close {
      position: absolute;
      top: -4.2rem;
      right: 0;
      font-size: 3.5rem;
      color: #fff;
    }
    .date {
      font-size: 1.6rem;
    }
    .select {
      margin-top: 1rem;
      select {
        width: 100%;
      }
    }
    .btn {
      margin-top: 1rem;
    }
  }
`;

export default Write