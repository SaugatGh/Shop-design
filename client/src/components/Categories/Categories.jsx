import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/3_crusherevo_SF.jpg"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              HeadPhones
          </button>
            </Link>
        </div>
        <div className="row">
          <img
            src="https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/Web-banner-2.jpg"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Earbuds
          </button>
            </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/09/TILE.jpg"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Shop
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
                src="https://i03.hsncdn.com/is/image/HomeShoppingNetwork/rocs1200/skullcandy-jib-true-wireless-in-ear-earbuds-with-microp-d-20210608103647523~20168132w_alt8.jpg"
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
                src="https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/1_desktop_Dime-1.jpg"
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
          <Link to="/products/1" className="link">
          <img
            src="https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/09/ee74174b-9ac0-4929-9c25-0d8329b1106e_P7_desktop_workshop.jpg"
            alt=""
          />
          {/* <button>
              Women
          </button> */}
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Categories;
