import ChainData from '../chain-data';

function Gas() {

  // Use chains from lib/settings.js as chain props
  return (
    <>
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
    </>
  );

}

export default Gas;