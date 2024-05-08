const Newsletter = () => {
  return (
    <div className='wfull py-16 text-gray-600 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>
            Stay updated with us
          </h1>
          <p>We will share more details to you via email notifications</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-zinc-400 px-4 border border-gray-300'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-orange-200 text-zinc- text-sm sm:text-base rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Us
            </button>
          </div>
          <p className='text-zinc-700 font-medium'>
            We value the protection of your data, Read our{" "}
            <span className='text-zinc-400'>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
