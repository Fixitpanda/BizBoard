// import { useState, useEffect } from "react";
import SliderData from "../../Components/Slider/MainSlider";
// import SearchBar from "../../Components/SearchBar/MainSearchBar";
// import getWindowDimensions from "../../Components/MobileSupport/getWindowDimensions";
import "./Home.css";
import AllItems from "./HomeDataFetch"



function Home() {

  //
  // // using width and listening in real time to resolution change
  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(
  //     getWindowDimensions()
  //   );
  //
  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }
  //
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);
  //
  //   // bootstrap css values
  //   let list = "container list",
  //     grid = "container grid",
  //     mobile_search_size = "col-7",
  //     desktop_search_size = "col-3";
  //
  //   if (windowDimensions["width"] < 768) {
  //     // mobile
  //     return [list, mobile_search_size];
  //   }
  //   // desktop
  //   return [grid, desktop_search_size];
  // }

  // const [display, setDisplay] = useState(useWindowDimensions()[0]);

  // const[value, setValue] = useState("");
  // function handle() {
  //   alert("https://hananaev.tk/" + value)
  //
  // }

  return (
    <>
      <div className="col">
        <SliderData />

      </div>
      {/*<div className="d-flex justify-content-between container px-5 pt-2">*/}
        {/*<div>*/}
        {/*  <button*/}
        {/*    onClick={(e) => setDisplay("container list")}*/}
        {/*    className="btn btn-default">*/}
        {/*    <i className="bi-list-ul"></i>*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    onClick={(e) => setDisplay("container grid")}*/}
        {/*    className="btn btn-default">*/}
        {/*    <i className="bi-grid-3x3-gap-fill"></i>*/}
        {/*  </button>*/}
        {/*</div>*/}


        {/*<input value={value} onChange={(e) => {setValue(e.target.value)}} />*/}
        {/*<button onClick={handle}>Button</button>*/}


        {/*<div className={useWindowDimensions()[1]}>*/}
        {/*  <SearchBar/>*/}
        {/*</div>*/}
      {/*</div>*/}


      {/*<div className={display}>*/}
      {/*< AllItems /></div>*/}


      < AllItems />


      {/* /!*looping all values*!/*/}
      {/*<div className={display}>*/}
      {/*  {offers.map((offers) => (*/}
      {/*    <PostsLook key={offers.id} data={offers} />*/}
      {/*  ))}*/}
      {/*</div>*/}

    </>


  );
}

export default Home;
