import { FaPlus } from "react-icons/fa";

function NewProject() {
  return (
    <button className="flex flex-col border  border-slate-300 items-center gap-2 p-4 hover:bg-slate-100 rounded-lg cursor-pointer transition">
      <span className="bg-slate-800 text-white font-bold rounded-full size-10 flex items-center justify-center">
        <FaPlus className="size-4" />
      </span>
      <p className="text-sm font-semibold">Nuevo Proyecto</p>
    </button>
  );
}

export default NewProject;
