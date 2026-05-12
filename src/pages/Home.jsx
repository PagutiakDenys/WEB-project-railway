import { useState } from "react";

import trainsData from "../data/trains";

import TrainList from "../components/TrainList";

function Home() {

  const [search, setSearch] = useState("");

  const filteredTrains =
    trainsData.filter((train) => {

      const text = `
        ${train.number}
        ${train.from}
        ${train.to}
      `;

      return text
        .toLowerCase()
        .includes(search.toLowerCase());

    });

  return (
    <div className="container">

      <h1>
        Система продажу квитків
      </h1>

      <h2>
        Укрзалізниця
      </h2>

      <input
        type="text"
        placeholder="Пошук за номером або містом..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <TrainList
        trains={filteredTrains}
      />

    </div>
  );
}

export default Home;