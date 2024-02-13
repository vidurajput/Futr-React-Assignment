import React from "react";
import Amazing from "./images/Amazing.jpg";
export function Guide() {
    return (
        <div className="guide">
            <img src={Amazing} alt="" />
            <h1><b> ITALY TRAVEL GUIDE </b></h1>
            <div className="guide-container">
                <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</div>
                <button>Book Now</button>
                <button>Get More</button>
            </div>
        </div>
    )
}