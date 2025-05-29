import type React from "react";
import Button from "../components/ui/Button";
import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../hooks/useDarkMode";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { theme, toggle } = useDarkMode();

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-950">
      <Button variant="muted" onClick={toggle}>
        {theme == "light" ? <LuSun className="size-6"></LuSun> : <LuMoon className="size-6"></LuMoon>}
      </Button>
      <section className="flex items-center justify-center h-screen gap-2">{children}</section>
    </div>
  );
}

export default MainLayout;
