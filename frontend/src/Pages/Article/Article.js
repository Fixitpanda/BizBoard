import React, {useEffect, useState} from "react";
import PostsLook from "../../Layout/Posts/PostsLook";

function Article() {
    const default_api_server = 'https://rapi.hananaev.tk'
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [offers, setOffers] = useState(items);
    const [display, setDisplay] = useState("grid");
    const [numberOfPages, setNumberOfPages] = useState("0");
    const [activePage, setActivePage] = useState("1");

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



    return (


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


    );
}

export default Article;
