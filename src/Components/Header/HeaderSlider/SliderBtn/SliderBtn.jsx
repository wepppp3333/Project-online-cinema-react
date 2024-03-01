export default function SliderBtn({ children, clickbtn }) {
  return (
    <>
      <button
        className="switch switch_active"
        onClick={clickbtn}
      ></button>
    </>
  );
}
