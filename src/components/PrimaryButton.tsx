import type React from "react";

type Props = {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
};

function PrimaryButton({ children, icon: Icon }: Props) {
  return (
    <button className="bg-gray-800 text-gray-50 px-4 py-2 font-semibold rounded-lg flex items-center justify-center gap-2 hover:contrast-125 cursor-pointer transition">
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
}

export default PrimaryButton;
