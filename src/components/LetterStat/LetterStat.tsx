export type LetterStatProps = {
  letter: string;
  count: number;
  totalLetters: number;
};

const LetterStat = ({ letter, count, totalLetters }: LetterStatProps) => {
  return (
    <div>
      <p>{letter}</p>
      <div>
        <div></div>
      </div>
      <p>{count}</p>
    </div>
  );
};

export default LetterStat;
