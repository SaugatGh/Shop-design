import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8kU1HLTa3tROSpMMNs6DgAYvglaLtESUNb1PSxSC&s"
              alt="Nepal logo"
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>SALES</span>
            {/* <KeyboardArrowDownIcon /> */}
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            {" "}
            SkullCandy
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              {" "}
              SkullCandy
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              HomePage{" "}
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About{" "}
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact{" "}
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores{" "}
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
