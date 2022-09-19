import { ethers } from 'ethers';

// map(f => weiToEth(f * multi));

function TxFee({ speedMark, fee, multi, token, usd, emptyValue }) {

  let txPrice = null; 

  if (fee && multi) {
    txPrice = truncate(weiToEth(fee * multi));
  }

  return (
    <div className="flex flex-nowrap font-robotoMonoLight py-1">

      {/* Native Token TX Price */}
      <p className="grow">
        {speedMark}{' '}
        {txPrice ? txPrice : emptyValue}
        {' '}{token}
      </p>

      {/* USD TX Price */}
      <p>
        ${(txPrice && usd) ? (txPrice * usd) : emptyValue}
      </p>

    </div>
  );

}

// TODO make proper truncation mechanism
function truncate(value) {
  return String(Math.round(value * 1e8) / 1e8).padEnd(10, '0');
}

function weiToEth(val) {
  return ethers.utils.formatEther(val.toString());
}

export default TxFee;