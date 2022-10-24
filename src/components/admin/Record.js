import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Record = ({ handleRegister }) => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  return (
    <Container className='admin-container'>
      <h1 className='title'>측정하기</h1>
      <form onSubmit={handleSubmit((data) => handleRegister(data))} autoComplete="off">
        <h2>근력 및 파워</h2>
        <div className="input-wrap">
          <label>최대 근력</label>
          <input type="text" {...register("maxStrL", { required: true })} placeholder="L" />
          <input type="text" {...register("maxStrR", { required: true })} placeholder="R" />
        </div>
        <div className="input-wrap">
          <label>파워</label>
          <input type="text" {...register("powerL", { required: true })} placeholder="L" />
          <input type="text" {...register("powerR", { required: true })} placeholder="R" />
        </div>
        <h2>2. 탄력 및 반응속도</h2>
        <div className="input-wrap">
          <label>탄력 (평균)</label>
          <input type="text" {...register("RSIAvg1st", { required: true })} placeholder="1" />
          <input type="text" {...register("RSIAvg2nd", { required: true })} placeholder="2" />
        </div>
        <div className="input-wrap">
          <label>탄력 (최대)</label>
          <input type="text" {...register("RSIMax1st", { required: true })} placeholder="1" />
          <input type="text" {...register("RSIMax2nd", { required: true })} placeholder="2" />
        </div>
        <div className="input-wrap">
          <label>반응 속도</label>
          <input type="text" {...register("reactionRate1st", { required: true })} placeholder="1" />
          <input type="text" {...register("reactionRate2nd", { required: true })} placeholder="2" />
        </div>
        <h2>3. 민첩성</h2>
        <div className="input-wrap">
          <label>앞-뒤 패턴</label>
          <input type="text" {...register("agilityFrontBack1st", { required: true })} placeholder="1" />
          <input type="text" {...register("agilityFrontBack2nd", { required: true })} placeholder="2" />
        </div>
        <div className="input-wrap">
          <label>좌-우 패턴</label>
          <input type="text" {...register("agilityLeftRight1st", { required: true })} placeholder="1" />
          <input type="text" {...register("agilityLeftRight2nd", { required: true })} placeholder="2" />
        </div>
        <h2>4. 몸통 회전 능력</h2>
        <div className="input-wrap">
          <input type="text" {...register("bodyRotationAbilityL", { required: true })} placeholder="L" />
          <input type="text" {...register("bodyRotationAbilityR", { required: true })} placeholder="R" />
        </div>
        <h2>5. 악력</h2>
        <div className="input-wrap">
          <input type="text" {...register("gripStrengthL", { required: true })} placeholder="L" />
          <input type="text" {...register("gripStrengthR", { required: true })} placeholder="R" />
        </div>
        <div className="btn-wrap">
          <button type='submit' className='btn md round red'>등록하기</button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
  
`;

export default Record