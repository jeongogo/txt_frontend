import React from 'react'
import Loader from '../common/Loader';
import styled from 'styled-components';

const Users = ({ users }) => {
  return (
    <Container className='admin-container'>
      <h1 className='title'>회원 목록</h1>
      {users.isLoading
        ?
          <Loader />
        :
        <ul>
          {users.data.users.map((u) => (
            <li key={u._id}>{u.name}</li>
          ))}
        </ul>
      }      
    </Container>
  )
}

const Container = styled.div`
  
`;

export default Users