export default function SliderBtn({ children, clickbtn, isActive }) {
  return (
    <>
      <button
        className={isActive ? 'switch switch_active' : 'switch'}
        onClick={clickbtn}
      ></button>
    </>
  );
}


// "switch switch_active"