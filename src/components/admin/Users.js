import React from 'react'
import styled from 'styled-components';

const Users = ({ users }) => {
  return (
    <Container className='admin-container'>
      {users.isLoading
        ?
          <div>loading</div>
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