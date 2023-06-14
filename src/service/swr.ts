import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useUser(email : string) {
  const { data, error, isLoading } = useSWR(`/api/user/${email}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
