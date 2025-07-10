// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../../../assets/images/dupo-logo-line.png'; // Kiểm tra đường dẫn

// function FNavigation() {
//     const [active, setActive] = useState(false);

//     const handleClick = () => {
//         setActive(!active);
//     };

//     return (
//         <div className="fixed top-0 w-full bg-white shadow-md z-50">
//             <div className="container mx-auto flex justify-between items-center p-4">
//                 {/* Nav Left - Logo */}
//                 <div className="nav-left">
//                     <NavLink to="/" className="flex items-center">
//                         <img className="h-10" src={logo} alt="duPO Logo" />
//                     </NavLink>
//                 </div>

//                 {/* Nav Right - Menu */}
//                 <div className="nav-right flex items-center">
//                     {/* Desktop Menu */}
//                     <ul className="hidden md:flex space-x-6">
//                         <li>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             >
//                                 HOME
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/works"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             >
//                                 MY WORK
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/about"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             >
//                                 ABOUT
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/contact"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             >
//                                 CONTACT
//                             </NavLink>
//                         </li>
//                     </ul>

//                     {/* Mobile Menu Toggle Button */}
//                     <div className="md:hidden cursor-pointer" onClick={handleClick}>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6 text-gray-700"
//                             viewBox="0 0 24 24"
//                             strokeWidth="2"
//                             stroke="currentColor"
//                             fill="none"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         >
//                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                             <line x1="4" y1="6" x2="20" y2="6" />
//                             <line x1="4" y1="12" x2="20" y2="12" />
//                             <line x1="4" y1="18" x2="20" y2="18" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`md:hidden bg-white ${active ? 'block' : 'hidden'}`}>
//                 <ul className="flex flex-col items-center py-4">
//                     <li>
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) =>
//                                 isActive ? 'block py-2 text-blue-600 font-semibold' : 'block py-2 text-gray-700 hover:text-blue-600'
//                             }
//                             onClick={() => setActive(false)}
//                         >
//                             HOME
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/works"
//                             className={({ isActive }) =>
//                                 isActive ? 'block py-2 text-blue-600 font-semibold' : 'block py-2 text-gray-700 hover:text-blue-600'
//                             }
//                             onClick={() => setActive(false)}
//                         >
//                             MY WORK
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/about"
//                             className={({ isActive }) =>
//                                 isActive ? 'block py-2 text-blue-600 font-semibold' : 'block py-2 text-gray-700 hover:text-blue-600'
//                             }
//                             onClick={() => setActive(false)}
//                         >
//                             ABOUT
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/contact"
//                             className={({ isActive }) =>
//                                 isActive ? 'block py-2 text-blue-600 font-semibold' : 'block py-2 text-gray-700 hover:text-blue-600'
//                             }
//                             onClick={() => setActive(false)}
//                         >
//                             CONTACT
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default FNavigation;