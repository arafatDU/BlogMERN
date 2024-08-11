import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenuSharp, IoClose } from "react-icons/io5";


const navLists = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about-us' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Contact us', path: '/contact-us' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-white py-6 border'>
      <nav className='container mx-auto flex justify-between px-5'>
        <a href="/">
          <img src="/logo.png" alt="Logo" className='h-8' />
        </a>
        <ul className='sm:flex hidden items-center gap-8'>
          {navLists.map((nav, index) => (
            <li key={index}>
              <NavLink
                to={`${nav.path}`}
                className= {({ isActive }) => isActive ? "active" : ""}
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>

        { /* Mobile menu */ }
        <div className='flex items-center sm:hidden'>
          <button 
            onClick={toggleMenu}
          className='flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900'>
            {isMenuOpen ? <IoClose className='size-6' /> : <IoMenuSharp className='size-6' />}
          </button>
        </div>
      </nav>

      {
        isMenuOpen && (
          <ul className='fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm-z-50'>
            {navLists.map((nav, index) => (
              <li key={index} className='px-4 mt-5'>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to={`${nav.path}`}
                  className= {({ isActive }) => isActive ? "active" : ""}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
            <li className='px-4 mt-5'>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )
      }

    </header>
  )
}

export default Navbar
