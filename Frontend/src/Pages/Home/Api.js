import axios from "axios";
import React from "react";

const baseURL = "https://rapi.hananaev.tk";

export default function SomeApi() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1>{post.total_items}</h1>
            <div>{post.items_per_page}</div>

        </div>
    );
}




// let yourFunctionName = async() => {
//   const api_call = await fetch(`http://localhost:8000/`);
//   const data = await api_call.json();
//   return data.items;
// }
//
//
// console.log(yourFunctionName())