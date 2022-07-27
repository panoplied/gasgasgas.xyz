function TxFee({ speedMark, fee, token, usdValue }) {

  return (
    <div className="flex flex-nowrap font-robotoMonoLight py-1">
      <p className="grow">{speedMark} {fee ? truncate(fee) : '--/--'} {token}</p>
      <p>${(fee && usdValue) ? truncate(fee * usdValue) : '--/--'}</p>
    </div>
  );

}

// TODO make proper truncation mechanism
function truncate(value) {
  return String(Math.round(value * 1e8) / 1e8).padEnd(10, '0');
}

export default TxFee;