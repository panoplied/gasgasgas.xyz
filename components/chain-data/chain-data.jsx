import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { chains } from '../../lib/settings';

function ChainData({ chain }) {

  const { name, usdSymbol } = chains[chain];

  const { data: gasData, isLoading: gasLoading, isError: gasError } = useChain(chain);
  const { data: usdData, isLoading: usdLoading, isError: usdError } = usePrice(chain);

  if (gasLoading) return <p>gas loading...</p>
  if (gasError) return <p>failed to load gas</p>

  return (
    <div style={{color: "white"}}>
      <h2>{name}</h2>
      <div style={{lineHeight: "0.75em"}}>
        <p>⏱️ seconds: {gasData._seconds}</p>
        <p>🐢 slow: {gasData.data.slow.price}</p>
        <p>🚗 normal: {gasData.data.normal.price}</p>
        <p>🚀 fast: {gasData.data.fast.price}</p>
        <p>💲 USD: {usdData[usdSymbol].usd}</p>
      </div>
    </div>
  );

  // // Only destructure and assign when data loaded without errors
  // const {
  //   _seconds: seconds,
  //   data: {
  //     slow: {
  //       price: priceSlow
  //     },
  //     normal: {
  //       price: priceNormal
  //     },
  //     fast: {
  //       price: priceFast,
  //     },
  //   }
  // } = gasData;

  // const { [usdSymbol]: { usd: usdValue } } = usdData;

  // return (
  //   <div style={{color: "white"}}>
  //     <h2>{name}</h2>
  //     <div style={{lineHeight: "0.75em"}}>
  //       <p>⏱️ seconds: {seconds}</p>
  //       <p>🐢 slow: {priceSlow}</p>
  //       <p>🚗 normal: {priceNormal}</p>
  //       <p>🚀 fast: {priceFast}</p>
  //       <p>💲 USD: {usdValue}</p>
  //     </div>
  //   </div>
  // );

}

export default ChainData;