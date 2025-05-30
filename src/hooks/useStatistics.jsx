import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "../request";

export function useStatistics() {
  return useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,
    refetchInterval: 60000,
    refetchOnWindowFocus: false,
  });
}
