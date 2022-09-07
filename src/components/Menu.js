import { useState } from 'react';
import Card from './Card';
import "./Menu.css";

function Menu() {
    const cards = [
        {
            id: 1,
            name: "Fried Chicken",
            description: "Fried chicken with chips",
            category: "Chicken",
            price: 15.99,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482__340.jpg"
        },
        {
            id: 2,
            name: "Greek Salad",
            description: "Salad with olives",
            category: "vegeterian",
            price: 10.55,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg"
        },
        {
            id: 3,
            name: "Pad Tai",
            description: "Very good",
            category: "Asian",
            price: 22.85,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg"
        },

        {
            id: 4,
            name: "Fried Chicken",
            description: "Fried chicken with chips",
            category: "Chicken",
            price: 15.99,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482__340.jpg"
        },
        {
            id: 5,
            name: "Greek Salad",
            description: "Salad with olives",
            category: "vegeterian",
            price: 10.55,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg"
        },
        {
            id: 6,
            name: "Pad Tai",
            description: "Very good",
            category: "Asian",
            price: 22.85,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg"
        },
        {
            id: 7,
            name: "Fried Chicken",
            description: "Fried chicken with chips",
            category: "Chicken",
            price: 15.99,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482__340.jpg"
        },
        {
            id: 8,
            name: "Greek Salad",
            description: "Salad with olives",
            category: "vegeterian",
            price: 10.55,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg"
        },
        {
            id: 9,
            name: "Pad Tai",
            description: "Very good",
            category: "Asian",
            price: 22.85,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg"
        },
        {
            id: 10,
            name: "Fried Chicken",
            description: "Fried chicken with chips",
            category: "Chicken",
            price: 15.99,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482__340.jpg"
        },
        {
            id: 11,
            name: "Greek Salad",
            description: "Salad with olives",
            category: "vegeterian",
            price: 10.55,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg"
        },
        {
            id: 12,
            name: "Pad Tai",
            description: "Very good",
            category: "Asian",
            price: 22.85,
            rating: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg"
        }
    ];

    const [display, setDisplay] = useState('container grid');

    return (
        <>
            <div className="d-flex justify-content-between px-5 pt-2">
                <div>
                    <button onClick={(e) => setDisplay('container list')} className="btn btn-default">
                        <i className="bi-list-ul"></i>
                    </button>
                    <button onClick={(e) => setDisplay('container grid')} className="btn btn-default">
                        <i className="bi-grid-3x3-gap-fill"></i>
                    </button>
                </div>
            </div>

            <div className={display}>
                {
                    cards.map((card) =>
                        <Card
                            key={card.id}
                            data={card}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Menu;