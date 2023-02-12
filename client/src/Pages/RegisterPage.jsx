import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl font-black text-center text-primary my-2">
          Register
        </h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Peter Parker" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Register</button>
          <div className="py-2 text-center text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className="font-bold text-primary underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
