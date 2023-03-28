import React, { useState } from 'react'

import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { rutasA } from '../../../../assets/json/routes'

export default function Navbar () {
  const navigate = useNavigate()

  // Para verificar en que boton genero nos encontramos
  const location = useLocation()
  const generoRutaActual = location.pathname.split('/')[1]

  // Existe un usuario
  const user = { name: 'user', role: 'regular' }
  // const user = null

  // mostrar menu mas
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className=' fixed w-full top-0 z-10 backdrop-blur-sm bg-white/90 shadow '>
        <div className=' flex justify-between items-center font-Modern px-2 py-3 sm:px-4 md:px-10 lg:px-16 '>
          <div className=' flex items-center'>
            <img
              onClick={() => navigate('/')}
              className=' w-16 mr-3 md:mr-5 lg:mr-10 sm:w-20 cursor-pointer'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png'
            />
            <div>
              {
                rutasA.map((e, i) => (
                  <NavLink
                    to={e.ruta} key={i}
                    className={` text-xs px-2 py-1 rounded sm:mx-1 md:mx-2 sm:text-sm uppercase font-bold ${e.name.toLowerCase() === generoRutaActual ? 'text-white bg-[#ff0058]' : ''}`}
                  >
                    <span>
                      {e.name}
                    </span>
                  </NavLink>
                ))
              }
            </div>
          </div>

          {/* entrar favoritos bolsa */}
          <div className=' flex items-center'>
            <div className='hidden relative sm:block'>
              <div className=' flex'>
                {!user &&
                  <button className=' px-1 md:px-2 py-1 rounded mr-1 md:mr-2 flex my-auto items-center hover:bg-gray-100 '>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className=' w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                      </svg>
                    </div>
                    <span className=' md:ml-2'>Entrar</span>
                  </button>}

                <NavLink to='/favoritos' className=' px-1 md:px-2 py-1 rounded mr-1 md:mr-2 flex my-auto items-center hover:underline'>
                  <div>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
                    </svg>
                  </div>
                  <span className=' md:ml-2 hidden lg:block'>Favoritos</span>
                </NavLink>
              </div>
            </div>

            <button className=' px-1 md:px-2 py-1 rounded mr-1 md:mr-2 flex my-auto items-center hover:bg-gray-100 '>
              <div>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 sm:w-6 sm:h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
                </svg>
              </div>
              <span className=' hidden sm:block text-sm ml-1 sm:text-base md:ml-2'>Bolsa</span>
            </button>

            <div className='relative'>
              <button onClick={() => setShowMenu(true)} className=' flex items-center px-1 md:px-2 py-1 rounded my-auto hover:bg-gray-100'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 sm:w-6 sm:h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                </svg>
              </button>
              {showMenu && <button onClick={() => setShowMenu(false)} className=' fixed inset-0 bg-black/20 h-screen w-screen' />}
              {showMenu &&
                <div className=' absolute right-0 mt-4 w-60 bg-white rounded-md shadow-xl overflow-hidden'>
                  {user &&
                    <div className=' px-3 py-4 bg-gray-200'>
                      <img className=' rounded-full w-11 h-11 object-cover' width={40} height={40} src='https://www.duplos.cl/wp-content/uploads/2022/12/321329334_1307854966614745_2411247992703589897_n.jpg' alt='' />
                      <p className=' font-bold text-lg'>Emma Myers</p>
                      <div className=' flex justify-between items-center'>
                        <span className=' text-sm text-ellipsis w-5/6 overflow-hidden'>olivia_hold@email.com</span>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
                            <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                          </svg>
                        </button>
                      </div>
                    </div>}
                  {user &&
                    <Link to='/favoritos' className=' flex items-center w-full p-3 hover:bg-slate-300'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 mr-3'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z' />
                      </svg>
                      Favoritos
                    </Link>}
                  <Link to='/ayuda' className=' flex items-center w-full p-3 hover:bg-slate-300'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 mr-3'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z' />
                    </svg>
                    Ayuda
                  </Link>
                  <hr />
                  {user &&
                    <button className=' flex items-center w-full p-3 hover:bg-slate-300'>
                      <div>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 mr-3'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75' />
                        </svg>
                      </div>
                      Cerrar Sesion
                    </button>}
                </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
