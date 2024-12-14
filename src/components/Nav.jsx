import { useNavigate } from "react-router-dom";
import { hamburger, x } from "../assets/icons";
import headerLogo from "../assets/logo.png";
import { navLinks } from "../constants";
import { ShopContext } from "../context/ShopContext";
import { useContext, useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shopContextx = useContext(ShopContext);
  const { cartItems } = shopContextx;

  const redirectHandler = (val) => {
    window.scrollTo(0,0);
    setIsMenuOpen(false);    
    navigate(val);
  }

  return (
    <header className='padding-x fixed top-0 left-0 z-50 w-full bg-white mb-20'>
      <nav className='[min-400px]:bg-white  flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width="330px"
            height="120px"
            className='m-0 sm:w-[329px] sm:h-[120px] w-[200px] h-[100px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}
              className='font-montserrat leading-normal text-lg text-slate-gray cursor-pointer select-none	'
              onClick={() => redirectHandler(item.value)}>
              {item.label !== "Cart" ? <span>{item.label}</span> : item.label === "Cart" && cartItems?.length === 0 ? item.label :
                <span>Cart {<span className="bg-coral-red border-coral-red border-2 text-rose-100 rounded-full p-1">{cartItems.length}</span>}</span>}
            </li>
          ))}


        </ul>
        <div className='lg:hidden max-md:block' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen && <img src={x} alt='hamburger icon' width={25} height={25} />}
          {!isMenuOpen && <img src={hamburger} alt='hamburger icon' width={50} height={50} />}
        </div>
      </nav>

      {/* Mobile Menu - shown when isMenuOpen is true max-lg:block ${isMenuOpen ? 'block' : 'hidden'}*/}
      <div className={`${isMenuOpen ? 'block' : 'hidden'}  lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-20 p-4`}>
        <ul className='flex flex-col items-center gap-6 z-20'>
          {navLinks.map((item) => (
            <li key={item.label}
              className='font-montserrat  leading-normal font-semibold text-lg p-5 text-black cursor-pointer select-none z-20'
              onClick={() => redirectHandler(item.value)}>
              {item.label !== "Cart" ? <span>{item.label}</span> : item.label === "Cart" && cartItems?.length === 0 ? item.label :
                <span>Cart {<span className="bg-coral-red border-coral-red border-2 text-rose-100 rounded-full p-1">{cartItems.length}</span>}</span>}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
