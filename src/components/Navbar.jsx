import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useWindowSize } from '@uidotdev/usehooks';
import Logo from '../assets/growth.png';

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [navigation, setNavigation] = useState('none');
  const size = useWindowSize();

  const onToggleMenu = () => {
    if (isClicked) {
      setNavigation('none');
    } else {
      setNavigation('flex');
    }

    setIsClicked(!isClicked);
  };

  return (
    <nav className='flex items-center px-10 lg:px-[15%] bg-primary py-10 flex-wrap'>
      <a href='#' className='p-2 mr-4 inline-flex items-center'>
        <img src={Logo} alt='LOGO' width='30' height='30' />
        <span className='px-5 text-xl text-white font-bold uppercase tracking-wide hidden xs:block'>
          BRANDNAME
        </span>
      </a>
      <button
        className='text-white inline-flex p-3 hover:bg-blue-700 lg:hidden ml-auto hover:text-white outline-none nav-toggler rounded-lg'
        onClick={onToggleMenu}
      >
        <Icon icon='jam:menu' width='40' height='40' />
      </button>

      {size.width > 1024 ? (
        // WEB VIEW
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto text-lg'>
            <a
              href='/'
              className='lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-slate-200 items-center justify-center hover:bg-blue-700 hover:text-white'
            >
              <span>Home</span>
            </a>
            <a
              href='/contact'
              className='lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-slate-200 items-center justify-center hover:bg-blue-700 hover:text-white'
            >
              <span>Contact</span>
            </a>
            <a
              href='/about'
              className='lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-slate-200 items-center justify-center hover:bg-blue-700 hover:text-white'
            >
              <span>About</span>
            </a>
          </div>
        </div>
      ) : (
        // MOBILE VIEW
        <div
          className='!lg:hidden w-full justify-start items-center'
          style={{ display: navigation }}
        >
          <div className='bg-blue-600 left-0 bottom-0 p-5 z-[99] h-auto lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto  text-lg'>
            <a
              href='/'
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-200 items-center justify-center hover:bg-blue-700 hover:text-white'
            >
              <span>Home</span>
            </a>
            <a
              href='/contact'
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-200 items-center justify-center hover:bg-blue-700 hover:text-white'
            >
              <span>Contact</span>
            </a>
            <a
              href='/about'
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-200 items-center justify-center hover:bg-blue-700 hover:text-white'
            >
              <span>About</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
