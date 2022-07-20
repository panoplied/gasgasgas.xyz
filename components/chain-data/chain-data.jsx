import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { chains } from '../../lib/settings';
import { ethers } from 'ethers';

function ChainData({ chain }) {

  const { name, usdSymbol } = chains[chain];

  const { data: gasData, isLoading: gasLoading, isError: gasError } = useChain(chain);
  const { data: usdData, isLoading: usdLoading, isError: usdError } = usePrice(chain);

  if (gasLoading) return <p>Gas loading...</p>
  if (gasError) return <p>Failed to load gas</p>
  if (usdLoading) return <p>USD loading...</p>
  if (usdError) return <p>Failed to load USD value</p>

  // return (
  //   <div style={{color: "white"}}>
  //     <h2>{name}</h2>
  //     <div style={{lineHeight: "0.75em"}}>
  //       <p>⏱️ {gasData._seconds}</p>
  //       <p>🐢 {gasData.data.slow.price}</p>
  //       <p>🚗 {gasData.data.normal.price}</p>
  //       <p>🚀 {gasData.data.fast.price}</p>
  //       <p>💲 {usdData[usdSymbol].usd}</p>
  //     </div>
  //   </div>
  // );

  // Only destructure and assign when data loaded without errors
  const {
    // _seconds: seconds,
    data: {
      slow: {
        price: priceSlow
      },
      normal: {
        price: priceNormal
      },
      fast: {
        price: priceFast,
      },
    }
  } = gasData;

  const { [usdSymbol]: { usd: usdValue } } = usdData;

  return (
    <div style={{color: "white", padding: "0 3em", marginBottom: "1em"}}>
      <h2>{name}</h2>
      <div style={{lineHeight: "0.75em", display: "flex", justifyContent: "space-between"}}>
        {/* <p>⏱️ seconds: {seconds}</p> */}
        <p>🐢 {weiToGwei(priceSlow)}</p>
        <p>🚗 {weiToGwei(priceNormal)}</p>
        <p>🚀 {weiToGwei(priceFast)}</p>
      </div>
      <div>
        <p>💲 {usdValue}</p>
      </div>
    </div>
  );

}

function weiToGwei(price) {
  return ethers.utils.formatUnits(price, "gwei");
}

export default ChainData;