import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-2 text-gray-600 bg-slate-100'>
      <div className='mr-4 pl-4'>
        <h1 className='w-full text-xl sm:text-3xl font-bold text-gray-800'>
          ISAM TRADERS
        </h1>
        <p className='py-4 text-sm sm:text-base'>
          <i>~ We are more than just places to buy vehicles.
          <br />
          We are a gateway to your dreams, where every test drive ignites the
          possibility of a new journey
          <br />
          and every negotiation paves the way for unforgettable adventures on
          the road of life ~</i>
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div className='ml-8'>
          <h6 className='font-medium text-gray-400'>Location</h6>
          <ul>
            <li className='py-2 text-sm'>Isam Traders - Along Ngong Road</li>
            <li className='py-2 text-sm'>Opens from 8AM-6PM : MON-SAT</li>
            <li className='py-2 text-sm'>Call +254 717277693</li>
            <li className='py-2 text-sm'>Nairobi, Kenya</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
          </ul>
        </div>
        <div className='mr-8'>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
