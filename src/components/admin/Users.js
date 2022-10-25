import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import useStore from '../../modules/store';
import Loader from '../common/Loader';
import { FiFileText, FiFilePlus } from "react-icons/fi";
import styled from 'styled-components';

const Users = ({ users }) => {
  const navigate = useNavigate();
  const setRecordUser = useStore((state) => state.setRecordUser);

  // 기록하기
  const onRecordWrite = (user) => {
    setRecordUser(user);
    navigate(`/admin/record/${user._id}`);
  }
  return (
    <Container className='admin-container'>
      <h1 className='title'>회원 목록</h1>
      {users.isLoading ?
        <Loader />
        :
        <ul>
          {users.data.users.map((user) => (
            <li key={user._id}>
              <div className="name">{user.name}</div>
              <Link to={`/record/${user._id}`} target='_blank'><FiFileText /></Link>
              <button type='button' onClick={() => onRecordWrite(user)}><FiFilePlus /></button>
            </li>
          ))}
        </ul>
      }      
    </Container>
  )
}

const Container = styled.div`
  ul {
    margin-top: 2rem;
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      font-size: 1.6rem;
      border-bottom: 1px solid #eee;
      .name {
        margin-right: auto;
      }
      a, button {
        margin-left: 1rem;
        font-size: 2.4rem;
      }
    }
  }
`;

export default Users