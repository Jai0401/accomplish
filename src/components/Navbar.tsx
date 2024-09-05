import logoImage from '../assets/images/logosaas.png';
import MenuBars from '../assets/icons/menu.svg';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className="bg-black px-4">
      <div className='py-4 flex items-center justify-between'>
          <Image src={logoImage} alt='logo' className='h-12 w-12'></Image>
          <div className='border border-white border-opacity-30 rounded-lg h-10 w-10 justify-center inline-flex items-center sm:hidden'>
            <MenuBars className='text-white' />
          </div>
          <nav className='hidden sm:flex space-x-6 items-center'>
            <a href='#' className='text-white/60 hover:text-white/100 transition'>About</a>
            <a href='#' className='text-white/60 hover:text-white/100 transition'>Features</a>
            <a href='#' className='text-white/60 hover:text-white/100 transition'>Updates</a>
            <a href='#' className='text-white/60 hover:text-white/100 transition'>Help</a>
            <a href='#' className='text-white/60 hover:text-white/100 transition'>Customers</a>
            <button className='bg-white text-black px-4 py-2 rounded-lg font-medium'>Get Started</button>
          </nav>
      </div>
    </div>
  );
};
