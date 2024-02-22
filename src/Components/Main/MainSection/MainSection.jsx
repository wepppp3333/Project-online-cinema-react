import { filmSection } from "../main_array_card/json";
import Card from "./Card/Card";

export default function MainSection({ title }) {
  let indexFilmSection = filmSection.findIndex((el) => el.title === title);
  console.log(indexFilmSection);
  return (
    <>
      <section className="main_section">
        <h3 className="section_title">{title}</h3>
        <div className="section_container_card">
          {filmSection[indexFilmSection].card.map((newArray) => {
            return (
              <Card
                key={newArray.background}
                styleImgCard={filmSection[indexFilmSection].styleImgCard}
                {...newArray}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
