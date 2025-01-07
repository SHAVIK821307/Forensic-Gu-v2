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
              <li >
                    <NavLink
                      to='/'
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      Home
                    </NavLink>
                  </li>
              <li >
                    <a
                      href='#about'
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
              <li >
                    <NavLink
                      to='/gallery'
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      Gallery
                    </NavLink>
                  </li>
              <li >
                    <a
                      href='#ourteam'
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      Our Team
                    </a>
                  </li>
                  <li >
                    <NavLink
                      to="/contact"
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      Contact
                    </NavLink>
                  </li>
              </ul>
            </nav>
            <a href="#registration" className="bg-[#40bfff] hover:bg-[#40bfff]/80 text-white px-4 md:px-8 py-2 text-xs sm:text-sm rounded-full font-medium transition-colors inline-block mb-1">
                  Download Brochure
                </a>
          </div>
        </div>
      </header>
  )
}

export default Navbar