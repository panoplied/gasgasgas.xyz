import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { chains } from '../../lib/settings';
import { ethers } from 'ethers';

function ChainData({ chain }) {

  const { name, usdSymbol, nativeToken } = chains[chain];

  const { data: gasData, isLoading: gasLoading, isError: gasError } = useChain(chain);
  const { data: usdData, isLoading: usdLoading, isError: usdError } = usePrice(chain);

  if (gasLoading) return <p>Gas loading...</p>
  if (gasError) return <p>Failed to load gas</p>
  if (usdLoading) return <p>USD loading...</p>
  if (usdError) return <p>Failed to load USD value</p>

  // ASSIGNMENTS
  // Only destructure and assign when data loaded without errors
  let {
    data: {
      slow: { price: feeSlow },
      normal: { price: feeNormal },
      fast: { price: feeFast }
    }
  } = gasData;

  const { [usdSymbol]: { usd: usdValue } } = usdData;

  return (
    <div style={{color: "white", padding: "0 3em", marginBottom: "1em"}}>
      <h2>{name}</h2>
      <div>
        <p>💲 {usdValue}</p>
      </div>
      <div style={{lineHeight: "0.75em", display: "flex", justifyContent: "space-between"}}>
        <p>🐢 {weiToGwei(feeSlow)}</p>
        <p>🚗 {weiToGwei(feeNormal)}</p>
        <p>🚀 {weiToGwei(feeFast)}</p>
      </div>
      <div style={{lineheight: "0.75em"}}>
        <p>sstore slow {weiToEth(feeSlow * 23000)} {nativeToken}</p>
        <p>sstore norm {weiToEth(feeNormal * 23000)} {nativeToken}</p>
        <p>sstore fast {weiToEth(feeFast * 23000)} {nativeToken}</p>
      </div>
    </div>
  );

}

function weiToGwei(val) {
  return ethers.utils.formatUnits(val.toString(), "gwei");
}

function weiToEth(val) {
  return ethers.utils.formatEther(val.toString());
}

export default ChainData;