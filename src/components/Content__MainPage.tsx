import React from 'react';
import gemLogo from '../assets/main-gem.png'
import { Link } from 'react-router-dom';

interface ContentProps { }

const Content: React.FC<ContentProps> = ({ }) => {
  return (
    <div className="lg:col-span-11 lg:px-32">
      <div className='mt-20 md:block hidden'>
        <p className='text-4xl text-center -mb-12 font-semibold tracking-[1rem] text-[#ffef8d]'>ceylon gem collective </p>
        <img src={gemLogo} className='mx-auto' />
      </div>
      <div className='rounded-xl mx-auto my-24 md:my-0 bg-white w-3/4 md:absolute bottom-0'>
        <div>
          <div className="lg:absolute top-12 lg:right-12 flex justify-end p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-12 w-6 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='flex lg:flex-nowrap gap-x-12 flex-wrap lg:gap-x-24 md:pb-[13rem] lg:py-[15rem] justify-center'>
            <div>
              <h3 className='uppercase font-semibold text-[10px] lg:text-xl text-center'>20.1 carat natural saphire</h3>
              <Link to={'/product'}>
                <img src={gemLogo} className='lg:w-60 w-32 mx-auto' />
              </Link>
            </div>
            <div>
              <h3 className='uppercase font-semibold text-[10px] lg:text-xl text-center'>20.1 carat natural saphire</h3>
              <Link to={'/product'}>
                <img src={gemLogo} className='lg:w-60 w-32 mx-auto' />
              </Link>
            </div>
            <div>
              <h3 className='uppercase font-semibold text-[10px] lg:text-xl text-center'>20.1 carat natural saphire</h3>
              <Link to={'/product'}>
                <img src={gemLogo} className='lg:w-60 w-32 mx-auto' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
