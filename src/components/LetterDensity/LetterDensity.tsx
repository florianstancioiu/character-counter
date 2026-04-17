import LetterStat from "../LetterStat/LetterStat";

export type LetterDensityProps = {
  text: string;
};

const LetterDensity = ({ text }: LetterDensityProps) => {
  const chars = text.split(".");

  return (
    <div>
      <p>Letter Density</p>
      <div>
        {chars.map((char, index) => {
          return (
            <LetterStat
              key={index}
              letter={char}
              value={Math.random() * 100}
              totalLetters={chars.length}
            />
          );
        })}
      </div>
      <p>
        See more <span>&lt;</span>
      </p>
    </div>
  );
};

export default LetterDensity;
