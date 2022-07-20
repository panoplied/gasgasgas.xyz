export const baseUrl = 'https://api.debank.com/chain/gas_price_dict_v2?chain=';

// Object for all possible chains with cooldowns in seconds
export const chains = {
  eth: {
    name: 'Ethereum',
    symbol: 'eth',
    cooldown: 5,
  },
  bsc: {
    name: 'Binance',
    symbol: 'bsc',
    cooldown: 5,
  },
  xdai: {
    name: 'Gnosis',
    symbol: 'xdai',
    cooldown: 5,
  },
  matic: {
    name: 'Polygon',
    symbol: 'matic',
    cooldown: 5,
  },
  ftm: {
    name: 'Fantom',
    symbol: 'ftm',
    cooldown: 5,
  },
  okt: {
    name: 'OEC',
    symbol: 'okt',
    cooldown: 5,
  },
  avax: {
    name: 'Avalanche',
    symbol: 'avax',
    cooldown: 5,
  },
  op: {
    name: 'Optimism',
    symbol: 'op',
    cooldown: 5,
  },
  arb: {
    name: 'Arbitrum',
    symbol: 'arb',
    cooldown: 5,
  },
  celo: {
    name: 'Celo',
    symbol: 'celo',
    cooldown: 5,
  },
  movr: {
    name: 'Moonriver',
    symbol: 'movr',
    cooldown: 5,
  },
  cro: {
    name: 'Cronos',
    symbol: 'cro',
    cooldown: 5,
  },
  boba: {
    name: 'Boba',
    symbol: 'boba',
    cooldown: 5,
  },
};