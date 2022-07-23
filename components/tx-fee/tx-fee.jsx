import { speedMarks } from '../../lib/settings';

function TxFee({ speed, fee, token, usdValue }) {

  // if (!speed) {
  //   return (<></>)
  // } else if (!fee || !usdValue) {
  //   return <p>{speedMarks[speed]} -- /-- </p>
  // }

  return (
    <div>
      <p>{speedMarks[speed]} {fee} {token} ${fee * usdValue}</p>
    </div>
  );

}

export default TxFee;