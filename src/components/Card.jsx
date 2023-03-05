import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import './Card.css';

const Card = ({ card, isFlipped, setFlip }) => {
    const handleCardFlip = () => setFlip(!isFlipped);
    
    return (
        <div className="Card" onClick={handleCardFlip}>
            <div className={`flipCardInner ${isFlipped ? 'flipped' : ''}`}>
                <FrontCard question = {card.question} image = {card.image}/>
                <BackCard answer = {card.answer} />
            </div>
        </div>
    )
};

export default Card;