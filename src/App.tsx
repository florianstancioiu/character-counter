import Header from "./components/Header/Header";
import TextareaSection from "./components/TextareaSection/TextareaSection";
import Stat from "./components/Stat/Stat";
import LetterDensity from "./components/LetterDensity/LetterDensity";

const App = () => {
  const text = `Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.`;

  return (
    <>
      <Header />
      <main>
        <TextareaSection />
        <div>
          <Stat
            title="Total Characters"
            value={278}
            color="blue"
            bgImage="aaa"
          />
          <Stat title="Word Count" value={39} color="yellow" bgImage="aaa" />
          <Stat title="Sentence Count" value={4} color="red" bgImage="aaa" />
        </div>
        <LetterDensity text={text} />
      </main>
    </>
  );
};

export default App;
