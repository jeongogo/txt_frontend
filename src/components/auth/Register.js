import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Register = ({ onRegister }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Container>
      <form onSubmit={handleSubmit((data) => onRegister(data))} autoComplete="off">
        <div className='input-box'>
          <input {...register("email", { required: true })} type="text" required placeholder='이메일' />
        </div>
        <div className='input-box'>
          <input {...register("name", { required: true })} type="text" required placeholder='이름' />
        </div>
        <div className='input-box'>
          <input {...register("height", { required: true })} type="text" required placeholder='키(cm)' />
        </div>
        <div className='input-box'>
          <input {...register("weight", { required: true })} type="text" required placeholder='체중(kg)' />
        </div>
        <div className='input-box'>
          <input {...register("birthday", { required: true })} type="date" required placeholder='생년월일' />
        </div>
        <div className='input-box'>
          <input {...register("gender")} type="radio" id='mail' value="남자" />
          <label htmlFor="mail">남자</label>
          <input {...register("gender")} type="radio" id='femail' value="여자" />
          <label htmlFor="femail">여자</label>
        </div>
        <div className='input-box'>
          <input {...register("password", { required: true })} type="password" required placeholder='비밀번호' />
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
  width: 100%;
  padding-top: 10vh;
  form {
    width: 25rem;
    .input-box {
      margin-bottom: 1rem;
      input[type="text"],
      input[type="password"] {
        width: 100%;
      }
    }
    .btn-box {
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