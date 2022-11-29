import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-fashion-sale-banner-design-template-62077c541db2b288dbccd6d9d1c9af3d_screen.jpg?ts=1649932911"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Sale
          </button>
            </Link>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/736x/99/d9/fc/99d9fc1b1831b097d91709b2f6e5dadf.jpg"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Men
          </button>
            </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Women
          </button>
            </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://fuzzable.com/wp-content/uploads/2020/01/BoohooMAN-Launches-New-Season-Update-Check-Out-Some-Of-Our-Favourite-Pieces-01.jpeg"
                alt=""
              />
                <Link to="/products/1" className="link">
              <button>
                  New Seasons
              </button>
                </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://cdn.shopify.com/s/files/1/1209/1968/files/Hidesign.jpg?8663230547561987584"
                alt=""
              />
                <Link to="/products/1" className="link">
              <button>
                  Accessories
              </button>
                </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://i.pinimg.com/originals/76/74/de/7674de7dd55b87d8503232e36f7cee9b.jpg"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Shoes
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
