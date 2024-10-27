import React from 'react';
import '../assets/nav.css';

function Nav() {
  return (
    <nav className='navbar flex justify-between p-4 items-center overflow-hidden flex-wrap'>
      {/* Left side for logo */}
      <div className="left">
        <div className='logo h-[30px] w-[90px] my-auto mt-2 ml-4'>
          <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M68.8751 0L64.3906 23.4146H87.711L92.1955 0H68.8751ZM72.5179 4.42392H86.8522L84.0623 18.9907H69.728L72.5179 4.42392Z" fill="#F3652B"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M60.0001 0L55.6094 23.4146H59.9992L64.3899 0H60.0001Z" fill="#F3652B"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.3824 0L0.654522 19.9761L0 23.4146H3.41853L21.7987 7.94855L18.8361 23.4146H23.3197L27.8049 0H24.3824Z" fill="#F3652B"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M115.516 0L113.526 10.3871L117.148 14.8895L120 0H115.516ZM96.6798 0L92.1953 23.4146H96.6815L99.755 7.36298L112.711 23.4146H115.516L116.069 20.5482L99.4841 0H96.6798Z" fill="#F3652B"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M32.2893 0L31.4419 4.42401H46.9283L28.4682 19.9674L27.8047 23.4146H51.125L51.9724 18.9906H36.4861L54.9502 3.44385L55.6096 0H32.2893Z" fill="#F3652B"></path>
          </svg>
        </div>
      </div> {/* LOGO */}

      {/* Right side for items */}
      <div className="right ">
        <a href="index.html" className="home">Home</a>
        <a href="#">Courses</a>
        <a href="#"  className="abt">About</a>
        <a href="#" className="contactUs" onclick="console.log('contact-us clicked')">Contact Us</a>
        <div className="search">
            <input type="text" placeholder="Search..."></input>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div> {/* search */}
    </div>

    {/*  Cart Button is now outside of the .right div  */}
    <button data-quantity="0" className="btn-cart">
        <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
        </svg>
        <span className="quantity"></span>
    </button>
    </nav>
  );
}


export default Nav;
