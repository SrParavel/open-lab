import type React from "react";

type Props = {
  icon: React.ComponentType<{ className?: string }>;
  value: number | string;
  className?: string;
};

const Stat = ({ icon: Icon, value, className = "" }: Props) => (
  <span className={`flex items-center gap-2 ${className}`}>
    <Icon></Icon>
    {value}
  </span>
);

export default Stat;
