import TrainCard from "./TrainCard";

function TrainList({ trains }) {

  return (
    <div className="train-list">

      {trains.length > 0 ? (

        trains.map((train) => (

          <TrainCard
            key={train.id}
            train={train}
          />

        ))

      ) : (

        <h2>
          Потяги не знайдені
        </h2>

      )}

    </div>
  );
}

export default TrainList;