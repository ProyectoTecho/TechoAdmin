import React from "react";
import Sidebar from "../components/home/Sidebar";
import Navbar from "../components/home/Navbar";
import DatosBancarios from "../components/home/datosBancarios/DatosBancarios";

function DatosBancariosPage() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <DatosBancarios />
      </Sidebar>
    </div>
  );
}

export default DatosBancariosPage;
