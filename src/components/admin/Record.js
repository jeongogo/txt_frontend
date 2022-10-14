import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Record = ({ handleRegister }) => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onRegister = (data) => {
    handleRegister(data);
  };

  return (
    <Container className='admin-container'>
      <h1 className='title'>측정하기</h1>
      <form onSubmit={handleSubmit(onRegister)} autoComplete="off">
        <input type="text" {...register("test", { required: true })} />
      </form>
    </Container>
  )
}

const Container = styled.div`
  
`;

export default Record