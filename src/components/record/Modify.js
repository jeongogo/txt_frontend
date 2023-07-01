import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useStore from '../../modules/store';
import styled from 'styled-components';

const Modify = ({ handleModify }) => {
  const recordUser = useStore((state) => state.recordUser);
  const recordDetail = useStore((state) => state.recordDetail);
  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues : {
      maxStrL: recordDetail.maxStrL,
      maxStrR: recordDetail.maxStrR,
      powerL: recordDetail.powerL,
      powerR: recordDetail.powerR,
      RSIAvg1st: recordDetail.RSIAvg1st,
      RSIAvg2nd: recordDetail.RSIAvg2nd,
      RSIMax1st: recordDetail.RSIMax1st,
      RSIMax2nd: recordDetail.RSIMax2nd,
      reactionRate1st: recordDetail.reactionRate1st,
      reactionRate2nd: recordDetail.reactionRate2nd,
      agilityFrontBack1st: recordDetail.agilityFrontBack1st,
      agilityFrontBack2nd: recordDetail.agilityFrontBack2nd,
      agilityLeftRight1st: recordDetail.agilityLeftRight1st,
      agilityLeftRight2nd: recordDetail.agilityLeftRight2nd,
      bodyRotationAbilityL: recordDetail.bodyRotationAbilityL ?? 0,
      bodyRotationAbilityR: recordDetail.bodyRotationAbilityR ?? 0,
      gripStrengthL: recordDetail.gripStrengthL ?? 0,
      gripStrengthR: recordDetail.gripStrengthR ?? 0,
      proAgility1st: recordDetail.proAgility1st ?? 0,
      proAgility2nd: recordDetail.proAgility2nd ?? 0,
      sprint1st: recordDetail.sprint1st ?? 0,
      sprint2nd: recordDetail.sprint2nd ?? 0,
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Container className='container'>
      <div className="content-wrap">
      <form onSubmit={handleSubmit((data) => handleModify(recordDetail._id, data))} autoComplete="off">
        <h1>{recordUser.name}</h1>
        <h2>근력 및 파워</h2>
        <div className="input-wrap">
          <label>최대 근력</label>
          <input type="text" {...register("maxStrL", { valueAsNumber: true })} placeholder="L" />
          <input type="text" {...register("maxStrR", { valueAsNumber: true })} placeholder="R" />
        </div>
        <div className="input-wrap">
          <label>파워</label>
          <input type="text" {...register("powerL", { valueAsNumber: true })} placeholder="L" />
          <input type="text" {...register("powerR", { valueAsNumber: true })} placeholder="R" />
        </div>
        <h2>탄력 및 반응속도</h2>
        <div className="input-wrap">
          <label>탄력 (평균)</label>
          <input type="text" {...register("RSIAvg1st", { valueAsNumber: true })} placeholder="1st" />
          <input type="text" {...register("RSIAvg2nd", { valueAsNumber: true })} placeholder="2nd" />
        </div>
        <div className="input-wrap">
          <label>탄력 (최대)</label>
          <input type="text" {...register("RSIMax1st", { valueAsNumber: true })} placeholder="1st" />
          <input type="text" {...register("RSIMax2nd", { valueAsNumber: true })} placeholder="2nd" />
        </div>
        <div className="input-wrap">
          <label>반응 속도</label>
          <input type="text" {...register("reactionRate1st", { valueAsNumber: true })} placeholder="1st" />
          <input type="text" {...register("reactionRate2nd", { valueAsNumber: true })} placeholder="2nd" />
        </div>
        <h2>민첩성</h2>
        <div className="input-wrap">
          <label>앞-뒤 패턴</label>
          <input type="text" {...register("agilityFrontBack1st", { valueAsNumber: true })} placeholder="1st" />
          <input type="text" {...register("agilityFrontBack2nd", { valueAsNumber: true })} placeholder="2nd" />
        </div>
        <div className="input-wrap">
          <label>좌-우 패턴</label>
          <input type="text" {...register("agilityLeftRight1st", { valueAsNumber: true })} placeholder="1st" />
          <input type="text" {...register("agilityLeftRight2nd", { valueAsNumber: true })} placeholder="2nd" />
        </div>
        {recordUser.mainEvent === 'tennis'
          &&
          (
            <>
              <h2>몸통 회전 능력</h2>
              <div className="input-wrap">
                <input type="text" {...register("bodyRotationAbilityL", { valueAsNumber: true })} placeholder="L" />
                <input type="text" {...register("bodyRotationAbilityR", { valueAsNumber: true })} placeholder="R" />
              </div>
              <h2>악력</h2>
              <div className="input-wrap">
                <input type="text" {...register("gripStrengthL", { valueAsNumber: true })} placeholder="L" />
                <input type="text" {...register("gripStrengthR", { valueAsNumber: true })} placeholder="R" />
              </div>
            </>
          )
        }
        {recordUser.mainEvent === 'football'
          &&
          (
            <>
              <h2>방향 전환 능력</h2>
              <div className="input-wrap">
                <input type="text" {...register("proAgility1st", { valueAsNumber: true })} placeholder="1st" />
                <input type="text" {...register("proAgility2nd", { valueAsNumber: true })} placeholder="2nd" />
              </div>
              <h2>전력질주 능력</h2>
              <div className="input-wrap">
                <input type="text" {...register("sprint1st", { valueAsNumber: true })} placeholder="1st" />
                <input type="text" {...register("sprint2nd", { valueAsNumber: true })} placeholder="2nd" />
              </div>
            </>
          )
        }
        <div className="btn-wrap">
          <button type='submit' className='btn lg round red'>수정하기</button>
        </div>
      </form>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .content-wrap {
    form {
      margin: 0 auto;
      max-width: 60rem;
      h1 {
        font-size: 2rem;
        text-align: center;
      }
      h2 {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        font-size: 1.6rem;
      }
      .input-wrap {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        label {
          width: 10rem;
          flex-shrink: 0;
          font-size: 1.4rem;
        }
        input {
          width: 100%;
          margin-left: 1rem;
        }
      }
      .btn-wrap {
        margin-top: 4rem;
        padding-bottom: 2rem;
        text-align: center;
      }
    }
  }
`;

export default Modify