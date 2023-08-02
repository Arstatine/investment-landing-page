import Logo from '../assets/growth.png';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div>
      <div className='bg-primary px-5 lg:px-[15%] pt-[2.5vh] lg:pt-[5vh] pb-[5vh] lg:pb-[10vh] flex items-center justify-center flex-col lg:flex-row'>
        <div className='w-[100%] lg:w-[50%] py-5  text-center lg:text-start'>
          <h1 className='text-2xl text-white'>
            Invest Now and Make Partnership
          </h1>
        </div>
        <div className='w-[100%] lg:w-[50%] flex justify-center lg:justify-start gap-5 sm:gap-10 flex-col sm:flex-row  p-5'>
          <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full'>
            Start Investment
          </button>
          <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full'>
            Start Partnership
          </button>
        </div>
      </div>
      <div className='bg-accent px-10 lg:px-[15%] py-[5vh] lg:py-[10vh] flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center'>
        <div className='w-[100%] lg:w-[50%] text-center lg:text-start'>
          <div className='flex items-center gap-3 pb-5 justify-center lg:justify-start'>
            <img src={Logo} alt='' width='30' height='30' />
            <span className='text-2xl font-bold text-white'>IN-BESTMENT</span>
          </div>
          <p className='text-white'>
            Copyright © 2023 IN-BESTMENT. All rights reserved.
          </p>
        </div>
        <div className='flex lg:hidden justify-center w-[100%]'>
          <span className='bg-secondary h-1 w-[20%]'></span>
        </div>
        <div className='w-[100%] lg:w-[50%] text-center lg:text-end'>
          <h2 className='text-white text-lg pb-5'>Follow us on</h2>
          <div className='flex justify-center lg:justify-end gap-3'>
            <a href='/'>
              <Icon
                icon='ic:baseline-facebook'
                className='text-white h-[30px] w-[30px]'
              />
            </a>
            <a href='/'>
              <Icon
                icon='mdi:twitter'
                className='text-white h-[30px] w-[30px]'
              />
            </a>
            <a href='/'>
              <Icon
                icon='mdi:linkedin'
                className='text-white h-[30px] w-[30px]'
              />
            </a>
            <a href='/'>
              <Icon
                icon='mdi:instagram'
                className='text-white h-[30px] w-[30px]'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
