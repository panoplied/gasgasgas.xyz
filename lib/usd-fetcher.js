import useSWR from 'swr';
import { usdBaseUrl } from './settings';

const fetcher = (...args) => fetch(...args).then(res => res.json());

// Custom reusable hook to fetch data on demand chain-wise
export function usePrice(chain) {

  const { usdSymbol, usdCooldown } = chain;

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