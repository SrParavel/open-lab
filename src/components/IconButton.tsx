import type { ComponentType } from "react";

type Props = {
  icon: ComponentType<{ className?: string }>;
  onClick: () => void;
};

function IconButton({ icon: Icon, onClick }: Props) {
  return (
    <button onClick={onClick} className="p-2 hover:bg-slate-100 rounded-lg cursor-pointer transition">
      <Icon className="size-6" />
    </button>
  );
}

export default IconButton;
