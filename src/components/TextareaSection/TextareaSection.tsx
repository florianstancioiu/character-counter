import { useId } from "react";

const TextareaSection = () => {
  const excludeSpacesId = useId();
  const charLimitId = useId();
  const text = `Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.`;

  return (
    <div className="mb-10">
      <textarea
        defaultValue={text}
        placeholder="Start typing here… (or paste your text)"
        className="mb-4 pt-2 px-2 border-2 border-neutral-200 bg-neutral-100 w-full resize-none text-neutral-700 h-50 rounded-xl text-[20px] leading-[140%] tracking-[-0.6px] font-normal"
      ></textarea>
      <div>
        <div>
          <div className="flex gap-x-2 items-center mb-4 text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
            <input
              id={excludeSpacesId}
              type="checkbox"
              className="border rounded-xs border-neutral-900"
            />
            <label htmlFor={excludeSpacesId} className="cursor-pointer">
              Exclude Spaces
            </label>
          </div>
          <div className="flex gap-x-2 items-center mb-4 text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
            <input
              id={charLimitId}
              type="checkbox"
              className="border rounded-xs border-neutral-900"
            />
            <label htmlFor={charLimitId} className="cursor-pointer">
              Set Character Limit
            </label>
          </div>
        </div>
        <p className="text-neutral-900 text-[16px] leading-[130%] tracking-[-0.6px]">
          Approx. reading time: &lt;1 minute
        </p>
      </div>
    </div>
  );
};

export default TextareaSection;
