import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from "../firebase";
import "./PawPalCards.css";

const PawPalCards = () => {
    const [dogs, setDogs] = useState([
        // {
        //     name: "Barry",
        //     breed: "Pitbull",
        //     url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*"
        // },
        // {
        //     name: "Mandy",
        //     breed: "Mixed breed",
        //     url: "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"
        // }
    ]);

    // piece of code which runs based on a condition
    useEffect(() => {
     // this is where the code runds

    //  this will run  ONCE when the componsent loads, and never again
   const unsubscribe =  database    
    .collection('dogs') 
    .onSnapshot((snapshot) =>
        setDogs(snapshot.docs.map((doc) => doc.data()))
    );
    return () => {
        // cleanup
        unsubscribe();
    };
    }, []);


    return (
        <div>
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
