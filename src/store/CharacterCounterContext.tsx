import stats from "../utilities/stats";
import { createContext, useState } from "react";

const CharacterCounterContext = createContext({
  text: "",
  setText: (_: string) => {},
  excludeSpaces: false,
  setExcludeSpaces: (_: boolean) => {},
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
  const [charsLimit, setCharsLimit] = useState(0);

  const { totalCharacters, wordCount, sentenceCount } = stats(
    text,
    excludeSpaces,
  );

  return (
    <CharacterCounterContext
      value={{
        text,
        setText,
        excludeSpaces,
        setExcludeSpaces,
        charsLimit,
        setCharsLimit,
        totalCharacters,
        wordCount,
        sentenceCount,
      }}
    >
      {children}
    </CharacterCounterContext>
  );
};

export { CharacterCounterContextProvider, CharacterCounterContext };
