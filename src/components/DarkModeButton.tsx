import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../hooks/useDarkMode";
import Button from "./ui/Button";

function DarkModeButton() {
  const { theme, toggle } = useDarkMode();
  return (
    <Button variant="muted" onClick={toggle}>
      {theme == "light" ? <LuSun></LuSun> : <LuMoon></LuMoon>}
    </Button>
  );
}

export default DarkModeButton;
