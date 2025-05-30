import { useStatistics } from "../hooks/useStatistics";

export default function StatisticsPage() {
    const { data, isLoading, isError, error } = useStatistics();

    if (isLoading) return <div className="flex justify-center items-center h-32">
        <span className="text-4xl font-bold animate-pulse">
            1-daqiqa.
        </span>
    </div>;
    if (isError) return <div>Xatolik: {error.message}</div>;

    return (
        <div>
            <h2>Statistika</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}