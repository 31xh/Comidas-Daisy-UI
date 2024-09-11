import { useState } from 'react'
import logo1 from '../assets/logo1.png'
import { motion } from 'framer-motion'; // Importa motion deframer-motion
import { Link } from 'react-router-dom';
import Lista from './Lista';


const Header = () => {
    const [visibleSearch, setVisibleSearch] = useState(false)
    const toggleSearch = () => {
        setVisibleSearch(!visibleSearch)
    }

    return (
        <div>
            <div className="navbar mt-5 mx-5 bg-base-100 border-2 border-gray-100 rounded-3xl shadow-lg h-10">
                <div className="navbar-start mx-5">
                    <div className="dropdown">
                        <img src={logo1} className='h-10 w-auto ' alt="" />
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='fontfamily21'><a>Inicio</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='fontfamily21'><Link to={'/inicio'}>Inicio</Link></li>
                        <li>
                            <details>
                                <summary className='fontfamily21'>Categorias</summary>
                                <ul className="p-2">
                                    <Lista/>
                                </ul>
                            </details>
                        </li>
                        <li className='fontfamily21'><Link to={'/comidas'}>Comidas</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {visibleSearch && (
                        <motion.form
                        className="flex items-center mr-2"
                        initial={{ opacity: 0, x: -20 }} // Estado inicial
                        animate={{ opacity: 1, x: 0 }} // Estado final
                        exit={{ opacity: 0, x: -20 }} // Estado al salir
                        transition={{ duration: 0.3 }} // Duración de la animación
                      >
                        <input 
                          type="text" 
                          placeholder="Buscar..." 
                          className="input input-bordered" 
                        />
                        {/* Botón de búsqueda eliminado */}
                      </motion.form>
                    )}
                    <button className="btn btn-ghost btn-circle" onClick={toggleSearch}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
