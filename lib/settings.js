export const gasBaseUrl = 'https://api.debank.com/chain/gas_price_dict_v2?chain=';
export const usdBaseUrl = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=';

// Object for all possible chains with cooldowns in seconds
export const chains = {
  eth: {
    name: 'Ethereum',
    gasSymbol: 'eth',
    gasCooldown: 5,
    usdSymbol: 'ethereum',
    usdCooldown: 5,
  },
  bsc: {
    name: 'Binance',
    gasSymbol: 'bsc',
    gasCooldown: 5,
    usdSymbol: 'binancecoin',
    usdCooldown: 5,
  },
  xdai: {
    name: 'Gnosis',
    gasSymbol: 'xdai',
    gasCooldown: 5,
    usdSymbol: 'xdai',
    usdCooldown: 5,
  },
  matic: {
    name: 'Polygon',
    gasSymbol: 'matic',
    gasCooldown: 5,
    usdSymbol: 'matic-network',
    usdCooldown: 5,
  },
  ftm: {
    name: 'Fantom',
    gasSymbol: 'ftm',
    gasCooldown: 5,
    usdSymbol: 'fantom',
    usdCooldown: 5,
  },
  okt: {
    // TODO figure out correct names for network and token
    name: 'OEC',
    gasSymbol: 'okt',
    gasCooldown: 5,
    usdSymbol: 'oec-token',
    usdCooldown: 5,
  },
  avax: {
    name: 'Avalanche',
    gasSymbol: 'avax',
    gasCooldown: 5,
    usdSymbol: 'avax',
    usdCooldown: 5,
  },
  op: {
    name: 'Optimism',
    gasSymbol: 'op',
    gasCooldown: 5,
    usdSymbol: 'optimistm',
    usdCooldown: 5,
  },
  arb: {
    name: 'Arbitrum',
    gasSymbol: 'arb',
    gasCooldown: 5,
    usdSymbol: 'ethereum',
    usdCooldown: 5,
  },
  celo: {
    name: 'Celo',
    gasSymbol: 'celo',
    gasCooldown: 5,
    usdSymbol: 'celo',
    usdCooldown: 5,
  },
  movr: {
    name: 'Moonriver',
    gasSymbol: 'movr',
    gasCooldown: 5,
    usdSymbol: 'moonriver',
    usdCooldown: 5,
  },
  cro: {
    name: 'Cronos',
    gasSymbol: 'cro',
    gasCooldown: 5,
    usdSymbol: 'crypto-com-chain',
    usdCooldown: 5,
  },
  boba: {
    name: 'Boba',
    gasSymbol: 'boba',
    gasCooldown: 5,
    usdSymbol: 'boba-network',
    usdCooldown: 5,
  },
};