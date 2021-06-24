import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../../Button";
import { db } from "../../../firebase/client";

const Porcentajes = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [fourthInput, setFourthInput] = useState("");

  const [percent, setPercent] = useState("");

  useEffect(() => {
    /* cada vez que refresco la página o se actualiza un estado */
    getPercent();
  }, []);

  /* función que crea un monto si no existe, o edita al existente (si existe). 
	Al monto existente lo busca según su id (que viene desde getPercent()) */
  const editOrCreatePercent = async () => {
    try {
      if (!percent[0]) {
        await db.collection("percent").doc().set({
          firstPercent: firstInput,
          secondPercent: secondInput,
          thirdPercent: thirdInput,
          fourthPercent: fourthInput,
        });
      } else {
        await db.collection("percent").doc(percent[0].id).update({
          firstPercent: firstInput,
          secondPercent: secondInput,
          thirdPercent: thirdInput,
          fourthPercent: fourthInput,
        });
      }
    } catch (error) {
      console.error(error);
    }
    setFirstInput("");
    setSecondInput("");
    setThirdInput("");
    setFourthInput("");
  };

  const getPercent = async () => {
    db.collection("percent").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPercent(docs);
    });
  };

  return (
    <div className="align-center text-center m-5 space-y-6">
      <h2 className="font-bold underline">EDITAR PORCENTAJES</h2>

      <div className="flex text-black text-sm">
        <div>
          <h3>1er MONTO</h3>
          <Input
            name="firstInput"
            type={"number"}
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
            placeholder={"Ingrese nuevo monto"}
          />
        </div>
        </div>

        <div className="flex text-black text-sm">
        <div>
          <h3>2do MONTO</h3>
          <Input
            name="secondInput"
            type={"number"}
            value={secondInput}
            onChange={(e) => setSecondInput(e.target.value)}
            placeholder={"Ingrese nuevo monto"}
          />
        </div>
      </div>
      <div className="flex text-black text-sm">
        <div>
          <h3>3er MONTO</h3>
          <Input
            name="thirdInput"
            type={"number"}
            value={thirdInput}
            onChange={(e) => setThirdInput(e.target.value)}
            placeholder={"Ingrese nuevo monto"}
          />
        </div>
        </div>
        
        <div className="flex text-black text-sm">
        <div>
          <h3>4to MONTO</h3>
          <Input
            name="fourthInput"
            type={"number"}
            value={fourthInput}
            onChange={(e) => setFourthInput(e.target.value)}
            placeholder={"Ingrese nuevo monto"}
          />
        </div>
      </div>

      
        <Button
          onClick={editOrCreatePercent}
          content="Guardar cambios"
          styles={
            "rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
          }
          disabled={
            firstInput === "" ||
            secondInput === "" ||
            thirdInput === "" ||
            fourthInput === ""
              ? true
              : false
          }
        />
      
    </div>
  );
};

export default Porcentajes;
