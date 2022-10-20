import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="wrapper">
                <img src={props.imgUrl} alt='albumImg' className='pics' />
                <a href={props.songUrl} target='_blank'><i class="fa-solid fa-play"></i></a>
                <div className="bottom">
                    <h2 className="songTitle">{props.songTitle}</h2>
                    <h3 className="artist">{props.artist}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card