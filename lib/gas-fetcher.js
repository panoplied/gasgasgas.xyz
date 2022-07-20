import useSWR from 'swr';
import { baseUrl, chains } from './settings';

const fetcher = (...args) => fetch(...args).then(res => res.json());

// Custom reusable hook to fetch data on demand chain-wise
export function useChain(chain) {

  const { symbol, cooldown } = chains[chain];

  const { data, error } = useSWR(
    `${baseUrl}${symbol}`,
    fetcher,
    { refreshInterval: cooldown * 1000 }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}