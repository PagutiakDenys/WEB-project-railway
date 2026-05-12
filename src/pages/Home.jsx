import { useState } from "react";
import trains from "../data/trains";
import TrainList from "../components/TrainList";

function Home() {
  const [search, setSearch] = useState("");

  const filtered = trains.filter((t) =>
    `${t.number} ${t.from} ${t.to}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Укрзалізниця</h1>

      <input
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TrainList trains={filtered} />
    </div>
  );
}

export default Home;