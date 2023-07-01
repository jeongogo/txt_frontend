import { useNavigate } from "react-router-dom";
import useStore from '../../modules/store';
import { compareAsc, format } from 'date-fns'
import { FiFileText, FiFilePlus } from "react-icons/fi";
import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

const Users = ({ users, searchName, setSearchName }) => {
  const navigate = useNavigate();
  const setRecordUser = useStore((state) => state.setRecordUser);

  // 검색
  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/admin/users/${searchName}`);
  }

  // 기록 보기
  const onRecordView = (user) => {
    navigate(`/record/${user._id}`);
  }

  // 기록 쓰기
  const onRecordWrite = (user) => {
    setRecordUser(user);
    navigate(`/admin/record/${user._id}`);
  }
  
  return (
    <Container className='admin-container'>
      <div className="head">
        <h1 className='title'>회원 목록</h1>
        <div className="search">
          <form onSubmit={onSearch}>
            <input type="text" onChange={(e) => setSearchName(e.target.value)} value={searchName} />
            <button type='submit'><FiSearch /></button>
          </form>
        </div>
      </div>
      <div className="list">
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
          {users.map((user) => (
            <li key={user._id}>
              <div className="name">{user.name}</div>
              <div className="gender">{user.gender}</div>
              <div className="birthday">{format(new Date(user.birthday), 'yyyy. MM. dd')}</div>
              <div className="hp">{user.phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</div>
              <div className="height">{user.height}</div>
              <div className="weight">{user.weight}</div>
              <div className="email">{user.email}</div>
              <div className="btns">
                <button type='button' onClick={() => onRecordView(user)}><FiFileText /></button>
                <button type='button' onClick={() => onRecordWrite(user)}><FiFilePlus /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search {
      position: relative;
      width: 20rem;
      input[type='text'] {
        width: 100%;
        padding: 0 3.5rem 0 1.5rem;
        border-radius: 20px;
        border-color: #999;
      }
      button {
        position: absolute;
        top: 50%;
        margin-top: -1.3rem;
        right: 1.2rem;
        font-size: 2rem;
      }
    }
  }
  .list {
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
  }
  @media (max-width: 800px) {
    .list {
      ul {
        margin-top: 1rem;
        li {
          position: relative;
          display: block;
          margin-bottom: 0;
          font-size: 1.4rem;
          &:first-child {
            display: none;
          }
          div {
            width: 100% !important;
            text-align: left;
            &.name {
              &::before {
                content: "이름 : ";
              }
            }
            &.gender {
              &::before {
                content: "성별 : ";
              }
            }
            &.birthday {
              &::before {
                content: "생년월일 : ";
              }
            }
            &.hp {
              &::before {
                content: "휴대폰번호 : ";
              }
            }
            &.height {
              &::before {
                content: "키 : ";
              }
            }
            &.weight {
              &::before {
                content: "몸무게 : ";
              }
            }
            &.email {
              &::before {
                content: "이메일 : ";
              }
            }
            &.btns {
              position: absolute;
              top: 50%;
              right: 0;
              width: auto !important;
              margin-top: -1.75rem;
            }
          }
        }
      }
    }
  }
`;

export default Users