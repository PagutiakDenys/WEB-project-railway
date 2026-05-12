import { useState } from "react";

function BookingForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handle = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      alert("Заповніть всі поля");
      return;
    }

    onSubmit({ name, phone, email });

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form onSubmit={handle}>
      <h3>Дані пасажира</h3>

      <input placeholder="Ім'я" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button>Підтвердити</button>
    </form>
  );
}

export default BookingForm;