import { useEffect, useState } from "react";
import api from "../api";
import "./AdminDashboard.css";

export default function AdminDashboard() {

  const [tables, setTables] =
    useState([]);

  const getTables = async () => {
    const res = await api.get(
      "/tables/all"
    );

    setTables(res.data);
  };

  useEffect(() => {
    getTables();
  }, []);

  const freeTable = async (id) => {

    await api.put(
      `/tables/free/${id}`
    );

    getTables();
  };

  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="table-grid">

        {tables.map((table) => (

          <div
            className={`table-card ${
              table.isBooked
                ? "booked"
                : "free"
            }`}
            key={table._id}
          >

            <h3>
              Table {table.tableNumber}
            </h3>

            <p>
              {table.isBooked
                ? table.customerName
                : "Available"}
            </p>

            {table.isBooked && (
              <button
                onClick={() =>
                  freeTable(table._id)
                }
              >
                Mark Free
              </button>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}