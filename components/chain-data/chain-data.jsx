import { ethers } from 'ethers';
import Image from 'next/image';
import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { chains } from '../../lib/settings';

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
    <div className="grid text-white bg-gray-900">

      {/* Chain Title */}
      <div className="flex flex-nowrap h-16 bg-gray-800 p-4">
        <div className="h-[32px] w-[32px] relative mr-4">
          <Image
            src={`/images/logo/${chain}.png`}
            alt={`${name} logo`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="flex-auto text-2xl self-baseline font-bold">{name}</h2>
        <p className="self-baseline">💲 {usdValue}</p>
      </div>

      {/* Gas Values */}
      <div className="flex flex-nowrap p-4">
        <p className="font-extrabold grow text-cyan-400">🐢 {weiToGwei(feeSlow)}</p>
        <p className="font-extrabold grow text-green-400">🚗 {weiToGwei(feeNormal)}</p>
        <p className="font-extrabold grow text-red-400">🚀 {weiToGwei(feeFast)}</p>
      </div>

      {/* Transaction Costs */}
      <div className="p-4">
        <p className="font-bold">SSTORE</p>
        <p>🐢 {sstoreSlow} {nativeToken} ${sstoreSlow * usdValue} </p>
        <p>🚗 {sstoreNormal} {nativeToken} ${sstoreNormal * usdValue}</p>
        <p>🚀 {sstoreFast} {nativeToken} ${sstoreFast * usdValue}</p>
      </div>

      {/* 1kb Deployment Costs */}
      <div className="p-4">
        <p className="font-bold">DEPLOY 24k</p>
        <p>🐢 {d24kSlow} {nativeToken} ${d24kSlow * usdValue}</p>
        <p>🚗 {d24kNormal} {nativeToken} ${d24kNormal * usdValue}</p>
        <p>🚀 {d24kFast} {nativeToken} ${d24kFast * usdValue}</p>
      </div>

      {/* Custom Gas Limit Costs */}
      {/* TODO: Implement custom gas limit calculation */}
      {/* <div className="p-4">
        <p className="font-bold">CUSTOM GAS LIMIT</p>
        <p>🐢 -- / --</p>
        <p>🚗 -- / --</p>
        <p>🚀 -- / --</p>
      </div> */}
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