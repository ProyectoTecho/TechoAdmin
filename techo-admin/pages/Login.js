import Logintext from "../components/Logintext";
import SignIn from "../components/SignIn";
// import LoginFooter from "../components/LoginFooter";

function Login() {
  return (
    <div>
      <div className="bg-[#449DEF]  h-screen content-center sm:text-center text-center ">
        <form className="max-w-2xl mx-auto space-y-6 focus-border-teal-500  align-middle">
          <Logintext />
          <SignIn />
          {/* <LoginFooter /> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
