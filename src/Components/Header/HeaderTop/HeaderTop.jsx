import { useState } from "react";
import BurgerMenuBtn from "./BurgerMenuBtn";
import BurgerMenuBtnClosed from "./BurgerMenuBtnClosed";
import logo from "../imgHeader/logo-name.svg";
import input from "../imgHeader/input.svg";
import signIn from "../imgHeader/sign-in.svg";

export default function HeaderTop() {
  const [burger, setBurger] = useState(false);

  console.log(burger);
  return (
    <>
      <div className="header_top">
        <div
          className={burger ? "burger_menu burger_menu_active" : "burger_menu"}
        >
          <ul className="burger_menu_list">
            <li>
              <img
                src={input}
                alt=""
              />
              <input
                type="text"
                className="sign-in_list_input"
                placeholder="Поиск"
              />
            </li>
            <li>
              <a href="">Movies</a>
              <a href="">Series</a>
              <a href="">Channels</a>
              <a href="">Music</a>
            </li>
            <li>
              <img
                src={signIn}
                alt=""
              />
              <a href="">Sign in</a>
            </li>
          </ul>
        </div>
        <div className="header_top_left">
          <a href="/">
            <img
              className="logo"
              src={logo}
              alt=""
            />
          </a>
          <nav className="nav">
            <ul className="nav_menu">
              <li className="menu_list">
                <a href="">Movies</a>
              </li>
              <li className="menu_list">
                <a href="">Series</a>
              </li>
              <li className="menu_list">
                <a href="">Channels </a>
              </li>
              <li className="menu_list">
                <a href="">Music</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_top_right">
          <ul className="menu_sign-in">
            <li
              onClick={() => setBurger(!burger)}
              className="burger_menu_btn"
            >
              {burger ? <BurgerMenuBtnClosed /> : <BurgerMenuBtn />}
            </li>
            <li className="sign-in_list">
              <img
                src={input}
                alt=""
              />
              <input
                type="text"
                className="sign-in_list_input"
                placeholder="Поиск"
              />
            </li>
            <li className="sign-in_list">
              <img
                src={signIn}
                alt=""
              />
              <a href="">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
