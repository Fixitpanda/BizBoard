import {useEffect, useState} from "react";
import PostsLook from "../../Layout/Posts/PostsLook";
import SearchBar from "../../Components/SearchBar/MainSearchBar";
import "./Home.css";



const default_api_server = 'https://rapi.hananaev.tk'

function AllItems() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [offers, setOffers] = useState(items);
    const [display, setDisplay] = useState("grid");
    const [numberOfPages, setNumberOfPages] = useState("0");
    const [activePage, setActivePage] = useState("1");
    // const [update, setUpdate] = useState(0); // re-fetching the api on request


    // const handleClick = () => {
    //     setUpdate(update + 1);
    // };


    useEffect(() => {
        fetch(default_api_server + "/page/" + activePage)
            .then((res) => res.json())
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
            );
    }, [activePage]);

    useEffect(() => {
        fetch(default_api_server)
            .then((res) => res.json())
            .then((apiResult) => setNumberOfPages(apiResult.totalPages)
            );
    }, []);


    // getting pages numbers, still need to make buttons "previous / next page" and the actual pages with fast-api.
    const getPagesNumbers = () => {
        let content = [];
        for (let i = 1; i < numberOfPages + 1; i++) {
            const page = i;

            content.push(<li className="page-item" onClick={() => setActivePage(String(page))}><button className="page-link pointer">{page}</button></li>);
            //
            // <li className="page-item"> className="page-link" onClick={(e) => setActivePage(page) }" + item}>{item}</a></li>
        }
        return content;
    };



    // index example for later
    // function createPages2() {
    //     let itemList=[];
    //     items.forEach((item,index)=>{
    //         itemList.push( <li key={index}>{item}</li>)
    //     })
    // }

    function searchItems(value) {
        let result = [...items];
        if (value.length > 0) {
            result = items.filter((offer) =>
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
                                onClick={() => setDisplay("list")}
                                className="btn btn-default"
                            >
                                <i className="bi-list-ul"></i>
                            </button>
                            <button
                                onClick={() => setDisplay("grid")}
                                className="btn btn-default display-type"
                            >
                                <i className="bi-grid-3x3-gap-fill"></i>
                            </button>
                        </div>

                        <div className="d-flex justify-content-end search-bar">
                            <div className="mx-2 col-8">
                                <SearchBar search={searchItems}/>
                            </div>
                            <div className="col-5 advanced-search-bar">
                                <button className="form-control">Advanced Search</button>
                            </div>
                        </div>
                    </div>

                    <div className={display}>
                        {
                            // very stupid condition. need to fix.
                            offers.length > 0
                                ? offers.map((offers) => (
                                    <PostsLook key={offers.id} data={offers}/>
                                ))
                                : items.map((offers) => (
                                    <PostsLook key={offers.id} data={offers}/>
                                ))
                        }
                    </div>
                </div>

                <div className="container d-flex justify-content-center mt-3">

                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <span className="page-link">Previous</span>
                            </li>
                            {getPagesNumbers()}

                            <li className="page-item disabled">
                                <a className="page-link" href="/">Next</a>
                            </li>




                        </ul>
                    </nav>
                </div>
            </>
        );
    }
}

export default AllItems;
