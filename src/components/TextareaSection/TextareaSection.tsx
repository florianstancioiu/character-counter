import { useId, useContext } from "react";
import { CharacterCounterContext } from "../../store/CharacterCounterContext";
import InfoIcon from "../../assets/svg/icon-info.svg?react";

const TextareaSection = () => {
  const excludeSpacesId = useId();
  const charLimitId = useId();
  const {
    text,
    setText,
    excludeSpaces,
    setExcludeSpaces,
    charsAreLimited,
    setCharsAreLimited,
    charsLimit,
    setCharsLimit,
    wordCount,
  } = useContext(CharacterCounterContext);

  const minutesSpentReading = Math.ceil(wordCount / 238);
  const showLimitWarning =
    charsAreLimited && charsLimit !== 0 && text.length >= charsLimit;

  return (
    <div className="mb-10">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Start typing here… (or paste your text)"
        className={`mb-4 pt-2 px-2 border-2 ${showLimitWarning ? "border-orange-800" : "border-neutral-200"} bg-neutral-100 w-full resize-none text-neutral-700 h-50 rounded-xl text-[20px] leading-[140%] tracking-[-0.6px] font-normal`}
      ></textarea>
      <div>
        <div>
          {showLimitWarning && (
            <p className="text-orange-800 flex items-center gap-x-2 mb-4">
              <InfoIcon />
              <span>
                Limit reached! Your text exceeds {charsLimit} characters.
              </span>
            </p>
          )}
          <div className="flex gap-x-2 items-center h-7.5 mb-4 text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
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
          <div className="flex gap-x-2 items-center h-7.5 mb-4 text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
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
            {charsAreLimited && (
              <input
                className="h-7.5 border border-neutral-600 text-neutral-900 px-3 inline-block py-1 max-w-14 rounded-md"
                type="text"
                value={charsLimit}
                onChange={(event) =>
                  setCharsLimit(
                    isNaN(parseInt(event.target.value))
                      ? 0
                      : parseInt(event.target.value),
                  )
                }
              />
            )}
          </div>
        </div>
        <p className="text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
          Approx. reading time: {minutesSpentReading !== 0 ? "<" : ""}
          {minutesSpentReading} minute
          {minutesSpentReading > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default TextareaSection;
