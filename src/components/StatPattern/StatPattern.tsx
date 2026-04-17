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
      return (
        <TotalCharactersPattern
          fill="currentColor"
          width={150}
          height={150}
          className="text-white"
        />
      );
    case "bg-yellow-500":
      return (
        <WordCountPattern
          fill="currentColor"
          width={150}
          height={150}
          className="text-white"
        />
      );
    case "bg-orange-500":
      return (
        <SentenceCountPattern
          fill="currentColor"
          width={150}
          height={150}
          className="text-white"
        />
      );
  }
};

export default StatPattern;
