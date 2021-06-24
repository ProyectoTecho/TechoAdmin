import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "../Button";
import { db } from "../../firebase/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Captadoras() {
  const [data, setData] = useState({
    firstName: "",
    firstLink: "",
    secondName: "",
    secondLink: "",
    thirdName: "",
    thirdLink: "",
    fourthName: "",
    fourthLink: "",
  });

  const [captadoras, setCaptadoras] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setStaff();
  }, []);

  const setStaff = async () => {
    db.collection("captadoras").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCaptadoras(docs);
    });
  };

  const editOrCreateCaptadoras = async () => {
    try {
      if (!captadoras[0]) {
        await db.collection("captadoras").doc().set({
          firstName: data.firstName,
          firstLink: data.firstLink,
          secondName: data.secondName,
          secondLink: data.secondLink,
          thirdName: data.thirdName,
          thirdLink: data.thirdLink,
          fourthName: data.fourthName,
          fourthLink: data.fourthLink,
        });
      } else {
        await db.collection("captadoras").doc(captadoras[0].id).update({
          firstName: data.firstName,
          firstLink: data.firstLink,
          secondName: data.secondName,
          secondLink: data.secondLink,
          thirdName: data.thirdName,
          thirdLink: data.thirdLink,
          fourthName: data.fourthName,
          fourthLink: data.fourthLink,
        });
      }
    } catch (error) {
      console.error(error);
    }
    setData({
      firstName: "",
      firstLink: "",
      secondName: "",
      secondLink: "",
      thirdName: "",
      thirdLink: "",
      fourthName: "",
      fourthLink: "",
    });
    toast('CAMBIOS REALIZADOS!! 🎉🎉', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
  };

  return (
    <div className="align-center text-center m-5 space-y-6">
      <ToastContainer></ToastContainer>

      <h1 className="font-bold underline">EDITAR CAPTADORAS</h1>
      <p>
        Las fotos de las captadoras deben tener un tamaño menor a los 100 kb y
        deber ser en formato .png .<br />
        Para modificar el tamaño de las imagenes pueden usar la siguiente
        pagina: <br />
        <a href="https://www.achicarimagenes.com.ar/" target="blanck">
          <p className="font-bold cursor-pointer underline">
            Achicar tamaño de imagenes
          </p>
        </a>
      </p>


      <div className="flex text-black text-sm">
        <div>
          <h3>CAPTADORA 1</h3>
          <Input
            type={"text"}
            name="firstName"
            onChange={handleChange}
            placeholder={"Nombre y Apellido"}
          />
          <Input
            type={"text"}
            name="firstLink"
            onChange={handleChange}
            placeholder={"Ingrese nuevo link de google drive"}
          />
        </div>
      </div>

      <div className="flex text-black text-sm">
        <div>
          <h3>CAPTADORA 2</h3>
          <Input
            type={"text"}
            name="secondName"
            onChange={handleChange}
            placeholder={"Nombre y Apellidoo"}
          />
          <Input
            type={"text"}
            name="secondLink"
            onChange={handleChange}
            placeholder={"Ingrese nuevo link de google drive"}
          />
        </div>
      </div>

      <div className="flex text-black text-sm">
      <div>
          <h3>CAPTADORA 3</h3>
        <Input
          type={"text"}
          name="thirdName"
          onChange={handleChange}
          placeholder={"Nombre y Apellido"}
        />
        <Input
          type={"text"}
          name="thirdLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de google drive"}
        />
      </div>
      </div>

      <div className="flex text-black text-sm">
      <div>
          <h3>CAPTADORA 4</h3>
        <Input
          type={"text"}
          name="fourthName"
          onChange={handleChange}
          placeholder={"Nombre y Apellido"}
        />
        <Input
          type={"text"}
          name="fourthLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de google drive"}
        />
      </div>
      </div>

      <Button
        onClick={editOrCreateCaptadoras}
        content="Guardar cambios"
        styles={
          "rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
        }
        disabled={
          data.firstName === "" ||
          data.firstLink === "" ||
          data.secondName === "" ||
          data.secondLink === "" ||
          data.thirdName === "" ||
          data.thirdLink === "" ||
          data.fourthName === "" ||
          data.fourthLink === ""
            ? true
            : false
        }
      />
    </div>
  );
}

export default Captadoras;
