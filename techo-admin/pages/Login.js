import SignIn from "../components/SignIn";
import LoginFooter from "../components/LoginFooter";
import Logintext from "../components/Logintext";
import Modal from "../components/Modal";
import Navbar from '../components/Navbar'

function Login() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#449DEF]  h-screen content-center sm:text-center text-center ">
        <form className="max-w-2xl mx-auto space-y-6 focus-border-teal-500  align-middle">
          <Logintext />
          <Modal />
        </form>

        {/* <LoginFooter /> */}
      </div>
    </div>
  );
}

export default Login;

{
  /* arrow no queda CENTRADO */
}
{
  /* <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-6 block m-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div> */
}

{
  /* ESTO PASA AL MODAL */
}
{
  /* <div>
          <input type="email" placeholder="EMAIL" className="form-input px-4 py-3 rounded-full 
        border-none"></input>
        </div>

        <div>
          <input type="password" placeholder="PASSWORD" className="form-input px-4 py-3 rounded-full 
        border-none" ></input>
        </div> */
}

