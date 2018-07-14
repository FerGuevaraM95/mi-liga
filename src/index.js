import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Material
// import Reboot from "material-ui/Reboot";

// Estilos
import "./index.css";

// Componentes
import Header from "./components/common/Header/Header";
import Liga from "./components/Liga/Liga";
import Calendario from "./components/Calendario/Calendario"

// The CODE!
const Root = () => {
  return (
    <div>
      {/* <Reboot /> */}
      <Header />
      <div className="contenedor">
          <Liga />
          <Calendario />
      </div>
    </div>
  );
};

render(<Root />, document.querySelector("#root"));

registerServiceWorker();
