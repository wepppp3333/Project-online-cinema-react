import menuAdaptiv from "../imgHeader/menu_adaptiv.svg";

export default function BurgerMenuBtn() {
  return (
    <>
      <button>
        <img
          src={menuAdaptiv}
          alt=""
        />
      </button>
      <p>Menu</p>
    </>
  );
}
