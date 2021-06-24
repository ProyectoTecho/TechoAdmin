import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "../Button";
import { db } from "../../firebase/client";

const MontosForm = () => {
  const [data, setData] = useState({
    firstButton: "",
    firstLink: "",
    secondButton: "",
    secondLink: "",
    thirdButton: "",
    thirdLink: "",
    fourthButton: "",
    fourthLink: "",
    fifthButton: "",
    fifthLink: "",
    sixthButton: "",
    sixthLink: "",
  });

  const [montosMP, setMontosMP] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setBotonesMP();
  }, []);

  const setBotonesMP = async () => {
    db.collection("donacionesMP").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMontosMP(docs);
    });
  };

  const editOrCreateDonacion = async () => {
    try {
      if (!montosMP[0].id) {
        await db.collection("donacionesMP").doc().set({
          firstButton: data.firstButton,
          firstLink: data.firstLink,
          secondButton: data.secondButton,
          secondLink: data.secondLink,
          thirdButton: data.thirdButton,
          thirdLink: data.thirdLink,
          fourthButton: data.fourthButton,
          fourthLink: data.fourthLink,
          fifthButton: data.fifthButton,
          fifthLink: data.fifthLink,
          sixthButton: data.sixthButton,
          sixthLink: data.sixthLink,
        });
      } else {
        await db.collection("donacionesMP").doc(montosMP[0].id).update({
          firstButton: data.firstButton,
          firstLink: data.firstLink,
          secondButton: data.secondButton,
          secondLink: data.secondLink,
          thirdButton: data.thirdButton,
          thirdLink: data.thirdLink,
          fourthButton: data.fourthButton,
          fourthLink: data.fourthLink,
          fifthButton: data.fifthButton,
          fifthLink: data.fifthLink,
          sixthButton: data.sixthButton,
          sixthLink: data.sixthLink,
        });
      }
    } catch (error) {
      console.error(error);
    }
    setData({
      firstButton: "",
      firstLink: "",
      secondButton: "",
      secondLink: "",
      thirdButton: "",
      thirdLink: "",
      fourthButton: "",
      fourthLink: "",
      fifthButton: "",
      fifthLink: "",
      sixthButton: "",
      sixthLink: "",
    });
  };

  return (
    <div className="align-center text-center m-5 space-y-6">
      <h1 className="font-bold underline">EDITAR BOTONES DE MERCADO PAGO</h1>

      <div className="flex text-black text-sm">
      <div>
      <h3>1er BOTON</h3>
        <Input
          type={"number"}
          name="firstButton"
          onChange={handleChange}
          placeholder={"Ingrese nuevo monto"}
        />
        <Input
          type={"text"}
          name="firstLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de MP"}
        />
      </div>
      </div>

      <div className="flex text-black text-sm">
      <div>
      <h3>2do BOTON</h3>
        <Input
          type={"number"}
          name="secondButton"
          onChange={handleChange}
          placeholder={"Ingrese nuevo monto"}
        />
        <Input
          type={"text"}
          name="secondLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de MP"}
        />
      </div>
      </div>

      <div className="flex text-black text-sm">
      <div>
      <h3>3er BOTON</h3>
        <Input
          type={"number"}
          name="thirdButton"
          onChange={handleChange}
          placeholder={"Ingrese nuevo monto"}
        />
        <Input
          type={"text"}
          name="thirdLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de MP"}
        />
      </div>
      </div>

      <div className="flex text-black text-sm">
      <div>
      <h3>4to BOTON</h3>
        <Input
          type={"number"}
          name="fourthButton"
          onChange={handleChange}
          placeholder={"Ingrese nuevo monto"}
        />
        <Input
          type={"text"}
          name="fourthLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de MP"}
        />
      </div>
      </div>

      <div className="flex text-black text-sm">
      <div>

      <h3>5to BOTON</h3>
        <Input
          type={"number"}
          name="fifthButton"
          onChange={handleChange}
          placeholder={"Ingrese nuevo monto"}
        />
        <Input
          type={"text"}
          name="fifthLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de MP"}
        />
      </div>
      </div>

      <div className="flex text-black text-sm">
      <div>
      <h3>6to BOTON</h3>
        <Input
          type={"number"}
          name="sixthButton"
          onChange={handleChange}
          placeholder={"Ingrese nuevo monto"}
        />
        <Input
          type={"text"}
          name="sixthLink"
          onChange={handleChange}
          placeholder={"Ingrese nuevo link de MP"}
        />
      </div>
      </div>

      <Button
        onClick={editOrCreateDonacion}
        content="Guardar cambios"
        styles={
          "rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
        }
        disabled={
          data.firstButton === "" ||
          data.firstLink === "" ||
          data.secondButton === "" ||
          data.secondLink === "" ||
          data.thirdButton === "" ||
          data.thirdLink === "" ||
          data.fourthButton === "" ||
          data.fourthLink === "" ||
          data.fifthButton === "" ||
          data.fifthLink === "" ||
          data.sixthButton === "" ||
          data.sixthLink === ""
            ? true
            : false
        }
      />
    </div>
  );
};

export default MontosForm;
