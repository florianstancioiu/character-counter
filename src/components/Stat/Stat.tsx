import StatPattern from "../StatPattern/StatPattern";

export type StatProps = {
  title: string;
  value: number;
  bgColor: "bg-purple-400" | "bg-yellow-500" | "bg-orange-500";
};

const Stat = ({ title, value, bgColor }: StatProps) => {
  return (
    <div
      className={`flex items-center justify-between h-32.5 mb-4 rounded-xl p-5 pr-0 text-neutral-900 ${bgColor}`}
    >
      <div>
        <p className="font-bold text-[40px] leading-[100%] tracking-[-1px] mb-2">
          {value}
        </p>
        <p className="text-[20px] leading-[140%] tracking-[-0.6px]">{title}</p>
      </div>
      <StatPattern bgColor={bgColor} />
    </div>
  );
};

export default Stat;
