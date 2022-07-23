import { speedMarks } from '../../lib/settings';

function TxFee({ speed, fee, token, usdValue }) {

  // if (!speed) {
  //   return (<></>)
  // } else if (!fee || !usdValue) {
  //   return <p>{speedMarks[speed]} -- /-- </p>
  // }

  return (
    <div className="flex flex-nowrap font-novaMono py-1">
      <p className="grow">{speedMarks[speed]} {truncate(fee)} {token}</p>
      <p>${truncate(fee * usdValue)}</p>
    </div>
  );

}

// TODO make proper truncation mechanism
function truncate(value) {
  return String(Math.round(value * 1e8) / 1e8).padEnd(12, '0');
}

export default TxFee;