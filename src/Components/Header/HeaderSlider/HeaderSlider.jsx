import SliderBtn from "./SliderBtn/SliderBtn";
import bgImageSlider from "../imgHeader/bg-header-slider.svg";
import bgImageSlider2 from "../imgHeader/bg-header-slider-2.svg";
import bgImageSlider3 from "../imgHeader/bg-header-slider-3.svg";
import bgImageSlider4 from "../imgHeader/bg-header-slider-4.svg";
import { useState } from "react";

export default function HeaderSlider() {
  const [sliderBg, setSliderBg] = useState(bgImageSlider);

  const headerSlider = {
    backgroundImage: `url(${sliderBg})`,
  };

  function handleCkick(type) {
    setSliderBg(type);
  }

  return (
    <>
      <div
        className="header_slider"
        style={headerSlider}
      >
        <section className="header_slider_info">
          <h1 className="slider_info_title">
            Dive into a universe of un-ending content and channels
          </h1>
          <button className="slider_info_btn">Start FREE trial</button>
        </section>
        <div className="slider_group_switch">
          <SliderBtn
            isActive={sliderBg === bgImageSlider}
            clickbtn={() => handleCkick(bgImageSlider)}
          >
            btn1
          </SliderBtn>
          <SliderBtn
            isActive={sliderBg === bgImageSlider2}
            clickbtn={() => handleCkick(bgImageSlider2)}
          >
            btn2
          </SliderBtn>
          <SliderBtn
            isActive={sliderBg === bgImageSlider3}
            clickbtn={() => handleCkick(bgImageSlider3)}
          >
            btn3
          </SliderBtn>
          <SliderBtn
            isActive={sliderBg === bgImageSlider4}
            clickbtn={() => handleCkick(bgImageSlider4)}
          >
            btn4
          </SliderBtn>
        </div>
      </div>
    </>
  );
}
