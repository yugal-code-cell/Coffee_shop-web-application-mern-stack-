import { useState } from "react";

export default function Menu() {

  const [price, setPrice] = useState("");

  const coffees = [
    {
      name: "Cappuccino",
      price: 150,
      image: "/images/cappuccino.jpg"
    },
    {
      name: "Latte",
      price: 200,
      image: "/images/latte.jpg"
    },
    {
      name: "Mocha",
      price: 250,
      image: "/images/mocha.jpg"
    },
    {
      name: "Espresso",
      price: 300,
      image: "/images/espresso.jpg"
    },
    {
      name: "Cold Brew",
      price: 350,
      image: "/images/coldbrew.jpg"
    }
  ];

  return (
    <div className="menu-container">

      <h1>Our Coffee Menu</h1>

      <div className="cards">

        {coffees.map((coffee) => (

          <div
            className="card"
            key={coffee.name}
            onClick={() =>
              setPrice(
                `${coffee.name} - ₹${coffee.price}`
              )
            }
          >
            <img
              src={coffee.image}
              alt={coffee.name}
            />

            <h3>{coffee.name}</h3>

          </div>

        ))}

      </div>

      <h2>{price}</h2>

    </div>
  );
}