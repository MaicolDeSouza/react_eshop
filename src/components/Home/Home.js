import React from "react";
import "./Home.css";
import banner from "../../assets/images/banner.jpg";
import Product from "../Product/Product"
import bag1 from "../../assets/images/bag1.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={banner} alt="" className="home__image" />
      </div>
      <div className="home__row">
        <Product 
        id = "1"
        title = "Title 1"
        price = {30}
        rating = {2}
        image = {bag1}
        />
        <Product 
           id = "2"
           title = "Title 2"
           price = {31}
           rating = {2}
           image = {bag1}/>
        <Product 
           id = "3"
           title = "Title 3"
           price = {32}
           rating = {3}
           image = {bag1}/>
      </div>
      <div className="home__row">
        <Product 
           id = "4"
           title = "Title 4"
           price = {33}
           rating = {4}
           image = {bag1}/>
        <Product 
           id = "5"
           title = "Title 5"
           price = {34}
           rating = {5}
           image = {bag1}/>
      </div>
      <div className="home__row">
        <Product 
           id = "6"
           title = "Title 6"
           price = {35}
           rating = {5}
           image = {bag1}/>
      </div>
    </div>
  );
}

export default Home;
