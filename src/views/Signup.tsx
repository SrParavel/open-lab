import { LuLock, LuMail } from "react-icons/lu";
import Card from "../components/Card";
import DarkModeButton from "../components/DarkModeButton";
import Logo from "../components/Logo";
import Button from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";

function Signup() {
  return (
    <MainLayout>
      <Card className="px-16 p-8">
        <div className="flex justify-between items-center">
          <Logo></Logo>
          <DarkModeButton></DarkModeButton>
        </div>
        <div className="flex flex-col items-center justify-center w-sm text-center my-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50">¡Registrate!</h1>
          <p className="text-gray-700 dark:text-gray-400">Dale un impulso a tus proyectos</p>
        </div>
        <div className="grid grid-rows-4 gap-4 items-end">
          <TextField label="Correo Electrónico" placeholder="Escribe tu correo" icon={LuMail}></TextField>
          <TextField label="Contraseña" type="password" placeholder="Escribe tu contraseña" icon={LuLock}></TextField>
          <TextField
            label="Confirmar contraseña"
            type="password"
            placeholder="Repite tu contraseña"
            icon={LuLock}
          ></TextField>
          <Button size="lg">Registrarse</Button>
        </div>
        <div className="grid items-center justify-center text-center my-8">
          <p className="text-gray-800 dark:text-gray-50">¿Ya tienes cuenta?</p>
          <Link to="/login" className="text-blue-400">
            Ingresa aquí
          </Link>
        </div>
        <p className="text-gray-400 text-sm text-center">Todos los derechos reservados OpenLab 2025 ©</p>
      </Card>
    </MainLayout>
  );
}

export default Signup;
