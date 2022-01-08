import React from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={1}
            title="Starship Sakira (Delphi in Space Book 1)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81tP9lHvA4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Theroux the Keyhole: Diaries of a Grounded Documentary Maker"
            price={12.99}
            image="https://m.media-amazon.com/images/I/91GPVTLzpRL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            image="https://m.media-amazon.com/images/I/610oM8XXR7S._AC_UY218_.jpg"
            title="ASUS VivoBook X515EA 15.6 inch Full HD Laptop (Intel i3-1115G4, 4GB RAM, 256GB SSD, Windows 10 with free Windows 11 upgrade)"
            price={339.99}
            rating={3}
          />
          <Product
            id={4}
            image="https://m.media-amazon.com/images/I/618aVzbPMjL._AC_UY218_.jpg"
            title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones"
            price={129.0}
            rating={5}
          />
          <Product
            id={5}
            image="https://m.media-amazon.com/images/I/31u4bx7T5QL._AC_UL320_.jpg"
            title="Men's Cd6107-100 Basketball Shoe"
            price={69.99}
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            image="https://m.media-amazon.com/images/I/61b2FHJdB9L._AC_UY218_.jpg"
            title="HUAWEI Watch GT 2 (46 mm) Smart Watch"
            price={10.0}
            rating={6}
          />
         
        </div>
      </div>
    </div>
  );
}

export default Home;
