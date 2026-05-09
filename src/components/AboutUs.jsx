import { Target, Award, ShieldCheck, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Image with Decorative Elements */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/assets/about-2.webp" 
                alt="Our Workspace" 
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-[#0062fe] text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
              <p className="text-5xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years of<br />Excellence</p>
            </div>

            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0062fe] font-bold text-sm mb-2 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#0062fe]"></span>
              About Aether
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Driving Innovation Through <span className="text-[#0062fe]">Technology</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Aether is a global leader in providing end-to-end IoT, RFID, and digital transformation solutions. We help businesses navigate the complexities of the modern world with cutting-edge hardware and intelligent software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0062fe]">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-sm">To empower enterprises with real-time data and seamless connectivity.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0062fe]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-sm">To be the catalyst for a smarter, more connected global infrastructure.</p>
                </div>
              </div>
            </div>

            {/* <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#0062fe] shadow-sm group-hover:bg-[#0062fe] group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Certified Excellence</h4>
                <p className="text-gray-500 text-sm">ISO 9001:2015 certified processes ensuring premium quality.</p>
              </div>
            </div> */}

            <button className="mt-12 flex items-center gap-3 bg-[#000000] text-white px-10 py-5 rounded-2xl font-semibold hover:bg-[#0062fe] hover:shadow-2xl hover:shadow-[#0062fe]/20 transition-all duration-300 group">
              Learn More About Us
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
