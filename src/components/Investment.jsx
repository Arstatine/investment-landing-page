import Pending from '../assets/pending.svg';

function Investment() {
  return (
    <div className='px-5 lg:px-[15%] py-[5vh] lg:py-[10vh] text-center'>
      <h1 className='text-2xl font-bold text-center'>KNOW ABOUT INVESTMENT</h1>
      <div className='flex justify-center w-[100%] my-3'>
        <span className='bg-secondary h-2 w-[150px]'></span>
      </div>
      <div className='flex gap-5 mt-24 items-center flex-col lg:flex-row text-start'>
        <div className='w-[100%] lg:w-[33.3%]'>
          <div className='py-5'>
            <h2 className='font-bold text-xl pb-3'>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis repudiandae dolor fugiat, sequi aperiam sapiente saepe
              dolores similique sit ullam asperiores est odit odio fugit,
              laboriosam nihil, sint quam.
            </p>
          </div>
          <div className='py-5'>
            <h2 className='font-bold text-xl pb-3'>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis repudiandae dolor fugiat, sequi aperiam sapiente saepe
              dolores similique sit ullam asperiores est odit odio fugit,
              laboriosam nihil, sint quam.
            </p>
          </div>
          <div className='py-5'>
            <h2 className='font-bold text-xl pb-3'>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis repudiandae dolor fugiat, sequi aperiam sapiente saepe
              dolores similique sit ullam asperiores est odit odio fugit,
              laboriosam nihil, sint quam.
            </p>
          </div>
        </div>
        <div className='w-[50%] lg:w-[33.3%]'>
          <img src={Pending} alt='What' />
        </div>
        <div className='text-end w-[100%] lg:w-[33.3%]'>
          <div className='py-5'>
            <h2 className='font-bold text-xl pb-3'>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis repudiandae dolor fugiat, sequi aperiam sapiente saepe
              dolores similique sit ullam asperiores est odit odio fugit,
              laboriosam nihil, sint quam.
            </p>
          </div>
          <div className='py-5'>
            <h2 className='font-bold text-xl pb-3'>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis repudiandae dolor fugiat, sequi aperiam sapiente saepe
              dolores similique sit ullam asperiores est odit odio fugit,
              laboriosam nihil, sint quam.
            </p>
          </div>
          <div className='py-5'>
            <h2 className='font-bold text-xl pb-3'>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis repudiandae dolor fugiat, sequi aperiam sapiente saepe
              dolores similique sit ullam asperiores est odit odio fugit,
              laboriosam nihil, sint quam.
            </p>
          </div>
        </div>
      </div>
      <div className='flex mt-[100px] flex-col lg:flex-row items-center gap-10 text-start'>
        <div className='w-[100%] lg:w-[50%] flex flex-col gap-5'>
          <h2 className='text-xl w-[100%] lg:w-[90%]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
            nesciunt.
          </h2>
          <p className='w-[100%] lg:w-[90%]'>Lorem Ipsum, lorem lorem ipsum.</p>
          <div className='w-[100%] lg:w-[90%] mt-5'>
            <div className='bg-slate-300 relative h-[10px] w-full rounded-2xl'>
              <div className='bg-primary absolute top-0 left-0 h-full w-[55%] rounded-2xl'>
                <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                  <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                  55%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] lg:w-[50%] shadow-[2px_2px_15px_-1px_rgba(0,0,0,0.1)] flex flex-wrap'>
          <div className='w-[100%] lg:w-[50%] p-5'>
            <h2>Lorem Ipsum</h2>
            <p className='text-secondary'>$2,000</p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5'>
            <h2>Lorem Ipsum</h2>
            <p className='text-secondary'>$2,000</p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5'>
            <h2>Lorem Ipsum</h2>
            <p className='text-secondary'>$2,000</p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 bg-secondary'>
            <h2 className='text-white'>Lorem Ipsum</h2>
            <p className='text-white'>$2,000</p>
          </div>
        </div>
      </div>
      <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full mt-[50px]'>
        Invest Now
      </button>
    </div>
  );
}

export default Investment;
