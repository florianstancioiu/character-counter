export type LetterStatProps = {
  letter: string;
  count: number;
  totalLetters: number;
};

const LetterStat = ({ letter, count, totalLetters }: LetterStatProps) => {
  const percentage =
    (count / totalLetters) * 100 > 100 ? 100 : (count / totalLetters) * 100;
  const roundedPercentage =
    Math.round((percentage + Number.EPSILON) * 100) / 100;

  return (
    <div className="flex justify-between items-center gap-x-3.5 mb-3">
      <p className="w-4">{letter.toUpperCase()}</p>
      <div className="bg-neutral-100 rounded-2xl h-3 w-full">
        <div
          className="bg-purple-400 h-3 rounded-2xl"
          style={{ width: roundedPercentage + "%" }}
        ></div>
      </div>
      <p className="w-28 text-right">
        {count} ({roundedPercentage}%)
      </p>
    </div>
  );
};

export default LetterStat;
