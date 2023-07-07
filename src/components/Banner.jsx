import Invest from '../assets/invest.svg';

function Banner() {
  return (
    <div className='bg-primary flex items-center justify-between flex-col lg:flex-row px-10 lg:px-[15%] pt-[5vh] lg:pt-[15vh] pb-[15vh] lg:pb-[25vh] shapedividers_1'>
      <div className='w-[100%] lg:w-[50%] flex flex-col gap-10'>
        <h1 className='text-3xl lg:text-7xl text-white font-black'>
          INVEST, GROW AND MAKE MONEY
        </h1>
        <p className='text-slate-300 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque
          deserunt omnis est a nobis eos pariatur magnam necessitatibus!
          Praesentium quod deserunt perspiciatis sequi nemo facilis voluptatibus
          similique eligendi in!
        </p>
        <div className='flex  gap-5 sm:gap-10 flex-col sm:flex-row'>
          <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full'>
            Start Investment
          </button>
          <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full'>
            Start Partnership
          </button>
        </div>
      </div>
      <div
        className='w-[100%] mt-10 lg:w-[40%] p-5 bg-accent'
        style={{ borderRadius: '150% 80% 150% 60%' }}
      >
        <img src={Invest} alt='Invest' className='w-[80%] lg:w-[100%]' />
      </div>
    </div>
  );
}

export default Banner;
