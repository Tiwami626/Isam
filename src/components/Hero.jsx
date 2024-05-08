import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import backgroundImage from "../assets/car-background.jpg";
import { motion } from "framer-motion";


const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show the text after a short delay (adjust timing as needed)
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Hide the text after 1 minute
    const hideTimeout = setTimeout(() => {
      setShowText(false);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      className='text-white bg-cover sm:bg-cover xl:bg-auto flex-shrink sm:flex-shrink-0 bg-center relative hero-container'
      style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -1 }}>
      <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col'>
        <div className='flex justify-center items-center '>
          <ReactTyped
            className='md:text-4xl sm:text-3xl text-sm font-bold md:pl-4 pl-2 text-zinc-300'
            strings={[
              "Audi",
              "BMW",
              "Honda",
              "Mazda",
              "Mercedes-Benz",
              "Nissan",
              "Subaru",
              "Suzuki",
              "Toyota",
              "Volkswagen",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div
          className={`absolute py-10 px-8 md:left-4 text-xl md:text-4xl sm:text-2xl font-bold md:py-10 text-neutral-300 ${
            showText ? "show" : ""
          }`}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}>
            Looking for a car?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4, ease: "easeInOut" }}>
            Look no further!
          </motion.p>
        </div>
        <div className='relative justify-center mx-auto py-40'>
          <button className='bg-slate-100 w-[200px] rounded-md font-medium my-80 mx-auto py-3 text-black border-black'>
            ISAM TRADERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
