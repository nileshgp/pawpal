import React, {useState } from 'react';
import TinderCard from "react-tinder-card";
import "./PawPalCards.css";

const PawPalCards = () => {
    const [dogs, setDogs] = useState([
        {
            name: "Barry",
            breed: "Pitbull",
            url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*"
        },
        {
            name: "Mandy",
            breed: "Mixed breed",
            url: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"
        }
    ]);


    return (
        <div>
            <h1>dog cards</h1>
            <div className="pawpalCards__cardContainer">
            {dogs.map(dog => (
                <TinderCard
                className="swipe"
                key={dog.name}
                preventSwipe={['up', 'down']}
                >
                    <div
                    style={{ backgroundImage: `url(${dog.url})`}}
                    className="card">
                        <h3>{dog.name}</h3>
                        <p> {dog.breed}</p>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default PawPalCards;
