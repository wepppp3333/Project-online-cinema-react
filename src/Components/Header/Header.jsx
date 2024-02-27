import "./header.css";
import HeaderTop from "./HeaderTop/HeaderTop";

export default function Header() {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <div className="header_slider">
          <section className="header_slider_info">
            <h1 className="slider_info_title">
              Dive into a universe of un-ending content and channels
            </h1>
            <button className="slider_info_btn">Start FREE trial</button>
          </section>
          <div className="slider_group_switch">
            <button className="switch"></button>
            <button className="switch"></button>
            <button className="switch"></button>
            <button className="switch"></button>
          </div>
        </div>
      </div>
    </>
  );
}
