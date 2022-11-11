import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Register = ({ handleRegister }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Container>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit((data) => handleRegister(data))} autoComplete="off">
        <div className='input-box'>
          <label>이메일</label>
          <input {...register("email", { required: true })} type="email" />
        </div>
        <div className='input-box'>
          <label>비밀번호</label>
          <div className='wrap'>
            <input {...register("password", { required: true, minLength: 8 })} type="password" />
            {errors.password && (
              <p className='error'>8자 이상 입력해 주세요.</p>
            )}
          </div>
        </div>
        <div className='input-box'>
          <label>이름</label>
          <input {...register("name", { required: true })} type="text" />
        </div>
        <div className='input-box'>
          <label>성별</label>
          <div className='wrap'>
            <input {...register("gender")} type="radio" id='mail' value="남자" />
            <label htmlFor="mail">남자</label>
            <input {...register("gender")} type="radio" id='femail' value="여자" />
            <label htmlFor="femail">여자</label>
          </div>
        </div>
        <div className='input-box'>
          <label>생년월일</label>
          <input {...register("birthday", { required: true })} type="date" />
        </div>
        <div className='input-box'>
          <label>휴대폰번호</label>
          <input {...register("phoneNumber", { required: true })} type="text" />
        </div>
        <div className='input-box'>
          <label>종목</label>
          <select {...register("mainEvent", { required: true })}>
            <option value="축구">축구</option>
            <option value="테니스">테니스</option>
          </select>
        </div>
        <div className='input-box'>
          <label>키</label>
          <input {...register("height")} type="text" placeholder='cm' />
        </div>
        <div className='input-box'>
          <label>체중</label>
          <input {...register("weight")} type="text" placeholder='kg' />
        </div>
        <div className='btn-box'>
          <button type='submit' className='btn md round red'>회원가입</button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
  h1 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }
  form {
    width: 35rem;
    .input-box {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      .wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        label {
          width: auto;
          margin-right: 2rem;
        }
      }
      label {
        width: 8rem;
        font-size: 1.4rem;
        flex-shrink: 0;
        cursor: pointer;
      }
      select,
      input[type="text"],
      input[type="password"],
      input[type="email"],
      input[type="date"] {
        width: 100%;
      }
      p {
        margin-top: 0.5rem;
        width: 100%;
        color: #B71C1C;
      }
    }
    .btn-box {
      margin-top: 3rem;
      .btn {
        width: 100%;
        height: 4rem;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
`;

export default Register