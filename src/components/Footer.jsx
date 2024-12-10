import logo from "../assets/logo.png"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <img
                src={logo}
                alt="Forensics Agora Logo"
                width={60}
                height={60}
                className="h-20 w-20"
              />
            </div>
            <h2 className="text-2xl font-bold text-center">FORENSIS AGORA-2025</h2>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-3">
            <h3 className="text-xl text-center font-bold">NEWSTELLER</h3>
            <div className="flex max-w-md justify-center gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-gray-100 p-2"
              />
              <button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 p-4 text-black">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Quick Links & Contact Section */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xl font-bold md:text-right">QUICK LINKS</h3>
              <nav className="flex flex-col md:text-right space-y-2">
                <a href="/" className="hover:text-[#FF8C00] transition-colors">
                  Home
                </a>
                <a href="/about" className="hover:text-[#FF8C00] transition-colors">
                  About Us
                </a>
                <a href="/sponsors" className="hover:text-[#FF8C00] transition-colors">
                  Sponsors
                </a>
                <a href="/team" className="hover:text-[#FF8C00] transition-colors">
                  Our Team
                </a>
                <NavLink to="/contact" className="hover:text-[#FF8C00] transition-colors">
                  Contact Us
                </NavLink>
              </nav>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#FF8C00]">CONTACT US</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#FF8C00] transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-[#FF8C00] transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-[#FF8C00] transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-[#FF8C00] transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

