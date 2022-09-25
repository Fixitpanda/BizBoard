import { useState, useEffect } from "react";
import AdsLook from "../../Layout/Posts/PostsLook";
import SliderData from "../../Components/Slider/MainSlider";
import SearchBar from "../../Components/SearchBar/MainSearchBar";
import getWindowDimensions from "../../Components/MobileSupport/getWindowDimensions";
import TemporaryData from "./CustomData";

import "./Home.css";

function Home() {
  const ads = TemporaryData;

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
        <SliderData />
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
