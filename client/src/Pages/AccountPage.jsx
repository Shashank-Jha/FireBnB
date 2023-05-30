import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return `Loading....`;
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClass(type = null) {
    let className = " py-2 px-6 ";
    if (type === subpage) {
      className += " bg-primary rounded-full text-white ";
    }
    return className;
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className={linkClass("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClass("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={linkClass("places")} to={"/account/places"}>
          My accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto mt-10">
          Logged in as {user.name} <strong>({user.email})</strong><br />
          <button className="primary max-w-sm mt-4 transition transform hover:scale-105 hover:bg-primary hover:text-white ease-in" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {subpage === "bookings" && <h1>My Bookings</h1>}
      {subpage === "places" && <h1>My Places</h1>}
    </div>
  );
}

export default AccountPage;
