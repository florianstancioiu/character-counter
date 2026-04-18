import StatPattern from "../StatPattern/StatPattern";

export type StatProps = {
  title: string;
  value: number;
  bgColor: "bg-purple-400" | "bg-yellow-500" | "bg-orange-500";
};

const Stat = ({ title, value, bgColor }: StatProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-between h-32.5 mb-4 rounded-xl p-5 pr-0 text-neutral-900 ${bgColor} md:h-37.5`}
    >
      <div className="relative z-1">
        <p className="font-bold text-[40px] leading-[100%] tracking-[-1px] mb-2 md:text-[64px]">
          {value < 9 ? `0${value}` : value}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-[20px] leading-[140%] tracking-[-0.6px] h-7"
        ></p>
      </div>
      <StatPattern bgColor={bgColor} />
    </div>
  );
};

export default Stat;
