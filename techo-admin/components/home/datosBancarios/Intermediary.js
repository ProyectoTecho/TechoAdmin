import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../../Button";
import { db } from "../../../firebase/client";

function Intermediary() {
  const [nameBankInterm, setNameBankInterm] = useState("");
  const [addressBankInterm, setAddressBankInterm] = useState("");
  const [swiftCodeInterm, setSwiftCodeInterm] = useState("");
  const [accountNumberInterm, setAccountNumberInterm] = useState("");
  const [lastSwift, setLastSwift] = useState("");

  const [intermediary, setIntermediary] = useState("");

  useEffect(() => {
    getIntermediary();
  }, []);

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
    setNameBankInterm("")
    setAddressBankInterm("")
    setSwiftCodeInterm("")
    setAccountNumberInterm("")
    setLastSwift("")
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
    <div>
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
        onClick={editOrCreateIntermediary}
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

export default Intermediary;
