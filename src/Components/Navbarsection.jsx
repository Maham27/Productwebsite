import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // Lucide icons for hamburger and close

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full bg-transparent font-outfit text-pink-900 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-italic font-outfit font-semibold">SonicPulse</div>

      {/* Desktop Menu */}
     <ul className="hidden md:flex gap-6 text-lg font-semibold text-pink-900">
  <li className="hover:text-orange-800 cursor-pointer">
    <a href="#home">Home</a>
  </li>
  <li className="hover:text-orange-800 cursor-pointer">
    <a href="#about">About</a>
  </li>
  <li className="hover:text-orange-800 cursor-pointer">
    <a href="#contact">Contact</a>
  </li>
  <li className="hover:text-orange-800 cursor-pointer">
    <a href="#buy">Shop Now</a>
  </li>
</ul>


      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full bg-pink-800 bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#home" className="hover:text-orange-800">Home</a>
          <a href="#about" className="hover:text-orange-800">About</a>
          <a href="#contact" className="hover:text-orange-800">Contact</a>
          <a href="#buy" className="hover:text-orange-800">Shop Now</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
