import { useForm } from "react-hook-form";
import useStore from '../../modules/store';
import styled from 'styled-components';

const RecordWrite = ({ handleRegister }) => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const recordUser = useStore((state) => state.recordUser);

  return (
    <Container className='admin-container'>
      <h1 className='title'>측정하기</h1>
      <form onSubmit={handleSubmit((data) => handleRegister(data))} autoComplete="off">
        <h1>{recordUser.name}</h1>
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
        <h2>탄력 및 반응속도</h2>
        <div className="input-wrap">
          <label>탄력 (평균)</label>
          <input type="text" {...register("RSIAvg1st", { required: true })} placeholder="1st" />
          <input type="text" {...register("RSIAvg2nd", { required: true })} placeholder="2nd" />
        </div>
        <div className="input-wrap">
          <label>탄력 (최대)</label>
          <input type="text" {...register("RSIMax1st", { required: true })} placeholder="1st" />
          <input type="text" {...register("RSIMax2nd", { required: true })} placeholder="2nd" />
        </div>
        <div className="input-wrap">
          <label>반응 속도</label>
          <input type="text" {...register("reactionRate1st", { required: true })} placeholder="1st" />
          <input type="text" {...register("reactionRate2nd", { required: true })} placeholder="2nd" />
        </div>
        <h2>민첩성</h2>
        <div className="input-wrap">
          <label>앞-뒤 패턴</label>
          <input type="text" {...register("agilityFrontBack1st", { required: true })} placeholder="1st" />
          <input type="text" {...register("agilityFrontBack2nd", { required: true })} placeholder="2nd" />
        </div>
        <div className="input-wrap">
          <label>좌-우 패턴</label>
          <input type="text" {...register("agilityLeftRight1st", { required: true })} placeholder="1st" />
          <input type="text" {...register("agilityLeftRight2nd", { required: true })} placeholder="2nd" />
        </div>
        {recordUser.mainEvent === 'tennis'
          &&
          (
            <>
              <h2>몸통 회전 능력</h2>
              <div className="input-wrap">
                <input type="text" {...register("bodyRotationAbilityL", { required: true })} placeholder="L" />
                <input type="text" {...register("bodyRotationAbilityR", { required: true })} placeholder="R" />
              </div>
              <h2>악력</h2>
              <div className="input-wrap">
                <input type="text" {...register("gripStrengthL", { required: true })} placeholder="L" />
                <input type="text" {...register("gripStrengthR", { required: true })} placeholder="R" />
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
                <input type="text" {...register("proAgility1st", { required: true })} placeholder="1st" />
                <input type="text" {...register("proAgility2nd", { required: true })} placeholder="2nd" />
              </div>
              <h2>전력질주 능력</h2>
              <div className="input-wrap">
                <input type="text" {...register("sprint1st", { required: true })} placeholder="1st" />
                <input type="text" {...register("sprint2nd", { required: true })} placeholder="2nd" />
              </div>
            </>
          )
        }
        <div className="btn-wrap">
          <button type='submit' className='btn lg round red'>등록하기</button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
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
`;

export default RecordWrite