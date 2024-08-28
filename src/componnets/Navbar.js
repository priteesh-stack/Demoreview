import React, { useRef } from 'react';
import { useNavigate,} from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const navbarRef = useRef();
  const navigate = useNavigate();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };

  return (
    <header className='header'>
      <a href="/" className='logo'>
        <img src={Logo} alt='Logo' />
      </a>
      <nav className='navbar' ref={navbarRef}>
        <a onClick={() => navigate('/')}>HOME</a>
        <a onClick={() => navigate('/about')}>ABOUT US</a>
        <a onClick={() => navigate('/campaigns')}>CAMPAIGNS</a>
        <a href="/locate#location-pages">LOCATE US</a>
        <a onClick={() => navigate('/order')}>ORDER NOW</a>
      </nav>
      <div className='icons'>
        <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
      </div>
    </header>
  );
}

export default Navbar;


// import React, {useRef} from 'react'
// import Logo from '../assets/images/Logo.png';
// import {useNavgate, useNavigate} from 'react-router-dom'

// const Navbar = () => {
//   const navbarRef = useRef();
//   const navigate = useNavigate();
// //   const searchRef = useRef();
// //   const cartRef = useRef();
//   const navbarHandler = () => {
//     navbarRef.current.classList.toggle("active");
//     // searchRef.current.classList.remove("active");
//     // cartRef.current.classList.remove("active");
//   };

// //   const searchHandler = () => {
// //     searchRef.current.classList.toggle("active");
// //     navbarRef.current.classList.remove("active");
// //     cartRef.current.classList.remove("active");
// //   };
// //    const cartHandler = () => {
// //     cartRef.current.classList.toggle("active");
// //     searchRef.current.classList.remove("active");
// //     navbarRef.current.classList.remove("active");
// //   };
//   return (
//     <>
//       <header className='header'>
//         <a href="#" className='logo'>
//             <img src={Logo} alt='something wrong'/>
//         </a>
//         <nav className='navbar' ref={navbarRef}>
//             <a onClick={()=>navigate('/home')}>HOME</a>
//             <a href='#about'>ABOUT US</a>
//             <a href='#blogs'>CAMPAINGS</a>
//             <a href='#locate'>LOCATE US</a>
//             <a href='#order'>ORDER NOW</a>
//         </nav>
//         <div className='icons'>
//             {/* <div className='fas fa-search' onClick={searchHandler}></div>
//             <div className='fas fa-shopping-cart'></div> */}
//              <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
//         </div>
//         {/* <div className="search-form" refr={searchRef}>
//           <input type="search" id="search-box" placeholder="search here..." />
//           <label htmlFor="search-box" className="fas fa-search"></label>
//         </div> */}
//       </header>
//     </>
//   )
// }

// export default Navbar
