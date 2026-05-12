export const saveBooking = (data) => {
  const old = JSON.parse(localStorage.getItem("bookings")) || [];
  old.push(data);
  localStorage.setItem("bookings", JSON.stringify(old));
};