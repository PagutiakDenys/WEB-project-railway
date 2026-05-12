import { Link } from "react-router-dom";

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>{train.number}</h2>

      <p>{train.from} → {train.to}</p>
      <p>{train.departure}</p>
      <p>{train.duration}</p>

      <Link to={`/booking/${train.id}`}>
        <button>Забронювати</button>
      </Link>
    </div>
  );
}

export default TrainCard;