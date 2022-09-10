import { useState, useEffect } from "react";
import AdsLook from "./AdsLook";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import "./Board.css";

function Home() {
  const ads = [
    {
      id: 10000001,
      name: "Playground",
      description: "Playground for children",
      category: "Chicken",
      phone: "054-1234444",
      address: "Some street 5, somewhere, over the rainbow",
      imageUrl:
        "https://cdn.pixabay.com/photo/2013/04/02/19/54/playground-99509_960_720.jpg",
      url: "https://github.com/fixitpanda",
    },
    {
      id: 10000002,
      name: "Pet Store",
      description: "Not so great place for pets",
      phone: "052-1234334",
      address: "Some street 1, Narnia, Umbria, halfway between Rome and Assisi",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/19/15/09/animal-1839749_960_720.jpg",
      url: "https://github.com/Fixitpanda/youtube-video-editor-api-uploader",
    },
    {
      id: 10000003,
      name: "Sport Land",
      description: "Do here some sport activity",
      category: "Asian",
      phone: "053-1234224",
      address: "Some street 3, somewhere, over the rainbow",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg",
      url: "https://github.com/Fixitpanda/nasdaq-api-data-to-plots",
    },
    {
      id: 10000004,
      name: "Zoo",
      description: "Playground for children",
      category: "Chicken",
      phone: "054-1234444",
      address: "Some street 5, somewhere, over the rainbow",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/11/12/09/11/elephants-6788416_960_720.jpg",
      url: "https://github.com/Fixitpanda/.xlsx-downloader-with-progress",
    },
    {
      id: 10000005,
      name: "Japanese Kitchen",
      description: "Not so great place for pets",
      phone: "052-1234334",
      address: "Some street 1, Narnia, Umbria, halfway between Rome and Assisi",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/29/19/57/sushi-2455981_960_720.jpg",
      url: "https://github.com/fixitpanda",
    },
    {
      id: 10000006,
      name: "River House",
      description: "Do here some sport activity",
      category: "Asian",
      phone: "053-1234224",
      address: "Some street 3, somewhere, over the rainbow",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/29/18/40/background-2455710_960_720.jpg",
      url: "https://github.com/fixitpanda",
    },
  ];

  const [offers, setOffers] = useState(ads);

  function searchOffers(value) {
    let result = [...ads];
    if (value.length > 0) {
      result = ads.filter((offer) =>
        offer.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    setOffers(result);
  }

  // getting screen width and height
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  // using width and listening in real time to resolution change
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // bootstrap css values
    let list = "container list",
      grid = "container grid",
      mobile_search_size = "col-7",
      desktop_search_size = "col-3";

    if (windowDimensions["width"] < 768) {
      // mobile
      return [list, mobile_search_size];
    }
    // desktop
    return [grid, desktop_search_size];
  }

  const [display, setDisplay] = useState(useWindowDimensions()[0]);

  return (
    <>
      <div className="col">
        <Banner />
      </div>
      <div className="d-flex justify-content-between container px-5 pt-2">
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

        <div className={useWindowDimensions()[1]}>
          <SearchBar search={searchOffers} />
        </div>
      </div>

      {/* looping all values */}
      <div className={display}>
        {offers.map((offers) => (
          <AdsLook key={offers.id} data={offers} />
        ))}
      </div>
    </>
  );
}

export default Home;
