import { useState } from "react";
import { auth } from "../firebase/client";
import { useRouter } from "next/router";

function RecuperarPass() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });

  console.log("userMail", user.email);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const email = user.email;

  const handleClick = (e) => {
    e.preventDefault();
    return auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("mail enviado");
        router.push("/");
      })
      .catch(function (error) {
        if (error.code === "auth/user-not-found") {
          alert("Usuario incorrecto");
        }
      });
  };

  return (
    
    <div className="flex justify-center mt-20">
      <div className="max-w-md w-full space-y-8 ">
        <h1 className="text-3xl font-medium text-white flex justify-center">Techo Admin</h1>
        <p className="text-white flex justify-center">Se le estara enviando un mail para reestablecer su contraseña</p>

        <form className="mt-8 space-y-6" id="signInForm" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              type="email"
              className="w-4/5 h-12 rounded-full text-black "
              placeholder="EMAIL"
              name="email"
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
              Enviar Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecuperarPass;
