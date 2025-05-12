import { LuPanelLeft } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

import IconButton from "./IconButton";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavButton from "./NavButton";
import Profile from "./Profile";
import PrimaryButton from "./PrimaryButton";

function Aside() {
  return (
    <aside className="p-4 flex flex-col gap-4 justify-between [grid-area:aside] shadow-2xl">
      <section className="flex items-center justify-between">
        <Logo></Logo>
        <IconButton icon={LuPanelLeft} />
      </section>
      <Profile name="Juan Camilo" email="jgamezc@uninorte.edu.co"></Profile>
      <Navigation />
      <PrimaryButton icon={LuPlus}>Nuevo Proyecto</PrimaryButton>
      <section className="flex flex-col gap-2 border-t border-t-gray-300 pt-2">
        <NavButton icon={LuSettings}>Configuración</NavButton>
        <NavButton icon={LuLogOut}>Cerrar Sesión</NavButton>
      </section>
    </aside>
  );
}

export default Aside;
