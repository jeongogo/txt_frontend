import { useNavigate } from "react-router-dom";
import client from '../../lib/api/client';
import useStore from '../../modules/store';
import Modify from "../../components/record/Modify"

const ModifyConainer = () => {
  const navigate = useNavigate();
  const setRecordDetail = useStore((state) => state.setRecordDetail);

  const handleModify = async (id, recordData) => {
    await client.post(`/api/record/${id}/modify`, recordData)
    .then((res) => {
      setRecordDetail(res.data.record);
      navigate(-1);
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <Modify handleModify={handleModify} />
  )
}

export default ModifyConainer