import React from "react";
import HolidayTour from "./images/1.jpg";
import NewYork from "./images/2.jpg";
import London from "./images/3.jpg";
export function Places() {
    return (
        <div className="places">
            <h1><b>BEST PLACES AROUND</b></h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="places-container">
                <div>
                    <img src={HolidayTour} alt="" />
                    <h6>Holiday Tour</h6>
                    <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe sulfk even slightly believable if y be sure there
                    </div>
                </div>
                <div>
                    <img src={NewYork} alt="" />
                    <h6>New York</h6>
                    <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe sulfk even slightly believable if y be sure there
                    </div>
                </div>
                <div>
                    <img src={London} alt="" />
                    <h6>London</h6>
                    <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe sulfk even slightly believable if y be sure there
                    </div>
                </div>
            </div>
            <div class="circle-container">
                <div class="circle blue"></div>
                <div class="circle black"></div>
            </div>


        </div>
    )
}