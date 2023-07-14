import Savings from '../assets/savings.svg';

function Services() {
  return (
    <div className='px-5 lg:px-[15%] py-[5vh] lg:py-[10vh] text-center'>
      <h1 className='text-2xl font-bold text-center'>OUR SERVICES</h1>
      <div className='flex justify-center w-[100%] my-3'>
        <span className='bg-secondary h-2 w-[150px]'></span>
      </div>
      <p className='mt-12 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aliquid?
      </p>
      <div className='flex gap-24 mt-24 flex-col lg:flex-row'>
        <div className='w-[100%] lg:w-[33.3%] flex flex-col items-center gap-5'>
          <img src={Savings} alt='' className='w-[50%]' />
          <h2 className='text-xl font-bold mt-10'>Lorem Ipsums</h2>
          <p className='w-[75%] lg:w-[100%]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            nemo corrupti autem eius tempora repudiandae?
          </p>
        </div>
        <div className='w-[100%] lg:w-[33.3%] flex flex-col items-center gap-5'>
          <img src={Savings} alt='' className='w-[50%]' />
          <h2 className='text-xl font-bold mt-10'>Lorem Ipsums</h2>
          <p className='w-[75%] lg:w-[100%]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            nemo corrupti autem eius tempora repudiandae?
          </p>
        </div>
        <div className='w-[100%] lg:w-[33.3%] flex flex-col items-center gap-5'>
          <img src={Savings} alt='' className='w-[50%]' />
          <h2 className='text-xl font-bold mt-10'>Lorem Ipsums</h2>
          <p className='w-[75%] lg:w-[100%]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            nemo corrupti autem eius tempora repudiandae?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
