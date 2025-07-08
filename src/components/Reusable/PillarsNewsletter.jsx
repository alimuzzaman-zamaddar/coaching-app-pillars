import React from 'react';
import imgbg from '../../assets/PillarsNewsletter/midsection-woman-using-mobile-phone.png';
import Swal from 'sweetalert2';

const PillarsNewsletter = () => {


    const handleMobileSubmit = (e) => {
    e.preventDefault(); 
    Swal.fire({
      icon: "success",
      title: "Email sent successfully",
      text: "We will get back to you soon!",
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    });
  };
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white rounded-[50px] overflow-hidden mx-5"
      style={{
        backgroundImage: `url(${imgbg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-8 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[90px] font-medium leading-tight">
          Fresh Insights From <br className="hidden sm:block" /> The Pillars Team
        </h1>

        {/* Desktop Form (lg and up) */}
   
        <form onSubmit={handleMobileSubmit}  className="mt-8 hidden lg:flex justify-center">
          <div className="bg-white/20 backdrop-blur-md flex items-center rounded-full overflow-hidden w-full max-w-lg p-2">
            <input
              type="email"
              placeholder="Drop your email"
              className="flex-1 px-5 py-3 bg-transparent text-white placeholder-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Mobile/Tablet Form (below lg) */}
        <form onSubmit={handleMobileSubmit} className="mt-6 flex lg:hidden flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2">
          <input
            type="email"
            placeholder="Drop your email"
            className="w-full sm:w-auto px-5 py-3 bg-white/20 backdrop-blur-md rounded-full text-white placeholder-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-8 py-3 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default PillarsNewsletter;
