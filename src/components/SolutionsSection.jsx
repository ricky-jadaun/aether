import { useState, useRef, useEffect } from "react";
import { Settings, Factory, Globe, IndianRupee, Truck, Headset, Cpu } from "lucide-react";

const SolutionsSection = () => {
  const [activeItem, setActiveItem] = useState(0);
  const scrollRef = useRef(null);
  const autoPlayRef = useRef(null);

  const solutions = [
    {
      name: "Customized Solutions",
      icon: <Settings size={32} />,
      description: "Understanding that no two organizations are alike, we deliver personalized products and services to precisely match your requirements, ensuring adaptability in fast-evolving markets like autonomous vehicles and precision agriculture.",
    },
    {
      name: "State-of-the-Art Facilities",
      icon: <Factory size={32} />,
      description: "Located in Delhi, our advanced production and R&D centers guarantee products that uphold the highest quality standards, from design to delivery.",
    },
    {
      name: "International Standards Compliance",
      icon: <Globe size={32} />,
      description: "All our offerings—RFID tags, labels, GPS/GNSS devices, and sensors—adhere to global benchmarks, ensuring compatibility, reliability, and seamless integration worldwide.",
    },
    {
      name: "Affordability",
      icon: <IndianRupee size={32} />,
      description: "We prioritize value, offering premium solutions at competitive prices to maximize your ROI without compromising on innovation or performance.",
    },
    {
      name: "Timely Delivery",
      icon: <Truck size={32} />,
      description: "Our commitment to punctuality minimizes operational downtime, supporting your business continuity in an increasingly interconnected global economy.",
    },
    {
      name: "Expert Support",
      icon: <Headset size={32} />,
      description: "Dedicated assistance and responsive service to ensure seamless operations, reduced downtime, and maximum business efficiency.",
    },
    {
      name: "Smart Integration",
      icon: <Cpu size={32} />,
      description: "Advanced RFID and IoT solutions that integrate effortlessly with modern technologies, Industry 4.0 systems, and smart business ecosystems.",
    },
  ];

  // Auto-play logic
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setActiveItem((prev) => {
          const nextIndex = (prev + 1) % solutions.length;
          // Sync scroll position
          if (scrollRef.current && window.innerWidth < 1024) {
             scrollRef.current.scrollTo({
                left: nextIndex * 104,
                behavior: "smooth"
             });
          }
          return nextIndex;
        });
      }, 5000); // 5 seconds interval for reading
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [solutions.length]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    // Optional: Pause auto-play when user scrolls manually
    // if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / 104); 
    if (newIndex >= 0 && newIndex < solutions.length && newIndex !== activeItem) {
      setActiveItem(newIndex);
    }
  };

  const getItemStyles = (index) => {
    const total = solutions.length;
    const angle = (index / (total - 1)) * 180;
    const radian = (angle * Math.PI) / 180;
    const radius = 350;
    const x = -Math.cos(radian) * radius;
    const y = -Math.sin(radian) * radius;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <section className="bg-[#000000] py-16 md:py-24 min-h-[700px] lg:min-h-[900px] relative overflow-hidden flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 z-10 px-5">
          Why Choose Us ?
        </h2>
        <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-[#0062fe]"></div>
            <div className="h-[2px] w-20 bg-gray-200"></div>
        </div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="lg:hidden w-full flex flex-col items-center z-20">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto flex gap-6 px-[40%] py-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex flex-col items-center transition-all duration-300 snap-center ${
                activeItem === index ? "scale-110" : "opacity-40 scale-75"
              }`}
              onClick={() => {
                setActiveItem(index);
                scrollRef.current.scrollTo({
                  left: index * 104, 
                  behavior: 'smooth'
                });
              }}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${
                activeItem === index 
                ? "bg-[#0062fe] border-[#ffffff] text-white shadow-[0_0_20px_rgba(0,98,254,0.4)]" 
                : "bg-white/10 border-white/20 text-white"
              }`}>
                {item.icon}
              </div>
              <p className={`mt-3 text-center text-[10px] font-bold uppercase tracking-wider w-24 ${
                activeItem === index ? "text-[#0062fe]" : "text-white/60"
              }`}>
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Description Container below items */}
        <div className="w-[85%] min-h-[200px] bg-white rounded-3xl shadow-2xl p-8 mt-4 transition-all duration-500 flex flex-col justify-center items-center text-center">
           <h4 className="text-[#0062fe] font-bold text-xl mb-3">{solutions[activeItem].name}</h4>
           <p className="text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
             {solutions[activeItem].description}
           </p>
        </div>
      </div>

      {/* Desktop Arc Layout */}
      <div className="hidden lg:flex relative w-full max-w-[1000px] h-[475px] justify-center">
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] border-2 border-dashed border-white/10 rounded-full"></div>

        {/* Desktop Description Container */}
        <div className="absolute top-[320px] left-1/2 -translate-x-1/2 z-20 w-[450px] h-[280px] bg-white rounded-[40px] shadow-2xl p-10 flex flex-col justify-center items-center text-center transition-all duration-500 transform hover:scale-103">
           <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0062fe] mb-4">
              {solutions[activeItem].icon}
           </div>
           <h4 className="text-2xl font-bold text-gray-900 mb-4">{solutions[activeItem].name}</h4>
           <p className="text-gray-600 text-lg leading-relaxed animate-in fade-in zoom-in duration-700">
             {solutions[activeItem].description}
           </p>
           {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none"></div> */}
        </div>

        <div className="absolute bottom-0 left-1/2">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-all duration-300 z-30"
              style={getItemStyles(index)}
              onMouseEnter={() => setActiveItem(index)}
            >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                activeItem === index 
                ? "bg-[#0062fe] border-[#ffffff] text-white shadow-[0_0_30px_rgba(255,255,255,0.5)]" 
                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              }`}>
                {item.icon}
              </div>
              <p className={`mt-4 text-center text-sm font-semibold max-w-[120px] transition-all duration-300 ${
                activeItem === index ? "text-[#0062fe] scale-110" : "text-white/70"
              }`}>
                {item.name}
              </p>
              
              {activeItem === index && (
                <div className="absolute -top-4 w-4 h-4 bg-[#0062fe] rounded-full animate-ping"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
