import React from "react";
import Sidebar from "../components/home/Sidebar";
import Porcentajes from "../components/home/porcentajes/Porcentajes";
import Navbar from "../components/home/Navbar";

const PorcentajesPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Porcentajes />
      </Sidebar>
    </div>
  );
};

export default PorcentajesPage;
