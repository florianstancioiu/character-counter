export type StatProps = {
  title: string;
  value: number;
  color: string;
  bgImage: string;
};

const Stat = ({ title, value, color, bgImage }: StatProps) => {
  return (
    <div>
      <p>{value}</p>
      <p>{title}</p>
    </div>
  );
};

export default Stat;
