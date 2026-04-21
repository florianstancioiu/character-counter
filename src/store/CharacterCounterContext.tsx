import stats from "../utilities/stats";
import { createContext, useState } from "react";

const CharacterCounterContext = createContext({
  text: "",
  setText: (_: string) => {},
  excludeSpaces: false,
  setExcludeSpaces: (_: boolean) => {},
  charsAreLimited: false,
  setCharsAreLimited: (_: boolean) => {},
  charsLimit: 0,
  setCharsLimit: (_: number) => {},
  totalCharacters: 0,
  wordCount: 0,
  sentenceCount: 0,
});

const CharacterCounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [charsAreLimited, setCharsAreLimited] = useState(false);
  const [charsLimit, setCharsLimit] = useState(0);

  const { totalCharacters, wordCount, sentenceCount } = stats(
    text,
    excludeSpaces,
  );

  return (
    <CharacterCounterContext.Provider
      value={{
        text,
        setText,
        excludeSpaces,
        setExcludeSpaces,
        charsAreLimited,
        setCharsAreLimited,
        charsLimit,
        setCharsLimit,
        totalCharacters,
        wordCount,
        sentenceCount,
      }}
    >
      {children}
    </CharacterCounterContext.Provider>
  );
};

export { CharacterCounterContextProvider, CharacterCounterContext };
