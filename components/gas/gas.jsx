import ChainData from '../chain-data';
import styles from './gas.module.css';

function Gas() {

  // Use chains from lib/settings.js as chain props
  return (
    <div className={styles.container}>
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