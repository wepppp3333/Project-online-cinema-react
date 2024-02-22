export default function Card({ background, styleImgCard }) {
  return (
    <>
      <div className="card">
        <div
          className="card-hover"
          style={styleImgCard}
        >
          <a className="card-hover_btn"></a>
        </div>
        <img
          style={styleImgCard}
          className="img_card"
          src={background}
          alt=""
        />
      </div>
    </>
  );
}
