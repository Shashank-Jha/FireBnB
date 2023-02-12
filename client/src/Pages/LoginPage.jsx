import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl font-black text-center text-primary my-2">
          Login
        </h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
