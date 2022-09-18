import useSWR from 'swr';
import { gasBaseUrl } from './settings';

const fetcher = (...args) => fetch(...args).then(res => res.json());

// Custom reusable hook to fetch data on demand chain-wise
export function useChain(chain, shouldFetch) {

  const { gasSymbol, gasCooldown } = chain;

  const { data, error } = useSWR(
    shouldFetch ? `${gasBaseUrl}${gasSymbol}` : null,
    fetcher,
    { refreshInterval: gasCooldown * 1000 }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}