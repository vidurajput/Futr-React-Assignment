import React from "react";
import travelBanner from "./images/travelBanner.jpeg";
import "./App.css";

export function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); 

    const keywords = document.getElementById("Keywords").value;
    const category = document.getElementById("Category").value;
    const minPrice = document.getElementById("minPrice").value;
    const duration = document.getElementById("Duration").value;
    const date = document.getElementById("Date").value;
    const maxPrice = document.getElementById("maxPrice").value;

    if (!keywords || !category || !minPrice || !duration || !date || !maxPrice) {
      alert("Please fill all the fields."); 
      return;
    }
    alert("Form submitted successfully!");
  };


  return (
    <div className="container">
      <div className="text">
        <b>TRAVEL</b>
         <span>WITH US</span></div>
      <button className="button">Read more</button>

<div className="form-container">
  <form className="row g-3">

    <div className="col-md-3">
      <label htmlFor="Keywords" className="form-label">
        Keywords
      </label>
      <input type="text" className="form-control" id="Keywords" required />
    </div>
    <div className="col-md-3">
      <label htmlFor="Category" className="form-label">
        Category
      </label>
      <select id="Category" className="form-select" required>
        <option selected>Choose...</option>
        <option>...</option>
        <option>...</option>
      </select>
      <select id="Category" className="form-select" required>
        <option >Choose...</option>
        <option>...</option>
        <option>...</option>
      </select>
    </div>
    <div className="col-md-3">
      <label htmlFor="minPrice" className="form-label">
        Min Price
      </label>
      <input
        type="number"
        className="form-control"
        id="minPrice"
        placeholder="00.0"
        required
      />
    </div>

    <div className="col-md-4">
      <label htmlFor="Duration" className="form-label">
        Duration
      </label>
      <input
        type="text"
        className="form-control"
        id="Duration"
        placeholder="Any"
        required
      />
    </div>

    

    <div className="col-md-4">
      <label htmlFor="Date" className="form-label">
        Date
      </label>
      <input type="date" className="form-control" id="Date" required/>
    </div>

   

    <div className="col-md-4">
      <label htmlFor="maxPrice" className="form-label">
        Max Price
      </label>
      <input
        type="number"
        className="form-control"
        id="maxPrice"
        placeholder="00.0"
        required
      />
    </div>

  </form>
  <button className="FormButton" onClick={handleSubmit}>search</button>
</div>

      <div className="image-container">
        <img src={travelBanner} />
        <div className="image-overlay"></div>
      </div>
    </div>
  );
}
