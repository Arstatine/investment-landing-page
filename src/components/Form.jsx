function Form() {
  return (
    <div className='px-5 lg:px-[15%] py-[5vh] lg:py-[10vh] pb-[10vh] lg:pb-[15vh]'>
      <h1 className='text-2xl font-bold text-center'>GET IN TOUCH</h1>
      <div className='flex justify-center w-[100%] my-3'>
        <span className='bg-secondary h-2 w-[150px]'></span>
      </div>
      <form action='' className='py-10 flex flex-col items-center'>
        <div className='flex gap-5 flex-col lg:flex-row w-[100%] lg:w-[50%]'>
          <div className='w-[100%] lg:w-[50%]'>
            <label htmlFor='fname'>First name</label>
            <input
              name='fname'
              id='fname'
              type='text'
              className='block w-full rounded-md border-0 px-3.5 py-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-[#00c499] sm:text-sm sm:leading-6'
            />
          </div>
          <div className='w-[100%] lg:w-[50%]'>
            <label htmlFor='lname'>Last name</label>
            <input
              name='lname'
              id='lname'
              type='text'
              className='block w-full rounded-md border-0 px-3.5 py-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-[#00c499] sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='w-[100%] lg:w-[50%]  mt-8'>
          <label htmlFor='company'>Company</label>
          <input
            name='company'
            id='company'
            type='text'
            className='block w-full rounded-md border-0 px-3.5 py-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-[#00c499] sm:text-sm sm:leading-6'
          />
        </div>
        <div className='w-[100%] lg:w-[50%] mt-8'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            id='email'
            type='email'
            className='block w-full rounded-md border-0 px-3.5 py-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-[#00c499] sm:text-sm sm:leading-6'
          />
        </div>
        <div className='w-[100%] lg:w-[50%] mt-8'>
          <label htmlFor='message'>First name</label>
          <textarea
            name='message'
            id='message'
            rows='4'
            className='block w-full rounded-md border-0 px-3.5 py-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6'
          ></textarea>
        </div>
        <button className='bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-md w-[100%] lg:w-[50%] rounded-full mt-8'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
