import React from "react";
import Card from "../Card/Card";
import "./List.scss";
const List = () => {
  const data = [
    {
      id: 1,
      img: "https://pbs.twimg.com/media/EfYgyVBXYAQ8t3s.jpg",
      title: "Miracle Hoodie",
      isNew: true,
      oldPrice: 1500,
      price: 1200,
    },
    {
      id: 2,
      img: "https://www.marketplace.org/wp-content/uploads/2022/06/plussize.jpg?fit=740%2C493",
      isNew: true,
      title: "Sweaters",
      oldPrice: 2000,
      price: 14000,
    },
    {
      id: 3,
      img: "https://asset1.cxnmarksandspencer.com/is/image/mands/12092022_0735_SB-30478_746X560?wid=300&qlt=80%20500w",
      img2: "https://m.media-amazon.com/images/I/71DB-VN2aqL._AC_UL1500_.jpg",

      isNew: true,
      title: "Kids Set",
      oldPrice: 900,
      price: 800,
    },
    {
      id: 4,
      img: "https://www.thedota2store.com/media/catalog/product/cache/42ff4984ffd52745e8753c22ee11bc83/t/e/team-liquid-miracle-dota-2-jersey-tee-shirt.jpg",
      isNew: true,
      title: "team Nigma Jersey",
      oldPrice: 2000,
      price: 1000,
    },
  ];

  return (
    <div className="list">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
