import { useId, useContext } from "react";
import { CharacterCounterContext } from "../../store/CharacterCounterContext";

const TextareaSection = () => {
  const excludeSpacesId = useId();
  const charLimitId = useId();
  const {
    text,
    setText,
    excludeSpaces,
    setExcludeSpaces,
    charsAreLimited,
    wordCount,
    setCharsAreLimited,
  } = useContext(CharacterCounterContext);

  const minutesSpentReading = Math.ceil(wordCount / 238);

  return (
    <div className="mb-10">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Start typing here… (or paste your text)"
        className="mb-4 pt-2 px-2 border-2 border-neutral-200 bg-neutral-100 w-full resize-none text-neutral-700 h-50 rounded-xl text-[20px] leading-[140%] tracking-[-0.6px] font-normal"
      ></textarea>
      <div>
        <div>
          <div className="flex gap-x-2 items-center mb-4 text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
            <input
              id={excludeSpacesId}
              type="checkbox"
              checked={excludeSpaces}
              onChange={(event) => setExcludeSpaces(event.target.checked)}
              className="border rounded-xs border-neutral-900"
            />
            <label
              htmlFor={excludeSpacesId}
              className="cursor-pointer select-none"
            >
              Exclude Spaces
            </label>
          </div>
          <div className="flex gap-x-2 items-center mb-4 text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
            <input
              id={charLimitId}
              type="checkbox"
              checked={charsAreLimited}
              onChange={(val) => setCharsAreLimited(val.target.checked)}
              className="border rounded-xs border-neutral-900"
            />
            <label htmlFor={charLimitId} className="cursor-pointer select-none">
              Set Character Limit
            </label>
          </div>
        </div>
        <p className="text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
          Approx. reading time: {minutesSpentReading !== 0 ? `&lt;` : ""}
          {minutesSpentReading} minute
          {minutesSpentReading > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default TextareaSection;
