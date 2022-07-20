import useSWR from 'swr';
import { usdBaseUrl, chains } from './settings';

const fetcher = (...args) => fetch(...args).then(res => res.json());

// Custom reusable hook to fetch data on demand chain-wise
export function usePrice(chain) {

  const { usdSymbol, usdCooldown } = chains[chain];

  const { data, error } = useSWR(
    `${usdBaseUrl}${usdSymbol}`,
    fetcher,
    { refreshInterval: usdCooldown * 1000 }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}