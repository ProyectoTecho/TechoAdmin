import { useState } from "react";
import Modal from "./Modal"
import Login from "../../pages/Login"
function SignIn() {
  const [modal, setModal] = useState(false);
  console.log(modal, 'MODAL');

  const handleClick = (e) => {
    e.preventDefault();
    setModal(!modal)
    console.log('hiciste click'); 
  }


  
  return (
    <div className = "flex justify-center items-center ">
      <button
        className="bg-blue-500 w-1/4 mt-4 text-white border-solid border-2 border-white font-bold py-2 px-4 rounded-full space-x-4"
        onClick={handleClick} 
        >
        Sign In
      </button>
      { modal && <Modal/> }
    
    </div>
  );
}

export default SignIn;




//  console.log(user, "SOY EL USER");

 