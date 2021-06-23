import Logintext from "../components/login/Logintext";
import SignIn from "../components/login/SignIn";
import LoginFooter from "../components/login/LoginFooter";

function Login() {
  return (
    <div>
      <div className="bg-[#449DEF]   content-center my-24 sm:text-center text-center ">
        <form className="max-w-2xl mx-auto space-y-6 focus-border-teal-500  align-middle">
          <Logintext />
          <SignIn />
          <LoginFooter />
        </form>
      </div>
    </div>
  );
}

export default Login;
