import React, { useState, useEffect } from 'react'
import Input from '../Input'
import Button from '../../Button'
import { db } from '../../../firebase/client'

const Porcentajes = () => {
	
	const [firstInput, setFirstInput] = useState("")
	const [secondInput, setSecondInput] = useState("")
	const [thirdInput, setThirdInput] = useState("")
	const [fourthInput, setFourthInput] = useState("")
	

	const [percent, setPercent] = useState("")
    
	useEffect(() => {
	    /* cada vez que refresco la página o se actualiza un estado */
	    getPercent()
	}, [])
    
	/* función que crea un monto si no existe, o edita al existente (si existe). 
	Al monto existente lo busca según su id (que viene desde getPercent()) */
	const editOrCreatePercent = async () => {
	    try {
		if (!percent[0]) {
		    await db
		    .collection('percent')
		    .doc()
		    .set({
			firstPercent: firstInput,
			secondPercent: secondInput,
			thirdPercent: thirdInput,
			fourthPercent: fourthInput,
		    })
		}
		else {
		    await db
		    .collection('percent')
		    .doc(percent[0].id)
		    .update({
			firstPercent: firstInput,
			secondPercent: secondInput,
			thirdPercent: thirdInput,
			fourthPercent: fourthInput
		    })
		}
	    }
	    catch(error) {
		console.error(error)
	    }
	}
	
    
	const getPercent = async () => {
	    db
		.collection('percent')
		.onSnapshot((querySnapshot) => {
		    const docs = []
		    querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id })
		    });
		    setPercent(docs)
		})
	}
    
  return (
    <div className="align-center w-36 m-5 space-y-6">
      <h1 className="font-bold">Editar Porcentajes</h1>
      <Input
        name="firstInput"
        type={"number"}
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
        placeholder={"Ingrese nuevo monto"}
        label={"1er Monto"}
      />
      <Input
        name="secondInput"
        type={"number"}
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
        placeholder={"Ingrese nuevo monto"}
        label={"2do Monto"}
      />
      <Input
        name="thirdInput"
        type={"number"}
        value={thirdInput}
        onChange={(e) => setThirdInput(e.target.value)}
        placeholder={"Ingrese nuevo monto"}
        label={"3er Monto"}
      />
      <Input
        name="fourthInput"
        type={"number"}
        value={fourthInput}
        onChange={(e) => setFourthInput(e.target.value)}
        placeholder={"Ingrese nuevo monto"}
        label={"4to Monto"}
      />
      <Button
        onClick={editOrCreatePercent}
        content="Guardar cambios"
        styles={
          "ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5"
        }
      />
    </div>
  );
}

export default Porcentajes;
