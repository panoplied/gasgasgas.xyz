import { ethers } from 'ethers';

import Image from 'next/image';
import TxFee from '../tx-fee';

import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { chains, speedMarks } from '../../lib/settings';


function ChainData({ chain }) {

  const { name, usdSymbol, nativeToken: token } = chains[chain];

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

  const [transferSlow, transferNormal, transferFast] = [feeSlow, feeNormal, feeFast].map(f => weiToEth(f * 21000));
  const [d24kSlow, d24kNormal, d24kFast] = [feeSlow, feeNormal, feeFast].map(f => weiToEth(f * 15360000));

  return (
    <div className="
      grid
      rounded-lg
      text-zinc-900 
      dark:text-zinc-50 

      bg-zinc-50/70 
      dark:bg-zinc-900/70 

      backdrop-blur-md
    ">

      {/* Block Header */}
      <div> 

        {/* Chain Title */}
        <div className="flex flex-nowrap h-16 p-4">
          <div className="h-[32px] w-[32px] relative mr-4">
            <Image
              src={`/images/logo/${chain}.png`}
              alt={`${name} logo`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="flex-auto text-2xl self-baseline font-bold font-robotoMonoLight">{name}</h2>
          <p className="self-baseline font-robotoMonoRegular">${usdValue}</p>
        </div>

        {/* Gas Values */}
        <div className="flex flex-nowrap font-bold p-4 text-2xl font-robotoMonoLight">
          <p className="grow text-sky-500 text-left">{speedMarks.slow} {weiToGwei(feeSlow)}</p>
          <p className="grow text-green-500 text-center">{speedMarks.normal} {weiToGwei(feeNormal)}</p>
          <p className="grow text-rose-500 text-right">{speedMarks.fast} {weiToGwei(feeFast)}</p>
        </div>

      </div>
      
      {/* Transaction Costs */}
      <div className="p-4">
        <p className="font-bold font-robotoMonoLight py-1">Standard Transfer</p>
        <TxFee speed="slow"   fee={transferSlow}   token={token} usdValue={usdValue}/>
        <TxFee speed="normal" fee={transferNormal} token={token} usdValue={usdValue} />
        <TxFee speed="fast"   fee={transferFast}   token={token} usdValue={usdValue} />
      </div>

      {/* 24kb Deployment Costs */}
      <div className="p-4">
        <p className="font-bold font-robotoMonoLight py-1">Deploy 24kb</p>
        <TxFee speed="slow"   fee={d24kSlow}   token={token} usdValue={usdValue} />
        <TxFee speed="normal" fee={d24kNormal} token={token} usdValue={usdValue} />
        <TxFee speed="fast"   fee={d24kFast}   token={token} usdValue={usdValue} />
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