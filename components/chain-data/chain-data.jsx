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

  const [sstoreSlow, sstoreNormal, sstoreFast] = [feeSlow, feeNormal, feeFast].map(f => weiToEth(f * 23000));
  const [d24kSlow, d24kNormal, d24kFast] = [feeSlow, feeNormal, feeFast].map(f => weiToEth(f * 15360000));

  return (
    <div className="grid bg-blue-500">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div>
        <p>💲 {usdValue}</p>
      </div>
      <div>
        <p className="text-cyan-400">🐢 {weiToGwei(feeSlow)}</p>
        <p className="text-green-400">🚗 {weiToGwei(feeNormal)}</p>
        <p className="text-red-400">🚀 {weiToGwei(feeFast)}</p>
      </div>
      <div>
        <p className="font-bold">SSTORE</p>
        <p>slow {sstoreSlow} {nativeToken} ${sstoreSlow * usdValue} </p>
        <p>norm {sstoreNormal} {nativeToken} ${sstoreNormal * usdValue}</p>
        <p>fast {sstoreFast} {nativeToken} ${sstoreFast * usdValue}</p>
      </div>
      <div>
        <p>DEPLOY 24k</p>
        <p>slow {d24kSlow} {nativeToken} ${d24kSlow * usdValue}</p>
        <p>norm {d24kNormal} {nativeToken} ${d24kNormal * usdValue}</p>
        <p>fast {d24kFast} {nativeToken} ${d24kFast * usdValue}</p>
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