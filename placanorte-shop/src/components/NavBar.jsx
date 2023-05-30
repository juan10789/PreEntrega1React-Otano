import { CarWidget } from "./CarWidget/CarWidget";

export const NavBar = () => {
  return (
    <header>
      <h1>PLACANORTE</h1>
      <div>
        <a href="">INICIO</a>
        <a href="">PANELES</a>
        <a href="">TAPACANTOS</a>
        <a href="">HERRAJES</a>
        <a href="">HERRAMIENTAS</a>
        <a href="">OUTLET</a>
        <CarWidget />
      </div>
    </header>
  );
};
