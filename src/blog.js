import React from "react";
import Blog1 from "./images/blog-image0.jpg";
import Blog2 from "./images/blog-image.jpg";

export function Blog() {
    return (
        <div className="blog">
            <h1><b>OUR BLOG</b></h1>
      
            <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
            <div className="blog-container">
                <div>
                    <img src={Blog1} alt="" />
                    <div className="left"><h6><b>Post By Nisha Sharma</b></h6></div>
                    <div className="right"><span>05</span> Like <span>06</span> Comment</div>
                    <div>
                        <h5>More Places To Explore</h5>
                        <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here, making it look like readable English.</div>
                    </div>
                </div>
                <div>
                    <img src={Blog2} alt="" />
                    <div className="left"><h6><b>Post By Nidhi Sharma</b></h6></div>
                    <div className="right"><span>05</span> Like <span>06</span> Comment</div>
                    <div>
                        <h5>More Places To Explore</h5>
                        <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here, making it look like readable English.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}