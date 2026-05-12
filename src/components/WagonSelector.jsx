function WagonSelector({ wagons, selected, setSelected }) {
  return (
    <div>
      <h3>Вибір вагона</h3>

      {wagons.map((w) => (
        <button
          key={w}
          onClick={() => setSelected(w)}
          className={selected === w ? "active" : ""}
        >
          Вагон {w}
        </button>
      ))}
    </div>
  );
}

export default WagonSelector;