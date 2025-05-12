import { FaSearch } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import NavLink from "./NavLink";
import Profile from "./Profile";
import IconButton from "./IconButton";
import NewProject from "./NewProject";
function Aside() {
  return (
    <aside className="[grid-area:aside] p-4 flex flex-col">
      <div className=" hover:bg-slate-100 rounded-lg cursor-pointer w-fit p-4">
        <FaColumns className="size-6 text-slate-800" />
      </div>
      <section className="border-t border-slate-300 p-4">
        <Profile name="John Doe" email="john.doe@example.com" avatar="https://via.placeholder.com/150" />
      </section>
      <section className="flex flex-col gap-2 text-slate-800 grow border-t border-slate-300 py-4">
        <NavLink icon={FaSearch}>Explorar</NavLink>
        {/* <NavLink icon={<FaRegCompass />}>Explorar</NavLink> */}
        <NavLink icon={FaLayerGroup}>Proyectos</NavLink>
      </section>
      <NewProject />
      <NavLink icon={FaCog}>Configuración</NavLink>
    </aside>
  );
}

export default Aside;
