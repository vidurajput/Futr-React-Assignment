import React from "react";
import travel1 from "./icons/travel-icon.png";
import travel2 from "./icons/travel-icon2.png";
import travel3 from "./icons/travel-icon3.png";
import travel4 from "./icons/travel-icon4.png";

export function Offers() {
    return (
        <div className="offers">
            <h1><b>SELECT OFFERS FOR TRAVELLING</b></h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="offers-travel">
                <div>
                    <img src={travel1} alt="" />
                    <div>
                        <h3>Different Countrys</h3>
                        <p>There are many variations of passages of Lorem Ipsum</p>
                    </div>
                    <button>Read More</button>
                </div>
                <div>
                    <img src={travel2} alt="" />
                    <div>
                        <h3>Mountain Tours</h3>
                        <p>There are many variations of passages of Lorem Ipsum</p>
                    </div>
                    <button>Read More</button>
                </div>
                <div>
                    <img src={travel3} alt="" />
                    <div>
                        <h3>Bus Tours</h3>
                        <p>There are many variations of passages of Lorem Ipsum</p>
                    </div>
                    <button>Read More</button>
                </div>
                <div>
                    <img src={travel4} alt="" />
                    <div>
                        <h3>Summer Rest</h3>
                        <p>There are many variations of passages of Lorem Ipsum</p>
                    </div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}