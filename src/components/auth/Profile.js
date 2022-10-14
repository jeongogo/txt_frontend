import React from 'react'
import useStore from '../../modules/store';
import styled from 'styled-components';

const Profile = () => {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <Container className='container'>
      <div className="profile-box">
        <ul>
          <li>
            <label>이메일</label>
            <div>{currentUser.email}</div>
          </li>
          <li>
            <label>이름</label>
            <div>{currentUser.name}</div>
          </li>
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  .profile-box {
    padding-top: 5rem;
    ul {
      li {
        display: flex;
        align-items: center;
        label {
          
        }
      }
    }
  }
`;

export default Profile