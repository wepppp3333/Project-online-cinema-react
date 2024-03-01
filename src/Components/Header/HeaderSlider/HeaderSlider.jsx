import SliderBtn from "./SliderBtn/SliderBtn";

export default function HeaderSlider() {
  function handleCkick(type) {
    console.log("Click", type);
  }
  return (
    <>
      <div className="header_slider">
        <section className="header_slider_info">
          <h1 className="slider_info_title">
            Dive into a universe of un-ending content and channels
          </h1>
          <button className="slider_info_btn">Start FREE trial</button>
        </section>
        <div className="slider_group_switch">
          <SliderBtn clickbtn={() => handleCkick("way")}>btn1</SliderBtn>
          <SliderBtn clickbtn={() => handleCkick(23)}>btn1</SliderBtn>
        </div>
      </div>
    </>
  );
}
