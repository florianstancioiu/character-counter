import TotalCharactersPattern from "../../assets/svg/pattern-character-count.svg?react";
import WordCountPattern from "../../assets/svg/pattern-word-count.svg?react";
import SentenceCountPattern from "../../assets/svg/pattern-sentence-count.svg?react";

import { type StatProps } from "../Stat/Stat";

export type StatPatternProps = {
  bgColor: StatProps["bgColor"];
};

const StatPattern = ({ bgColor }: StatPatternProps) => {
  switch (bgColor) {
    case "bg-purple-400":
      return <TotalCharactersPattern className="absolute -right-14" />;
    case "bg-yellow-500":
      return <WordCountPattern className="absolute -right-14" />;
    case "bg-orange-500":
      return <SentenceCountPattern className="absolute -right-14" />;
  }
};

export default StatPattern;
