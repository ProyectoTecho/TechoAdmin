import { useState } from 'react'
import LogoTecho from './LogoTecho'


function Login() {
   /*  const [data, setData] = useState({
        name: "",
        pass: "",
    });

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    
    console.log(data) */

    return (
        <div className="h-screen sm:text-center text-center ">

            <form className="max-w-2xl mx-auto space-y-6 focus-border-teal-500  align-middle">
                <h1 className="text-white text-4xl font-extrabold mt-5">ADMIN</h1>
                <p>Ingreso solo para administradores</p>

                <div>
                    <input /* name='name' onChange={handleData} */ type="email" placeholder="EMAIL" className="form-input px-4 py-3 rounded-full 
        border-none"></input>
                </div>

                <div>
                    <input /* name='pass'onChange={handleData} */ type="password" placeholder="PASSWORD" className="form-input px-4 py-3 rounded-full 
        border-none" ></input>
                </div>

                {/* flecha rebotando */}
                <svg class="animate-bounce w-6 h-6"></svg>

                <div>
                    <button type="submit" className="rounded-full border-solid border-2 border-light-blue-500 text-1xl px-3 py-1 mb-5">INGRESAR</button>
                </div>

            </form>
            <footer>
                <LogoTecho />
            </footer>
        </div>
    );
}

export default Login;
