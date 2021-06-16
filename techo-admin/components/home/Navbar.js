import React,  {useState, useEffect} from "react";
import LogoTecho from "../LogoTecho";
import { UserIcon } from "@heroicons/react/outline";
import { auth } from "../../firebase/client";
import { useRouter } from 'next/router'
import "firebase/auth";

const Navbar = () => {
    const router = useRouter()
    const [user, setUser] = useState (null)
    useEffect(() => {
      auth.onAuthStateChanged((user)=>{
        if (user){
          setUser (user.email)
        }
      })
    }, [])
    
  
    const handleLogout = () => {
    auth.signOut()
    setUser (null)
    router.push('/Login')
    } 

  return (
    <header className="flex justify-between">
      <LogoTecho
        styles={
          "group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
        }
      />
        {
            user ? 
        (
      <div className=" flex items-center m-5">
        <UserIcon
          className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-125 hover:z-50 mr-4"
          height="60"
          width="60"
        />

        <h2 className="whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
          {user}
        </h2>
          
        <button
          onClick= {handleLogout} className="ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5"
        >
          Log Out
        </button>
        </div>
        ):
         ( <span></span> )
        }
    </header>
  );
};

export default Navbar;
