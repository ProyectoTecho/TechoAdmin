import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "../Button";
import { db } from "../../firebase/client";

function DatosBancarios() {
  const [nameBankTransfer, setNameBankTransfer] = useState("");
  const [typeAccountTransfer, setTypeAccountTransfer] = useState("");
  const [numberAccountTransfer, setNumberAccountTransfer] = useState("");
  const [cbuNumberTransfer, setCbuNumberTransfer] = useState("");
  const [aliasAccountTransfer, setAliasAccountTransfer] = useState("");
  const [titularAccountTransfer, setTitularAccountTransfer] = useState("");
  const [cuitTitularTransfer, setCuitTitularTransfer] = useState("");
  const [nameBankAbroad, setNameBankAbroad] = useState("");
  const [swiftCodeAbroad, setSwiftCodeAbroad] = useState("");
  const [beneficiaryNameAbroad, setBeneficiaryNameAbroad] = useState("");
  const [beneficiaryAccountAbroad, setBeneficiaryAccountAbroad] = useState("");
  const [nameBankInterm, setNameBankInterm] = useState("");
  const [addressBankInterm, setAddressBankInterm] = useState("");
  const [swiftCodeInterm, setSwiftCodeInterm] = useState("");
  const [accountNumberInterm, setAccountNumberInterm] = useState("");
  const [lastSwift, setLastSwift] = useState("");

  const [transfer, setTransfer] = useState("");
  const [abroad, setAbroad] = useState("");
  const [intermediary, setIntermediary] = useState("");

  useEffect(() => {
    /* cada vez que refresco la página o se actualiza un estado */
    getTransfer();
    getAbroad();
    getIntermediary();
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

  const editOrCreateAbroad = async () => {
    try {
      if (!abroad[0]) {
        await db.collection("abroad").doc().set({
          firstData: nameBankAbroad,
          secondData: swiftCodeAbroad,
          thirdData: beneficiaryNameAbroad,
          fourthData: beneficiaryAccountAbroad,
        });
      } else {
        await db.collection("abroad").doc(abroad[0].id).update({
          firstData: nameBankAbroad,
          secondData: swiftCodeAbroad,
          thirdData: beneficiaryNameAbroad,
          fourthData: beneficiaryAccountAbroad,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAbroad = async () => {
    db.collection("abroad").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAbroad(docs);
    });
  };

  const editOrCreateIntermediary = async () => {
    try {
      if (!intermediary[0]) {
        await db.collection("intermediary").doc().set({
          firstData: nameBankInterm,
          secondData: addressBankInterm,
          thirdData: swiftCodeInterm,
          fourthData: accountNumberInterm,
          fifthData: lastSwift,
        });
      } else {
        await db.collection("intermediary").doc(intermediary[0].id).update({
          firstData: nameBankInterm,
          secondData: addressBankInterm,
          thirdData: swiftCodeInterm,
          fourthData: accountNumberInterm,
          fifthData: lastSwift,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getIntermediary = async () => {
    db.collection("intermediary").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setIntermediary(docs);
    });
  };

  return (
    <div className="align-center m-5 space-y-6">
      <h1 className="font-bold ">Editar datos bancarios</h1>

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
          "ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
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

      <h2 className="border-black">Bank transfer from abroad</h2>
      <h3>Beneficiary Bank</h3>

      <div className="flex text-center text-black text-sm">
        <div className="">
          <h3>BANK NAME</h3>
          <Input
            type={"text"}
            name="nameBankAbroad"
            value={nameBankAbroad}
            onChange={(e) => setNameBankAbroad(e.target.value)}
            placeholder={"Bank name"}
          />
        </div>

        <div className="">
          <h3>SWIFT CODE:</h3>
          <Input
            type={"text"}
            name="swiftCodeAbroad"
            value={swiftCodeAbroad}
            onChange={(e) => setSwiftCodeAbroad(e.target.value)}
            placeholder={"Swift code"}
          />
        </div>

        <div className="">
          <h3>BENEFICIARY'S NAME:</h3>
          <Input
            type={"text"}
            name="beneficiaryNameAbroad"
            value={beneficiaryNameAbroad}
            onChange={(e) => setBeneficiaryNameAbroad(e.target.value)}
            placeholder={"Beneficiary’s name"}
          />
        </div>
      </div>

      <div className="flex text-center text-black text-sm">
        <div className="">
          <h3>ACCOUNT NUMBER:</h3>
          <Input
            type={"text"}
            name="beneficiaryAccountAbroad"
            value={beneficiaryAccountAbroad}
            onChange={(e) => setBeneficiaryAccountAbroad(e.target.value)}
            placeholder={"Beneficiary's account"}
          />
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>
      <Button
        onClick={editOrCreateAbroad}
        content="Guardar cambios"
        styles={
          "ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
        }
        disabled={
          nameBankAbroad === "" ||
          swiftCodeAbroad === "" ||
          beneficiaryNameAbroad === "" ||
          beneficiaryAccountAbroad === ""
            ? true
            : false
        }
      />
      {/*
Bank transfer from abroad
Beneficiary Bank
Bank name: BANCO HIPOTECARIO
Swift code: BHIPARBAXXX
Beneficiary’s name: UN TECHO PARA ARGENTINA A.C.
Beneficiary’s account number: 200000028125066
*/}

      <h2 className="border-black">Intermediary Bank</h2>

      <div className="flex text-center text-black text-sm">
        <div className="">
          <h3>INTERMEDIARY BANK NAME:</h3>
          <Input
            type={"text"}
            name="nameBankInterm"
            value={nameBankInterm}
            onChange={(e) => setNameBankInterm(e.target.value)}
            placeholder={"Bank name"}
          />
        </div>

        <div className="">
          <h3>ADDRESS:</h3>
          <Input
            type={"text"}
            name="addressBankInterm"
            value={addressBankInterm}
            onChange={(e) => setAddressBankInterm(e.target.value)}
            placeholder={"Address"}
          />
        </div>

        <div className="">
          <h3>SWIFT CODE INTERMEDIARY:</h3>
          <Input
            type={"text"}
            name="swiftCodeInterm"
            value={swiftCodeInterm}
            onChange={(e) => setSwiftCodeInterm(e.target.value)}
            placeholder={"Swift Code"}
          />
        </div>
      </div>

      <div className="flex text-center text-black text-sm">
        <div className="">
          <h3>ACCOUNT NUMBER:</h3>
          <Input
            type={"text"}
            name="accountNumberInterm"
            value={accountNumberInterm}
            onChange={(e) => setAccountNumberInterm(e.target.value)}
            placeholder={"Account number"}
          />
        </div>

        <div className="">
          <h3>SWIFT:</h3>
          <Input
            type={"text"}
            name="lastSwift"
            value={lastSwift}
            onChange={(e) => setLastSwift(e.target.value)}
            placeholder={"SWIFT"}
          />
        </div>

        <div className=""></div>
      </div>

      <Button
        // onClick={editOrCreateIntermediary}
        content="Guardar cambios"
        styles={
          "ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"
        }
        disabled={
          nameBankInterm === "" ||
          addressBankInterm === "" ||
          swiftCodeInterm === "" ||
          accountNumberInterm === "" ||
          lastSwift === ""
            ? true
            : false
        }
      />

      {/*


Intermediary Bank
Citibank NA – NEW YORK – USA 111 Wall Street
New York, NY 10043, USA
Swift Code CITIUS33XXX - ABA 021000089
Account Numer: 10954887 DE BANCO HIPOTECARIO S.A. 
(SWIFT: BHIPARBAXXX) */}
    </div>
  );
}

export default DatosBancarios;
