import { useChain } from '../../lib/gas-fetcher';
import { chains } from '../../lib/settings';

function ChainData({ chain }) {

  const { data, isLoading, isError } = useChain(chain);

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>failed to load</p>

  return (
    <div style={{color: "white"}}>
      <h2>{chains[chain].name}</h2>
      <div style={{}}>
        <p>Seconds: {data._seconds}</p>
        <p>Slow: {data.data.slow.price}</p>
        <p>Normal: {data.data.normal.price}</p>
        <p>Fast: {data.data.fast.price}</p>
      </div>
      {/* <p style={{fontWeight: "bold"}}>{JSON.stringify(data)}</p> */}
    </div>
  );

}

export default ChainData;