import React, { useState } from 'react'
import {Search} from "lucide-react"
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <img
                src={logo}
                alt="Forensis Logo"
                width={40}
                height={40}
                className="h-10 w-10 cursor-pointer"
                onClick={() => navigate("/")}
                loading='lazy'
              />
              <div className="text-lg font-bold cursor-pointer" onClick={() => navigate("/")}>
                FORENSIS
                <br />
                AGORA-2025
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                {["Home", "About", "Sponsors", "Our Team", "Contact"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to="/about"
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
  )
}

export default Navbar