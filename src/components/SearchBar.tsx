import { LuSearch } from "react-icons/lu";
import NavButton from "./NavButton";
import { LuListFilter } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";

function SearchBar() {
  return (
    <div className="bg-gray-50 flex w-full rounded-lg overflow-hidden p-2 items-center gap-2">
      <LuSearch className="size-5 m-2"></LuSearch>
      <input type="text" placeholder="Buscar proyectos..." className="outline-none grow" />
      <NavButton icon={LuListFilter}>Ordenar</NavButton>
      <NavButton icon={LuFilter}>Filtros</NavButton>
    </div>
  );
}

export default SearchBar;
