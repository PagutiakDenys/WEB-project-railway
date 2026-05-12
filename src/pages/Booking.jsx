import { useParams } from "react-router-dom";
import { useState } from "react";

import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";

import { saveBooking } from "../services/BookingService";

function Booking() {
  const { trainId } = useParams();

  const wagons = [1, 2, 3];

  const [wagon, setWagon] = useState(1);
  const [selected, setSelected] = useState([]);

  const [seats, setSeats] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      booked: false,
    }))
  );

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const book = (user) => {
    if (selected.length === 0) {
      alert("Оберіть місця");
      return;
    }

    saveBooking({
      trainId,
      wagon,
      seats: selected,
      user,
    });

    setSeats((prev) =>
      prev.map((s) =>
        selected.includes(s.id)
          ? { ...s, booked: true }
          : s
      )
    );

    setSelected([]);

    alert("Успішно заброньовано!");
  };

  return (
    <div className="container">
      <h1>Бронювання квитків #{trainId}</h1>

      <WagonSelector
        wagons={wagons}
        selected={wagon}
        setSelected={setWagon}
      />

      <SeatMap seats={seats} selected={selected} toggle={toggle} />

      <BookingForm onSubmit={book} />
    </div>
  );
}

export default Booking;