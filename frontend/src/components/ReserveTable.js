import { useEffect, useState } from "react";
import api from "../api";
import jsPDF from "jspdf";

export default function ReserveTable() {

  const [name, setName] = useState("");
  const [available, setAvailable] =
    useState(0);

  const fetchTables = async () => {
    const res = await api.get(
      "/tables/available-count"
    );

    setAvailable(res.data.available);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const bookTable = async () => {

    if (!name)
      return alert("Enter name");

    if (available === 0) {
      alert("No tables available");
      return;
    }

    const res = await api.post(
      "/tables/book",
      { name }
    );

    const pdf = new jsPDF();

    pdf.text(
      `Coffee Shop Booking

Customer: ${name}

Table No: ${res.data.tableNumber}

Status: Confirmed`,
      10,
      20
    );

    pdf.save("booking.pdf");

    alert("Booked Successfully");

    setName("");

    fetchTables();
  };

  return (
    <div className="reserve">

      <h2>
        Available Tables : {available}
      </h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button onClick={bookTable}>
        Book Table
      </button>

    </div>
  );
}