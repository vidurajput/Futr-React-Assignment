import React from "react";
import Plane from "./images/plane-img.png";
export function Journey() {
    return (
        <div className="journey">
            <h1><b>OUR JOURNEY OF TRAVEL</b></h1>
            <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            
            <div className="outer-box">
                <div className="inner-box">
                    <div className="text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1980s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                </div>
                <img className="image" src={Plane} alt="Your Image" />
            </div>
            <button>Read More</button>
        </div>
    )
}