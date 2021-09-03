import React from 'react'
import './Card.css';
const Card = ({ item }) => {
    const { image, title, cname, views, time, tline } = item;
    console.log(item);
    return (
        <div className="card">
            <img src={image} alt="Thubmnail" />
            <h4>{tline}</h4>
            <h2>{title}</h2>
            <p>{cname}</p>
            <p>{views} • {time}</p>
        </div>
    )
}

export default Card
