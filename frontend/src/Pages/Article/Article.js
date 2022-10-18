import React, {useEffect, useState} from "react";
import Error404 from "../404/404";
import GoBack from "../../Components/SiteNavigator/GoBack";
import "./Article.css";


function Article() {
    const default_api_server = 'https://rapioracle.hananaev.tk/get-post/'
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

    function renderApiToHtml(yourApiCall) {
        return <div className="container my-3" dangerouslySetInnerHTML={{__html: yourApiCall}}></div>;
    }

    if (error) {
        return <Error404/>;
    } else if (!isLoaded) {
        return (<div className="container p-1"><img className="loading" src="/loading.gif" alt="loading"/></div>);
    } else if (typeof items.id === "undefined") {
        return <div className="container"><Error404/>
            <div><GoBack/></div>
        </div>;
    } else {
        return (


            <div className="my-3 container">
                <div className="article-header d-flex ">
                    <div className="m-1">
                        <img className="main-photo img-fluid img-thumbnail" src={items.image_url} alt="Main"/>
                    </div>

                    <div className="m-3">
                        <div className="d-flex flex-row">
                            <div><h1>{items.title}</h1></div>
                            <div className="text-primary pt-1"> [ID: {items.id}]</div>
                        </div>

                        <div className="p-2">

                            <div><b>{items.description}</b></div>
                            <div>{items.phone}</div>
                            <div>{items.address}</div>
                        </div>


                    </div>


                </div>

                {renderApiToHtml(items.fullDescription)}

                <GoBack/>


            </div>);
    }
}

export default Article;
