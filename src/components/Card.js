import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.imgUrl} className='pics' />
            
        </div>
    )
}

export default Card