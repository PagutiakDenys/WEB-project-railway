function TrainCard({ train }) {
  return (
    <div className="train-card">

      <h2>
        Потяг {train.number}
      </h2>

      <p>
        <strong>Маршрут:</strong>
      </p>

      <p>
        {train.from} → {train.to}
      </p>

      <p>
        <strong>Відправлення:</strong>
        {" "}
        {train.departure}
      </p>

      <p>
        <strong>Тривалість:</strong>
        {" "}
        {train.duration}
      </p>

      <button>
        Детальніше
      </button>

    </div>
  );
}

export default TrainCard;