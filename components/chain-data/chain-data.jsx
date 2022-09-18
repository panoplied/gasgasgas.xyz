import { ethers } from 'ethers';
import Image from 'next/image';
import TxFee from '../tx-fee';
import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { useState, useEffect } from 'react';
import ASCIIAnimation from '../ascii-animation';

// const loadingAnim = ['◴','◷','◶','◵',];
const loadingAnim = ['⣷','⣯','⣟','⡿','⢿','⣻','⣽','⣾',];


function ChainData({ chain, speedMarks, customGas }) {
  const [ shouldFetch, setShouldFetch ] = useState(false);

  const { data: gasData } = useChain(chain, shouldFetch);
  const { data: usdData } = usePrice(chain);

  useEffect(() => {
    setTimeout(() => {
      setShouldFetch(true);
      console.log(`DEBUG: ${chain.name} initialized`);
    }, Math.floor(Math.random() * 10000));
  }, []);


  return (
    <div className="grid rounded-lg text-zinc-900 dark:text-zinc-50 bg-zinc-50/70 dark:bg-zinc-900/70 backdrop-blur-md">
      <BlockHeader chain={chain} speedMarks={speedMarks} gasData={gasData} usdData={usdData} />

      {/* Here we define gas limit catergories and multipliers */}
      <Fees chain={chain} title="Standard Transfer" multi={21000}     token={chain.nativeToken} speedMarks={speedMarks} gasData={gasData} usdData={usdData} placeholder='animated' />
      <Fees chain={chain} title="Deploy 24kb"       multi={15360000}  token={chain.nativeToken} speedMarks={speedMarks} gasData={gasData} usdData={usdData} placeholder='animated' />
      <Fees chain={chain} title="Custom Gas Limit"  multi={customGas} token={chain.nativeToken} speedMarks={speedMarks} gasData={gasData} usdData={usdData} placeholder='static' />

    </div>
  );

}


function Fees({ chain, title, multi, token, speedMarks, gasData, usdData, placeholder }) {

  let feeSlow, feeNormal, feeFast, usdValue;

  // `gasData instanceof Array` is a hacky way of checking if we really got
  // proper gas prices array from API and not an object with "too many requests" message
  // TODO: refactor this hotfix 

  if (gasData instanceof Array && usdData && multi) {
    [feeSlow, feeNormal, feeFast] = [
      gasData[0].price,
      gasData[1].price,
      gasData[2].price
    ].map(f => weiToEth(f * multi));

    usdValue = usdData[chain.usdSymbol].usd;
  }

  let emptyValue;
  if (placeholder === 'static') {
    emptyValue = '--/--';
  }
  if (placeholder === 'animated') {
    emptyValue = <span style={{opacity: 0.5}}><ASCIIAnimation frames={loadingAnim} rate={100} /></span>
  }

  return (
    <div className="p-4">
      <p className="font-bold font-robotoMonoLight py-1">{title}</p>
      <TxFee speedMark={speedMarks.slow}   fee={feeSlow}   token={token} usdValue={usdValue} emptyValue={emptyValue} />
      <TxFee speedMark={speedMarks.normal} fee={feeNormal} token={token} usdValue={usdValue} emptyValue={emptyValue} />
      <TxFee speedMark={speedMarks.fast}   fee={feeFast}   token={token} usdValue={usdValue} emptyValue={emptyValue} />
    </div>
  );
}


function BlockHeader({ chain, speedMarks, gasData, usdData }) {
  return (
    <> 

      {/* Chain Title */}
      <div className="flex flex-nowrap h-16 p-4">
        <div className="h-[32px] w-[32px] relative mr-4">
          <Image
            src={`/images/logo/${chain.id}.png`}
            alt={`${chain.name} logo`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="flex-auto text-2xl self-baseline font-bold font-robotoMonoLight">{chain.name}</h2>
        <p className="self-baseline font-robotoMonoRegular">${usdData ? usdData[chain.usdSymbol].usd : "--"}</p>
      </div>

      {/* Gas Values */}
      {/* `gasData instanceof Array` is a hacky way of checking if we really got
        * proper gas prices array from API and not an object with "too many requests" message
        * TODO: refactor this hotfix  */}
      <div className="flex flex-nowrap font-bold p-4 text-2xl font-robotoMonoLight">
        <p className="grow text-sky-500 text-left">{speedMarks.slow}       {gasData instanceof Array ? weiToGwei(gasData[0].price) : <span className="text-zinc-900 dark:text-zinc-50 font-normal opacity-50"><ASCIIAnimation frames={loadingAnim} rate={100} /></span>}</p>
        <p className="grow text-green-500 text-center">{speedMarks.normal} {gasData instanceof Array ? weiToGwei(gasData[1].price) : <span className="text-zinc-900 dark:text-zinc-50 font-normal opacity-50"><ASCIIAnimation frames={loadingAnim} rate={100} /></span>}</p>
        <p className="grow text-rose-500 text-right">{speedMarks.fast}     {gasData instanceof Array ? weiToGwei(gasData[2].price) : <span className="text-zinc-900 dark:text-zinc-50 font-normal opacity-50"><ASCIIAnimation frames={loadingAnim} rate={100} /></span>}</p>
      </div>

    </>
  );
}


function weiToGwei(val) {
  return ethers.utils.formatUnits(val.toString(), "gwei");
}


function weiToEth(val) {
  return ethers.utils.formatEther(val.toString());
}


export default ChainData;