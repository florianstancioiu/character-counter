import { useState, useContext } from "react";
import letterDensity from "../../utilities/letterDensity";
import LetterStat from "../LetterStat/LetterStat";
import { CharacterCounterContext } from "../../store/CharacterCounterContext";

const LetterDensity = () => {
  const { text } = useContext(CharacterCounterContext);
  const [showAllLetters, setShowAllLetters] = useState(false);
  const { chars, charsLength, hashMap } = letterDensity(text);
  const toggleShowAllLetters = () => setShowAllLetters((val) => !val);
  const arrowClasses = showAllLetters ? "rotate-90" : "-rotate-90";

  return (
    <div>
      <p className="text-neutral-900 font-semibold leading-[130%] tracking-[-1px] text-[24px] mb-5">
        Letter Density
      </p>
      {text.length !== 0 ? (
        <div>
          <div>
            {chars
              .slice(0, showAllLetters ? charsLength : 5)
              .map((char, index) => {
                return (
                  <LetterStat
                    key={index}
                    letter={char}
                    count={hashMap[char]}
                    totalLetters={charsLength}
                  />
                );
              })}
          </div>
          {chars.length > 5 && (
            <p
              onClick={toggleShowAllLetters}
              className="text-neutral-900 text-[20px] leading-[140%] tracking-[-0.6px] cursor-pointer"
            >
              See {showAllLetters ? "less" : "more"}{" "}
              <span className={`inline-block ${arrowClasses}`}>&lt;</span>
            </p>
          )}
        </div>
      ) : (
        <p>No characters found. Start typing to see letter density.</p>
      )}
    </div>
  );
};

export default LetterDensity;
