import { Settings, Factory, Globe, IndianRupee, Truck, Headset, Cpu } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      name: "Customized Solutions",
      icon: <Settings size={24} />,
      description: "Understanding that no two organizations are alike, we deliver personalized products and services to precisely match your requirements, ensuring adaptability in fast-evolving markets like autonomous vehicles and precision agriculture.",
    },
    {
      name: "State-of-the-Art Facilities",
      icon: <Factory size={24} />,
      description: "Located in Delhi, our advanced production and R&D centers guarantee products that uphold the highest quality standards, from design to delivery.",
    },
    {
      name: "International Standards Compliance",
      icon: <Globe size={24} />,
      description: "All our offerings—RFID tags, labels, GPS/GNSS devices, and sensors—adhere to global benchmarks, ensuring compatibility, reliability, and seamless integration worldwide.",
    },
    {
      name: "Affordability",
      icon: <IndianRupee size={24} />,
      description: "We prioritize value, offering premium solutions at competitive prices to maximize your ROI without compromising on innovation or performance.",
    },
    {
      name: "Timely Delivery",
      icon: <Truck size={24} />,
      description: "Our commitment to punctuality minimizes operational downtime, supporting your business continuity in an increasingly interconnected global economy.",
    },
    {
      name: "Expert Support",
      icon: <Headset size={24} />,
      description: "Dedicated assistance and responsive service to ensure seamless operations, reduced downtime, and maximum business efficiency.",
    },
    {
      name: "Smart Integration",
      icon: <Cpu size={24} />,
      description: "Advanced RFID and IoT solutions that integrate effortlessly with modern technologies, Industry 4.0 systems, and smart business ecosystems.",
    },
  ];

  const colors = ["#c1d72e", "#333c46", "#e91e63", "#20b2d0"];

  return (
    <section className="bg-[#f9f9f9] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            Why Choose Us?
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 md:w-20 bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-[#259350]"></div>
            <div className="h-[2px] w-12 md:w-20 bg-gray-300"></div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {solutions.map((item, index) => {
              const isEven = index % 2 === 0;
              const bgColor = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center w-full ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Description Side */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 py-6">
                    <p className={`text-gray-600 text-sm md:text-base leading-relaxed ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for Line (Hidden in Mobile, or use as dot) */}
                  <div className="relative md:w-0 flex justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-200 border-2 border-white md:hidden mb-4"></div>
                  </div>

                  {/* Title and Icon Side */}
                  <div
                    className={`w-full md:w-1/2 flex items-center px-4 md:px-12 ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className={`flex items-center w-full ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                      {/* Colored Ribbon Box */}
                      <div className="relative flex-grow max-w-[320px]">
                        {/* Shadow effect to mimic the slit/fold in image */}
                        <div 
                          className={`absolute top-2 -bottom-2 w-8 bg-black/10 blur-md z-0 ${
                            isEven ? "-left-4" : "-right-4"
                          }`}
                        ></div>
                         
                        <div
                          style={{ backgroundColor: bgColor }}
                          className={`h-12 md:h-14 flex items-center px-6 text-white font-bold text-sm md:text-base uppercase tracking-wider shadow-xl relative z-10 ${
                             isEven ? "rounded-r-md" : "rounded-l-md"
                          }`}
                        >
                          <span className="truncate">{item.name}</span>
                          
                          {/* Inner shadow on the line-side to give depth */}
                          <div className={`absolute top-0 bottom-0 w-4 bg-black/30 ${isEven ? 'left-0' : 'right-0'}`}></div>
                        </div>
                      </div>

                      {/* Icon Circle */}
                      <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 bg-white shadow-sm mx-4`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

