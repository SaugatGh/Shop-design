import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const images = [
   "https://i.ytimg.com/vi/FHw4F8xIXio/maxresdefault.jpg",
   "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2021/02/1-back-1.jpg"
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">Rs 9000</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          distinctio possimus eaque nulla autem fugit harum animi labore dolorum
          sed?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type :T -shirt</span>
          <span>Tag:T-shirt,women,Top</span>
        </div>
        <hr  className="hr"/>
        <div className="info infor">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
