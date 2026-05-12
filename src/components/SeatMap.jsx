function SeatMap({ seats, selected, toggle }) {
  return (
    <div className="seat-map">
      {seats.map((s) => (
        <div
          key={s.id}
          className={`seat ${
            s.booked
              ? "booked"
              : selected.includes(s.id)
              ? "selected"
              : "free"
          }`}
          onClick={() => !s.booked && toggle(s.id)}
        >
          {s.id}
        </div>
      ))}
    </div>
  );
}

export default SeatMap;