import TrainCard from "./TrainCard";

function TrainList({ trains }) {
  return (
    <div className="train-list">
      {trains.map((t) => (
        <TrainCard key={t.id} train={t} />
      ))}
    </div>
  );
}

export default TrainList;