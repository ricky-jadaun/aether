const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/assets/aether-rfid-one.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Aether-RFID<br className="hidden md:block"/> Pioneering Innovation in RFID and IoT Solutions
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-[750px]">
          At Aether-RFID, our mission is to deliver cost-effective, high-quality RFID and IoT solutions that solve modern business connectivity challenges through reliable services, innovation, and long-term partnerships.
        </p>

        <button className="bg-brand-orange border-2 border-brand-orange text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#ffffff] hover:text-brand-orange hover:scale-105 transition-all duration-300">
          Explore our products
        </button>

        {/* Scroll Icon */}
        {/* <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
