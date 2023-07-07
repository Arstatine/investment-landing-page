import PartnershipSVG from '../assets/partnership.svg';
import Savings from '../assets/savings.svg';

function Partnership() {
  return (
    <div className='px-10 lg:px-[15%] py-[5vh] lg:py-[10vh] bg-slate-100 text-center'>
      <h1 className='text-2xl font-bold text-center'>KNOW ABOUT PARTNERSHIP</h1>
      <div className='flex justify-center w-[100%] my-3'>
        <span className='bg-secondary h-2 w-[150px]'></span>
      </div>
      <p className='mt-12 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aliquid?
      </p>
      <div className='py-12 flex items-center gap-10 text-start flex-col lg:flex-row'>
        <div className='w-[80%] lg:w-[50%] text-center flex justify-center'>
          <img src={PartnershipSVG} alt='Partnership' className='w-[60%]' />
        </div>
        <div className='flex flex-wrap w-[100%] lg:w-[50%] text-center lg:text-start'>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
              eos!
            </p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
              eos!
            </p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
              eos!
            </p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
              eos!
            </p>
          </div>
        </div>
      </div>

      <button className='bg-secondary py-3 px-5 text-white text-xl rounded-full mt-[50px]'>
        Make Partnership
      </button>
    </div>
  );
}

export default Partnership;
