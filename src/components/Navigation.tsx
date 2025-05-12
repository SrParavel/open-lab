import { LuCompass } from "react-icons/lu";
import { LuGrid2X2 } from "react-icons/lu";

import NavButton from "./NavButton";

function Navigation() {
  return (
    <nav className="grow">
      <ul className="flex flex-col gap-2">
        <NavButton icon={LuCompass} selected={true}>
          Inicio
        </NavButton>
        <NavButton icon={LuGrid2X2}>Proyectos</NavButton>
      </ul>
    </nav>
  );
}

export default Navigation;
