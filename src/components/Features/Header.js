import React, { useState, useEffect } from "react";

// import header data
import { header } from "../../data";

// import components
import Nav from "../Features/Nav";
import NavMobile from "./NavMobile";

// import icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  //const user = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data
  const { btnLoginText, btnSignupText } = header;
  const user = {
    address: localStorage.getItem("address"),
    avatar: localStorage.getItem("avatar"),
    email: localStorage.getItem("email"),
    enable: localStorage.getItem("enable"),
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    username: localStorage.getItem("username"),
    role: localStorage.getItem("role"),
  }

  const logOut = () => {
    if (user.id) {
      localStorage.removeItem("address");
      localStorage.removeItem("avatar");
      localStorage.removeItem("email");
      localStorage.removeItem("enable");
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("phone");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      window.location.reload();
    }
  }
  return (
    <header
      className={`${isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
        } fixed max-w-[1920px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      {/* logo */}
      <a href="/home">
        <img
          className="h-[70px] rounded-full"
          src={require("../images/logo-g.png")}
          alt=""
        />
      </a>

      {/* nav - initially hidden - show in desktop mode */}
      <Nav />



      {/* buttons - initally hidden - show in desktop mode */}
      {user.id ? (
        <div className="hidden lg:flex space-x-4">
          <p className="btn btn-sm text-white hover:text-primary-200 transition">
            Chào, {user.name}
          </p>
          <Button to="/home" className="btn btn-sm btn-primary" onClick={logOut}>
            Đăng xuất
          </Button>
        </div>
      ) : (
        <div className="hidden lg:flex space-x-4">
          <Link
            className="btn btn-sm text-white hover:text-primary-200 transition"
            to="/login"
          >
            {btnLoginText}
          </Link>
          <Link to="/register" className="btn btn-sm btn-primary">
            {btnSignupText}
          </Link>
        </div>
      )}

      {/* nav menu button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
