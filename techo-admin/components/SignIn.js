import { useState } from "react";
import Modal from "./Modal"

function SignIn() {
  const [modal, setModal] = useState(false);
  console.log(modal, 'MODAL');

  const handleClick = (e) => {
    e.preventDefault();
    setModal(true)
    console.log('hiciste click'); 
  }


  
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white border-solid border-2 border-white font-bold py-2 px-4 rounded-full space-x-4"
        onClick={handleClick} 
        >
        Sign In
      </button>
    <Modal /> 


    </div>
  );
}

export default SignIn;




//  console.log(user, "SOY EL USER");

 