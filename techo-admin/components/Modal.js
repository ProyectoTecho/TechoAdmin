// import { onAuthStateChanged } from "../firebase/client";
import { useState, useEffect } from "react";
// import "firebase/auth";


function Modal() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user, "USERRRRRRRRRR");

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   onAuthStateChanged(setUser);
  // }, []);

  const handleClick = () => {
    // loginWithEmail()
    //   .then(setUser)
    //   .catch((err) => {
    //     console.log(err,'ERRORRRRRR EN EL HANDLECLICK');
    //   });
    console.log(user, "USER LOGUEADO CON email");
  };

  // console.log(onAuthStateChanged)
  return (
    <div className="rounded-md min-h-full flex items-center justify-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-50 mt-0">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-medium">Techo Admin</h1>

        <form className="mt-8 space-y-6" id="signInForm"  method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              type="email"
              id="sigInEmail"
              className="w-4/5 h-12 rounded-full"
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
              className="w-4/5 h-12 rounded-full"
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
