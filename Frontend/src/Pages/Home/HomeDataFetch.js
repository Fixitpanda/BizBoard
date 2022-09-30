import {useEffect, useState} from "react";
import PostsLook from "../../Layout/Posts/PostsLook";
import SearchBar from "../../Components/SearchBar/MainSearchBar";
import "./Home.css";


function AllItems() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [offers, setOffers] = useState(items);
    const [display, setDisplay] = useState('grid');


    useEffect(() => {
        fetch("http://127.0.0.1:8000/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )



    }, [])




    function searchItems(value) {
        let result = [...items.items];
        if (value.length > 0) {
            result = items.items.filter((offer) =>
                offer.title.toLowerCase().includes(value.toLowerCase())
            );

        }
        setOffers(result);
    }



    if (error) {
        return <div className="container">Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="container">Loading...</div>;
    } else {
        return (

            <>
            <div className="container">


                <div className="d-flex justify-content-between container pt-2">

                    <div className="">
                        <button
                            onClick={(e) => setDisplay('list')}
                            className="btn btn-default">
                            <i className="bi-list-ul"></i>
                        </button>
                        <button
                            onClick={(e) => setDisplay('grid')}
                            className="btn btn-default display-type">
                            <i className="bi-grid-3x3-gap-fill"></i>
                        </button>
                    </div>



                    <div className="d-flex justify-content-end search-bar">

                    <div className="mx-2 col-8"><SearchBar search={searchItems}/></div>
                        <div className="col-5 advanced-search-bar"><button className="form-control">Advanced Search</button></div>
                    </div>

                </div>



                <div className={display}>
                {
                    // very stupid condition. need to fix.
                    offers.length > 0 ? offers.map((offers) => (
                    <PostsLook key={offers.id} data={offers} />
                )): items.items.map((offers) => (
                    <PostsLook key={offers.id} data={offers} />
                    ))
                }
                </div>

                </div>
            </>

        );
    }
}

export default AllItems;