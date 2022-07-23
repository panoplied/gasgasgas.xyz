import ChainData from '../chain-data';

function Gas() {

  // Use chains from lib/settings.js as chain props
  return (
    <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-w-[80%]">
      <ChainData chain="eth" />
      <ChainData chain="bsc" />
      <ChainData chain="xdai" />
      <ChainData chain="matic" />
      <ChainData chain="ftm" />
      <ChainData chain="okt" />
      <ChainData chain="avax" />
      <ChainData chain="op" />
      <ChainData chain="arb" />
      <ChainData chain="celo" />
      <ChainData chain="movr" />
      <ChainData chain="cro" />
      <ChainData chain="boba" />
    </div>
  );

}

export default Gas;