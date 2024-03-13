import "./header.css";
import "./header_adaptiv_ip11.css";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import HeaderTop from "./HeaderTop/HeaderTop";

export default function Header() {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <HeaderSlider />
      </div>
    </>
  );
}
