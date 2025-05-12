import React from "react";
import type { ComponentType, JSX } from "react";

type Props = {
  children: React.ReactNode;
  icon: ComponentType<{ className?: string }>;
};

function NavLink({ children, icon: Icon }: Props) {
  return (
    <div className="p-2 flex items-center gap-4 font-semibold text-md hover:bg-slate-100 rounded-lg cursor-pointer transition">
      <Icon className="size-5" />
      <span>{children}</span>
    </div>
  );
}

export default NavLink;
