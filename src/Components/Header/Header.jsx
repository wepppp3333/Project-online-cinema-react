import "./header.css";
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
