import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../../Button";
import { db } from "../../../firebase/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Transferencia() {
  const [nameBankTransfer, setNameBankTransfer] = useState("");
  const [typeAccountTransfer, setTypeAccountTransfer] = useState("");
  const [numberAccountTransfer, setNumberAccountTransfer] = useState("");
  const [cbuNumberTransfer, setCbuNumberTransfer] = useState("");
  const [aliasAccountTransfer, setAliasAccountTransfer] = useState("");
  const [titularAccountTransfer, setTitularAccountTransfer] = useState("");
  const [cuitTitularTransfer, setCuitTitularTransfer] = useState("");

  const [transfer, setTransfer] = useState("");

  useEffect(() => {
    /* cada vez que refresco la página o se actualiza un estado */
    getTransfer();
  }, []);

  const editOrCreateTransfer = async () => {
    try {
      if (!transfer[0]) {
        await db.collection("transfer").doc().set({
          firstData: nameBankTransfer,
          secondData: typeAccountTransfer,
          thirdData: numberAccountTransfer,
          fourthData: cbuNumberTransfer,
          fifthData: aliasAccountTransfer,
          sixthData: titularAccountTransfer,
          seventhData: cuitTitularTransfer,
        });
      } else {
        await db.collection("transfer").doc(transfer[0].id).update({
          firstData: nameBankTransfer,
          secondData: typeAccountTransfer,
          thirdData: numberAccountTransfer,
          fourthData: cbuNumberTransfer,
          fifthData: aliasAccountTransfer,
          sixthData: titularAccountTransfer,
          seventhData: cuitTitularTransfer,
        });
      }
    } catch (error) {
      console.error(error);
    }

    setNameBankTransfer("");
    setTypeAccountTransfer("");
    setNumberAccountTransfer("");
    setCbuNumberTransfer("");
    setAliasAccountTransfer("");
    setTitularAccountTransfer("");
    setCuitTitularTransfer("");
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

  const getTransfer = async () => {
    db.collection("transfer").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTransfer(docs);
    });
  };

  return (
    <>
      <div className="text-center m-5 space-y-6">
      <ToastContainer></ToastContainer>

        <h1 className="font-bold underline">EDITAR DATOS BANCARIOS</h1>
      </div>

      <div className="align-center text-center m-5 space-y-6 border-white border-2">
        <h2 className="border-black">Transferencia bancaria</h2>

        <div className="flex text-center text-black text-sm">
          <div className="">
            <h3>BANCO:</h3>
            <Input
              type={"text"}
              name="nameBankTransfer"
              value={nameBankTransfer}
              onChange={(e) => setNameBankTransfer(e.target.value)}
              placeholder={"Entidad bancaria"}
            />
          </div>

          <div className="">
            <h3>TIPO DE CUENTA:</h3>
            <Input
              type={"text"}
              name="typeAccountTransfer"
              value={typeAccountTransfer}
              onChange={(e) => setTypeAccountTransfer(e.target.value)}
              placeholder={"Tipo de cuenta"}
            />
          </div>

          <div className="">
            <h3>NUMERO DE CUENTA:</h3>
            <Input
              type={"text"}
              name="numberAccountTransfer"
              value={numberAccountTransfer}
              onChange={(e) => setNumberAccountTransfer(e.target.value)}
              placeholder={"Numero de cuenta"}
            />
          </div>
        </div>

        <div className="flex text-center text-black text-sm">
          <div className="">
            <h3>CBU:</h3>
            <Input
              type={"text"}
              name="cbuNumberTransfer"
              value={cbuNumberTransfer}
              onChange={(e) => setCbuNumberTransfer(e.target.value)}
              placeholder={"Nro CBU"}
            />
          </div>

          <div className="">
            <h3>CBU ALIAS:</h3>
            <Input
              type={"text"}
              name="aliasAccountTransfer"
              value={aliasAccountTransfer}
              onChange={(e) => setAliasAccountTransfer(e.target.value)}
              placeholder={"Alias"}
            />
          </div>

          <div className="">
            <h3>TITULAR DE LA CUENTA:</h3>
            <Input
              type={"text"}
              name="titularAccountTransfer"
              value={titularAccountTransfer}
              onChange={(e) => setTitularAccountTransfer(e.target.value)}
              placeholder={"Titular"}
            />
          </div>
        </div>

        <div className="flex text-center text-black text-sm">
          <div className="">
            <h3>CUIT TITULAR:</h3>
            <Input
              type={"text"}
              name="cuitTitularTransfer"
              value={cuitTitularTransfer}
              onChange={(e) => setCuitTitularTransfer(e.target.value)}
              placeholder={"Nro CUIT"}
            />
          </div>
        </div>
        <Button
          onClick={editOrCreateTransfer}
          content="Guardar cambios"
          styles={
            "rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
          }
          disabled={
            nameBankTransfer === "" ||
            typeAccountTransfer === "" ||
            numberAccountTransfer === "" ||
            cbuNumberTransfer === "" ||
            aliasAccountTransfer === "" ||
            titularAccountTransfer === "" ||
            cuitTitularTransfer === ""
              ? true
              : false
          }
        />
        {/* Transferencia bancaria
Banco Hipotecario
Tipo y Nº de cuenta: Cta Cte Esp
$ 400000013297761
Nº de CBU: 0440000440000132977618
CBU ALIAS: TECHO.DONACIONES.S
Titular de la cuenta: Un Techo Para Argentina AC
CUIT del titular: 30708357363*/}
      </div>
    </>
  );
}

export default Transferencia;
