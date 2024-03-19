import "./main.css";
import "./main_adaptiv_ip11.css";
import { filmSection } from "./main_json_card/json.js";
import MainSection from "./MainSection/MainSection.jsx";


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
