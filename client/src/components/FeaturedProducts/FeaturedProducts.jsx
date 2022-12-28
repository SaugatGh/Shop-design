import Card from "../Card/Card";
import React from "react";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img:"https://i.ytimg.com/vi/FHw4F8xIXio/maxresdefault.jpg",
      img2: "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2021/02/1-back-1.jpg",
      title: "Miracle Hoodie",
      isNew: true,
      oldPrice: 1500,
      price: 1200,
    },
    {
      id: 2,
      img: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/fea823936dcfa45891a07f149c5fabde26a6cf7591a1ad7a3fe5132b4aab22a2.jpg",
      img2:"https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2021/02/2back-1.jpg",
      isNew: true,
      title: "Sweaters",
      oldPrice: 2000,
      price: 14000,
    },
    {
      id: 3,
      img: "https://hniesfp.imgix.net/8/images/detailed/325/S1JTW-P740_5.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress",
      img2:"https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2021/02/4_desktop_jibtrue2_model-1.jpg",


      isNew: true,
      title: "Kids Set",
      oldPrice: 900,
      price: 800,
    },

  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}Products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          ullam ipsam vel magnam in unde, quas nam pariatur quam cum
          voluptatibus soluta iste qui atque!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
