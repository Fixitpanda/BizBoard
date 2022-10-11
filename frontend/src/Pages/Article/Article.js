import React, {useEffect, useState} from "react";
import Error404 from "../404/404";


function Article() {
    const default_api_server = 'https://rapi.hananaev.tk/get-post/'
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(default_api_server + window.location.pathname.split("/").pop())
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
        return <Error404/>;
    } else if (!isLoaded) {
        return <div className="container p-1"><img className="loading" src="/loading.gif" alt="loading"/></div>;
    } else {
        return (
            <div className="my-3 container">
                <div className="d-flex flex-row justify-content-center">
                    <div className="m-1"><img src={items.image_url} width={150} height={150} alt='Large Pizza'/>
                    </div>
                    <div className="m-3">
                        <div className="d-flex flex-row"><h1>{items.title}</h1><div className="text-primary p-1">({items.id})</div></div>
                        <div><b>{items.description}</b></div>
                        <div>{items.phone}</div>
                        <div>{items.address}</div>
                    </div>

                </div>
            </div>);
    }
}

export default Article;
