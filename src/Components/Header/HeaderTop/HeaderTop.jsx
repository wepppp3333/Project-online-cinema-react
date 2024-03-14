import logo from "../imgHeader/logo-name.svg";
import input from "../imgHeader/input.svg";
import signIn from "../imgHeader/sign-in.svg";
import menuAdaptiv from "../imgHeader/menu_adaptiv.svg";

export default function HeaderTop() {
  return (
    <>
      <div className="header_top">
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
            <li className="adaptiv_menu">
              <button>
                <img
                  src={menuAdaptiv}
                  alt=""
                />
              </button>
              <p>Menu</p>
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
