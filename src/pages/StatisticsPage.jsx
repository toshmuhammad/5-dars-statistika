import { useStatistics } from "../hooks/useStatistics";

export default function StatisticsPage() {
  const { data, isLoading, isError, error } = useStatistics();

  if (isLoading) return <div>1-daqiqa.</div>;
  if (isError) return <div>Xatolik: {error.message}</div>;

  return (
    <div>
      <h2>Statistika</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}