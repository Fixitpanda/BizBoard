import React, {useEffect, useState} from "react";
import Error404 from "../404/404";

function Article(articleId) {
    const default_api_server = 'https://rapi.hananaev.tk/get-post/'
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(default_api_server + articleId)
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
    }, []);


    if (error) {
        return error.message
    } else if (!isLoaded) {
        return <div className="container p-1"><img className="loading" src="/loading.gif" alt="loading"/></div>;
    } else {
        return (items);
    }
}


function SingleArticle() {
    const allItems = Article(window.location.pathname.split("/").pop());

    if (allItems === "Failed to fetch") {
        return <Error404/>;
    } else {
        return (
            <div className="my-3 container">
                <div className="d-flex flex-row justify-content-center">
                    <div className="m-1"><img src={allItems.image_url} width={150} height={150} alt='Large Pizza' /></div>
                        <div className="m-3">
                            <h1>{allItems.title}</h1>
                            <div><b>{allItems.description}</b></div>
                            <div>{allItems.address}</div>
                        </div>

                </div>
              </div>);
    }
}

export default SingleArticle;
