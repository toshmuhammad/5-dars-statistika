import Header from "./components/Header";
import Todos from "./components/Todos";
import StatisticsPage from "./pages/StatisticsPage";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Todos />
        <StatisticsPage />
      </main>
    </>
  );
}
