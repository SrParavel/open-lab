import { LuCompass } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";

import NavButton from "./NavButton";

function Navigation() {
  return (
    <nav className="grow">
      <ul className="flex flex-col gap-2">
        <NavButton icon={LuCompass} selected={true}>
          Inicio
        </NavButton>
        <NavButton icon={LuLayoutGrid}>Proyectos</NavButton>
      </ul>
    </nav>
  );
}

export default Navigation;
