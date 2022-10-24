import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Login = ({ handleLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Container className='container'>
      <div className="content-wrap">
        <form onSubmit={handleSubmit((data) => handleLogin(data))} autoComplete="off">
          <div className='input-box'>
            <input {...register("email", { required: true })} type="text" required placeholder='이메일' />
          </div>
          <div className='input-box'>
            <input {...register("password", { required: true })} type="password" required placeholder='비밀번호' />
          </div>
          <div className='btn-box'>
            <button type='submit' className='btn md round red'>로그인</button>
          </div>
        </form>
      </div>
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

export default Login