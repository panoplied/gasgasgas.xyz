import { ethers } from 'ethers';
import Image from 'next/image';
import TxFee from '../tx-fee';
import { useChain } from '../../lib/gas-fetcher';
import { usePrice } from '../../lib/usd-fetcher';
import { useState, useEffect } from 'react';
import ASCIIAnimation from '../ascii-animation';

// const loadingAnim = ['◴','◷','◶','◵',];
const loadingAnim = ['⣷','⣯','⣟','⡿','⢿','⣻','⣽','⣾',];


function ChainData({ chain, chainIndex, speedMarks, customGas }) {
  const [ shouldFetch, setShouldFetch ] = useState(false);
  const [ fees, setFees ] = useState(null);
  const [ usd, setUsd ] = useState(null);

  const { data: gasData } = useChain(chain, shouldFetch);
  const { data: usdData } = usePrice(chain);

  useEffect(() => {
    setTimeout(() => {
      setShouldFetch(true);
    }, chainIndex * 1000);
  }, []);

  useEffect(() => {
    if (gasData && usdData) {

      setFees({
        slow: gasData.data?.slow.price,
        normal: gasData.data?.normal.price,
        fast: gasData.data?.fast.price
      });

      setUsd(usdData[chain.usdSymbol]?.usd);
    }
  }, [gasData, usdData]);

  return (
    <div className="grid rounded-lg text-zinc-900 dark:text-zinc-50 bg-zinc-50/70 dark:bg-zinc-900/70 backdrop-blur-md">
      <BlockHeader chain={chain} speedMarks={speedMarks} fees={fees} usd={usd} />

      {/* Here we define gas limit catergories and multipliers */}
      <Fees title="Standard Transfer" multi={21000}     token={chain.nativeToken} speedMarks={speedMarks} fees={fees} usd={usd} placeholder='animated' />
      <Fees title="Deploy 24kb"       multi={15360000}  token={chain.nativeToken} speedMarks={speedMarks} fees={fees} usd={usd} placeholder='animated' />
      <Fees title="Custom Gas Limit"  multi={customGas} token={chain.nativeToken} speedMarks={speedMarks} fees={fees} usd={usd} placeholder='static' />

    </div>
  );

}


function Fees({ title, multi, token, speedMarks, fees, usd, placeholder }) {

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

      <TxFee
        speedMark={speedMarks.slow}
        fee={fees ? fees.slow : null}
        multi={multi}
        token={token}
        usd={usd}
        emptyValue={emptyValue}
      />

      <TxFee
        speedMark={speedMarks.normal}
        fee={fees ? fees.normal : null}
        multi={multi}
        token={token}
        usd={usd}
        emptyValue={emptyValue}
      />

      <TxFee
        speedMark={speedMarks.fast}
        fee={fees ? fees.fast : null}
        multi={multi}
        token={token}
        usd={usd}
        emptyValue={emptyValue}
      />

    </div>
  );
}


function BlockHeader({ chain, speedMarks, fees, usd }) {
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
        <p className="self-baseline font-robotoMonoRegular">${usd ? usd : "--"}</p>
      </div>

      {/* Gas Values */}
      <div className="flex flex-nowrap font-bold p-4 text-2xl font-robotoMonoLight">
        <p className="grow text-sky-500 text-left">{speedMarks.slow}       {fees ? weiToGwei(fees.slow) : <span className="text-zinc-900 dark:text-zinc-50 font-normal opacity-50"><ASCIIAnimation frames={loadingAnim} rate={100} /></span>}</p>
        <p className="grow text-green-500 text-center">{speedMarks.normal} {fees ? weiToGwei(fees.normal) : <span className="text-zinc-900 dark:text-zinc-50 font-normal opacity-50"><ASCIIAnimation frames={loadingAnim} rate={100} /></span>}</p>
        <p className="grow text-rose-500 text-right">{speedMarks.fast}     {fees ? weiToGwei(fees.fast) : <span className="text-zinc-900 dark:text-zinc-50 font-normal opacity-50"><ASCIIAnimation frames={loadingAnim} rate={100} /></span>}</p>
      </div>
    </>
  );
}


function weiToGwei(val) {
  return ethers.utils.formatUnits(val.toString(), "gwei");
}

export default ChainData;