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
      <main className="md:max-w-176 md:mx-auto">
        <TextareaSection />
        <div className="md:flex md:justify-between md:gap-x-4">
          <Stat
            title={
              excludeSpaces
                ? "Total Characters <span class='text-[12px]'>(no space)</span>"
                : "Total Characters"
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
