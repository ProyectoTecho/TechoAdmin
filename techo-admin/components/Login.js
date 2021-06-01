import Image from "next/image";


function Login() {
  return (
    <div className="bg-blue-500 h-screen sm:text-center text-center ">

      <form className="max-w-2xl mx-auto space-y-6 focus-border-teal-500  align-middle">
        <h1 className="text-white text-4xl font-extrabold">ADMIN</h1>
        <p>Ingreso solo para administradores</p>

        <div>
        <input type="email" placeholder="EMAIL" className="form-input px-4 py-3 rounded-full 
        border-none"></input>
        </div>

        <div>
        <input type="password" placeholder="PASSWORD" className="form-input px-4 py-3 rounded-full 
        border-none" ></input>
        </div>

        {/* flecha rebotando */}
        <svg class="animate-bounce w-6 h-6"></svg> 
        
        <div>
        <button type="submit" className="rounded-full border-solid border-2 border-light-blue-500 text-1xl px-3 py-1 ">INGRESAR</button>
        </div>

      </form>
      <footer>
        <Image src="/techo-footer.png" width="auto" height="100" />
      </footer>
    </div>
  );
}

export default Login;
