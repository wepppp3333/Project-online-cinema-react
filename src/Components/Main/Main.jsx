import "./main.css";
import { filmSection } from "./main_array_card/json.js";
import MainSection from "./MainSection/MainSection.jsx";

// const titleSection = "Recommended Channels";
// let name = filmSection.findIndex((el) => el.title === titleSection);
// console.log(name);

export default function Main() {
  return (
    <>
      <main className="main">
        {filmSection.map((newArray) => {
          return (
            <MainSection
              key={newArray.title}
              {...newArray}
            />
          );
        })}
      </main>
    </>
  );
}
