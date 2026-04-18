import Header from "./components/Header/Header";
import TextareaSection from "./components/TextareaSection/TextareaSection";
import Stat from "./components/Stat/Stat";
import LetterDensity from "./components/LetterDensity/LetterDensity";
import { CharacterCounterContext } from "./store/CharacterCounterContext";
import { useContext } from "react";

const App = () => {
  const { totalCharacters, wordCount, sentenceCount, excludeSpaces } =
    useContext(CharacterCounterContext);

  return (
    <>
      <Header />
      <main>
        <TextareaSection />
        <div>
          <Stat
            title={
              excludeSpaces ? "Total Characters (no space)" : "Total Characters"
            }
            value={totalCharacters}
            bgColor="bg-purple-400"
          />
          <Stat title="Word Count" value={wordCount} bgColor="bg-yellow-500" />
          <Stat
            title="Sentence Count"
            value={sentenceCount}
            bgColor="bg-orange-500"
          />
        </div>
        <LetterDensity />
      </main>
    </>
  );
};

export default App;
