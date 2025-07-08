import React from 'react';

const HeroSection = ({ img, title, description }) => {
  return (
    <section
      className="relative rounded-[50px] overflow-hidden min-h-[95vh] flex items-end justify-start m-5"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top-center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />

      {/* Content */}
      <div className="z-10 flex flex-col xl:flex-row w-full justify-between gap-6 p-6 sm:p-10 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[74px] font-medium leading-snug max-w-[800px]">
          {title}
        </h1>
        <p className="text-sm sm:text-base xl:text-[24px] leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

