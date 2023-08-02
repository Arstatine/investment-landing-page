import PartnershipSVG from '../assets/partnership.svg';
import Savings from '../assets/savings.svg';

function Partnership() {
  return (
    <div className='px-5 lg:px-[15%] py-[5vh] lg:py-[10vh] bg-slate-100 text-center'>
      <h1 className='text-2xl font-bold text-center'>KNOW ABOUT PARTNERSHIP</h1>
      <div className='flex justify-center w-[100%] my-3'>
        <span className='bg-secondary h-2 w-[150px]'></span>
      </div>
      <p className='mt-12 text-center'>Strength in Unity, Together We Thrive</p>
      <div className='py-12 flex items-center gap-10 text-start flex-col lg:flex-row'>
        <div className='w-[80%] lg:w-[50%] text-center flex justify-center'>
          <img src={PartnershipSVG} alt='Partnership' className='w-[60%]' />
        </div>
        <div className='flex flex-wrap w-[100%] lg:w-[50%] text-center lg:text-start'>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>Expertise and Resources</h2>
            <p>
              Partnering with our investment company gives you access to a pool
              of seasoned professionals, sophisticated resources, and valuable
              expertise to optimize your investment strategy.
            </p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Diversification and Risk Mitigation
            </h2>
            <p>
              We offer diversification across various assets and industries,
              minimizing risk exposure and ensuring a stable investment
              approach.
            </p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Shared Network and Opportunities
            </h2>
            <p>
              Joining forces with us expands your network, granting you access
              to exclusive investment opportunities and potential high-growth
              ventures.
            </p>
          </div>
          <div className='w-[100%] lg:w-[50%] p-5 flex flex-col items-center lg:items-start'>
            <img src={Savings} alt='Partnership' className='w-[40%] py-3' />
            <h2 className='py-3 text-xl font-bold'>
              Scalability and Efficiency
            </h2>
            <p>
              Our streamlined processes and advanced technology enhance
              operational efficiency, allowing you to scale your investment
              activities more effectively.
            </p>
          </div>
        </div>
      </div>

      <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full mt-[50px]'>
        Make Partnership
      </button>
    </div>
  );
}

export default Partnership;
