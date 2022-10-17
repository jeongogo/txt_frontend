import React from 'react'
import { useNavigate } from "react-router-dom";
import Loader from '../common/Loader';
import styled from 'styled-components';

const Users = ({ users }) => {
  const navigate = useNavigate();

  const goRecord = (id) => {
    navigate(`/admin/record/${id}`);
  }

  return (
    <Container className='admin-container'>
      <h1 className='title'>회원 목록</h1>
      {users.isLoading
        ?
          <Loader />
        :
        <ul>
          {users.data.users.map((u) => (
            <li key={u._id}>
              <div className="name">{u.name}</div>
              <button type='button' onClick={() => goRecord(u._id)}>기록하기</button>
            </li>
          ))}
        </ul>
      }      
    </Container>
  )
}

const Container = styled.div`
  ul {
    li {
      display: flex;
    }
  }
`;

export default Users