import SliderData from "../../Components/Slider/MainSlider";
import AllItems from "./HomeDataFetch"
import "./Home.css";

function Home() {

    return (
        <>
            <div className="col">
                <SliderData/>

            </div>

            < AllItems/>

        </>


    );
}

export default Home;
