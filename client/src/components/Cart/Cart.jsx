import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://pbs.twimg.com/media/EfYgyVBXYAQ8t3s.jpg",
      title: "Miracle Hoodie",
      desc: "Long Sleve Shirt",
      isNew: true,
      oldPrice: 1500,
      price: 1200,
    },
    {
      id: 2,
      img: "https://www.marketplace.org/wp-content/uploads/2022/06/plussize.jpg?fit=740%2C493",
      isNew: true,
      desc: "Sweater for winter",
      title: "Sweaters",
      oldPrice: 2000,
      price: 1000,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="rest">Reset to cart</span>
    </div>
  );
};

export default Cart;
