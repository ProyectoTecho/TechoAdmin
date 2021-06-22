import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../../Button";
import { db } from "../../../firebase/client";

function Abroad() {
  const [nameBankAbroad, setNameBankAbroad] = useState("");
  const [swiftCodeAbroad, setSwiftCodeAbroad] = useState("");
  const [beneficiaryNameAbroad, setBeneficiaryNameAbroad] = useState("");
  const [beneficiaryAccountAbroad, setBeneficiaryAccountAbroad] = useState("");

  const [abroad, setAbroad] = useState("");

  useEffect(() => {
    getAbroad();
  }, []);

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
    setNameBankAbroad("")
    setSwiftCodeAbroad("")
    setBeneficiaryNameAbroad("")
    setBeneficiaryAccountAbroad("")
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

  return (
    <div>
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
    </div>
  );
}

export default Abroad;
