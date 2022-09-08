import { useState } from "react";
import Ads from "./Ads";
import Banner from "./Banner";
import "./Menu.css";
import Footer from "./Footer";

function Menu() {
  const ads = [
    {
      id: 10000001,
      name: "Playground",
      description: "Playground for children",
      category: "Chicken",
      phone: "054-1234444",
      address: "Some street 5, somewhere, over the rainbow",
      imageUrl: "https://cdn.pixabay.com/photo/2013/04/02/19/54/playground-99509_960_720.jpg",
      url: "https://github.com/fixitpanda",
    },
    {
      id: 10000002,
      name: "Pet Store",
      description: "Not so great place for pets",
      phone: "052-1234334",
      address: "Some street 1, Narnia, Umbria, halfway between Rome and Assisi",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/15/09/animal-1839749_960_720.jpg",
      url: "https://github.com/Fixitpanda/youtube-video-editor-api-uploader",
    },
    {
      id: 10000003,
      name: "Sport Land",
      description: "Do here some sport activity",
      category: "Asian",
      phone: "053-1234224",
      address: "Some street 3, somewhere, over the rainbow",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg",
      url: "https://github.com/Fixitpanda/nasdaq-api-data-to-plots",
    },
    {
        id: 10000004,
        name: "Zoo",
        description: "Playground for children",
        category: "Chicken",
        phone: "054-1234444",
        address: "Some street 5, somewhere, over the rainbow",
        imageUrl: "https://cdn.pixabay.com/photo/2014/07/31/20/48/bird-406776_960_720.jpg",
        url: "https://github.com/Fixitpanda/.xlsx-downloader-with-progress",
      },
      {
        id: 10000005,
        name: "Japanese Kitchen",
        description: "Not so great place for pets",
        phone: "052-1234334",
        address: "Some street 1, Narnia, Umbria, halfway between Rome and Assisi",
        imageUrl: "https://cdn.pixabay.com/photo/2017/06/29/19/57/sushi-2455981_960_720.jpg",
        url: "https://github.com/fixitpanda",
      },
      {
        id: 10000006,
        name: "River House",
        description: "Do here some sport activity",
        category: "Asian",
        phone: "053-1234224",
        address: "Some street 3, somewhere, over the rainbow",
        imageUrl: "https://cdn.pixabay.com/photo/2017/06/29/18/40/background-2455710_960_720.jpg",
        url: "https://github.com/fixitpanda",
      },
  ];

//detects if your resolution mobile like or not
  function Mobile() {
    if (window.innerWidth < 768) {
      return"container list";
    }
    return "container grid";
  }

  const [display, setDisplay] = useState(Mobile);

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

    {/* looping all values */}
      <div className={display}>
        {ads.map((ads) => (
          <Ads key={ads.id} data={ads} />
        ))}

      </div>

    </>
  );
}

export default Menu;
