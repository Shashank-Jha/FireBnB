import React,{useState} from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[redirect,setRedirect] = useState(false);

  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
      await axios.post("/login",{
        email,
        password,
      });
      alert("Login Successful!");
      setRedirect(true);
    }catch(e){
      alert(`Login Failed! ${e}`);
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl font-black text-center text-primary my-2">
          Login
        </h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don't have account yet?{" "}
            <Link to={"/register"} className="font-bold text-primary underline">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
