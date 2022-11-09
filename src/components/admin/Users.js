import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import useStore from '../../modules/store';
import Loader from '../common/Loader';
import { compareAsc, format } from 'date-fns'
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
        <>
          <ul>
            <li>
              <div className="name">이름</div>
              <div className="gender">성별</div>
              <div className="birthday">생일</div>
              <div className="hp">휴대폰번호</div>
              <div className="height">키</div>
              <div className="weight">몸무게</div>
              <div className="email">이메일</div>
              <div className="btns"></div>
            </li>
            {users.data.users.map((user) => (
              <li key={user._id}>
                <div className="name">{user.name}</div>
                <div className="gender">{user.gender}</div>
                <div className="birthday">{format(new Date(user.birthday), 'yyyy. MM. dd')}</div>
                <div className="hp">{user.phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</div>
                <div className="height">{user.height}</div>
                <div className="weight">{user.weight}</div>
                <div className="email">{user.email}</div>
                <div className="btns">
                  <Link to={`/record/${user._id}`} target='_blank'><FiFileText /></Link>
                  <button type='button' onClick={() => onRecordWrite(user)}><FiFilePlus /></button>
                </div>
              </li>
            ))}
          </ul>
        </>
      }      
    </Container>
  )
}

const Container = styled.div`
  ul {
    margin-top: 2rem;
    border-top: 1px solid #ddd;
    li {
      display: flex;
      padding: 1rem;
      margin-bottom: 1rem;
      font-size: 1.6rem;
      text-align: center;
      border-bottom: 1px solid #ddd;
      div {
        width: 10%;
        &.email {
          width: 20%;
        }
        &.hp, &.birthday {
          width: 15%;
        }
        &.btns {
          a, button {
            margin-left: 1rem;
            font-size: 2.4rem;
          }
        }
      }
    }
  }
`;

export default Users