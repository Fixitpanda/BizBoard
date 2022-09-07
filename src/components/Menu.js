import { useState } from "react";
import Ads from "./Ads";
import Banner from "./Banner";
import "./Menu.css";

function Menu() {
  const ads = [
    {
      id: 10000001,
      name: "Playground",
      description: "Playground for children",
      category: "Chicken",
      phone: "054-1234444",
      address: "Some street 5, somewhere, over the rainbow",
      imageUrl: "https://cdn.pixabay.com/photo/2013/04/02/19/54/playground-99509__340.jpg",
    },
    {
      id: 10000002,
      name: "Pet Store",
      description: "A great place for pets",
      phone: "052-1234334",
      address: "Some street 1, Narnia, Umbria, halfway between Rome and Assisi",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/15/09/animal-1839749__340.jpg",
    },
    {
      id: 10000003,
      name: "Sport Land",
      description: "Some sport activity",
      category: "Asian",
      phone: "053-1234224",
      address: "Some street 3, somewhere, over the rainbow",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg",
    },
  ];

  const [display, setDisplay] = useState("container grid");

  return (
    <>
      <div className="col">
        <Banner/>
      </div>
      <div className="d-flex justify-content-between px-5 pt-2">
        <div>
          <button
            onClick={(e) => setDisplay("container list")}
            className="btn btn-default"
          >
            <i className="bi-list-ul"></i>
          </button>
          <button
            onClick={(e) => setDisplay("container grid")}
            className="btn btn-default"
          >
            <i className="bi-grid-3x3-gap-fill"></i>
          </button>
        </div>
      </div>

      <div className={display}>
        {ads.map((ads) => (
          <Ads key={ads.id} data={ads} />
        ))}
      </div>
    </>
  );
}

export default Menu;
