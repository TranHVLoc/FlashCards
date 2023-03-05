import React from 'react'

const FrontCard = (props) => {
    return (
        <div className='FrontCard'>
            <p>
                {props.question}
            </p>
            <img src= {props.image}></img>
        </div>
    )
}

export default FrontCard;
