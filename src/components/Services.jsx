import Savings from '../assets/savings.svg';

function Services() {
  return (
    <div className='px-5 lg:px-[15%] py-[5vh] lg:py-[10vh] text-center'>
      <h1 className='text-2xl font-bold text-center'>OUR SERVICES</h1>
      <div className='flex justify-center w-[100%] my-3'>
        <span className='bg-secondary h-2 w-[150px]'></span>
      </div>
      <p className='mt-12 text-center'>
        Empowering Your Financial Future, One Investment at a Time
      </p>
      <div className='flex gap-24 mt-24 flex-col lg:flex-row'>
        <div className='w-[100%] lg:w-[33.3%] flex flex-col items-center gap-5'>
          <img src={Savings} alt='' className='w-[50%]' />
          <h2 className='text-xl font-bold mt-10'>Portfolio Management</h2>
          <p className='w-[75%] lg:w-[100%]'>
            Our investment company offers comprehensive portfolio management
            services tailored to your financial objectives and risk tolerance.
            Our expert advisors carefully curate diversified portfolios,
            actively monitor market trends, and make strategic adjustments to
            maximize returns while managing risk effectively.
          </p>
        </div>
        <div className='w-[100%] lg:w-[33.3%] flex flex-col items-center gap-5'>
          <img src={Savings} alt='' className='w-[50%]' />
          <h2 className='text-xl font-bold mt-10'>Investment Advisory</h2>
          <p className='w-[75%] lg:w-[100%]'>
            With our investment advisory services, you gain access to expert
            insights and recommendations from our seasoned financial advisors.
            We provide in-depth analysis of various investment opportunities,
            market trends, and economic developments, helping you make informed
            decisions to achieve your financial goals.
          </p>
        </div>
        <div className='w-[100%] lg:w-[33.3%] flex flex-col items-center gap-5'>
          <img src={Savings} alt='' className='w-[50%]' />
          <h2 className='text-xl font-bold mt-10'>Retirement Planning</h2>
          <p className='w-[75%] lg:w-[100%]'>
            Secure your future with our specialized retirement planning
            services. Our team assists you in crafting a robust retirement
            strategy that considers your unique circumstances, projected
            expenses, and desired lifestyle. Whether it&apos;s setting up
            retirement accounts, managing assets, or optimizing tax efficiency,
            we&apos;ll help ensure your retirement years are financially
            stress-free and rewarding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
