import { useState } from "react";
import { auth } from "../../firebase/client";
import { useRouter } from "next/router";
import Link from "next/link" 

import "firebase/auth";

function Modal() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log("userMail", user.email);
  console.log("userPass", user.password);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const email = user.email;
  const password = user.password;

  const handleClick = (e) => {
    e.preventDefault();
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        router.push("/Home");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("Usuario incorrecto");
        }
        if (error.code === "auth/wrong-password") {
          alert("Password incorrecto");
        }
      });
  };

  return (
    <div className="rounded-md min-h-full flex items-center justify-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-50 mt-0">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-medium">Techo Admin</h1>

        <form className="mt-8 space-y-6" id="signInForm" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              type="email"
              className="w-4/5 h-12 rounded-full text-black"
              placeholder="EMAIL"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <input
              type="password"
              id="sigInPassword"
              className="w-4/5 h-12 rounded-full text-black"
              placeholder="PASSWORD"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="">
            <button
              className="group w-1/2  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={handleClick}
              type="submit"
            >
              Login
            </button>
            <br/>
            <br />
            <Link href="/RecuperarPass">
            <a className="text-black" href="">Olvide la contraseña</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
