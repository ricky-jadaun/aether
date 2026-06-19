import { Link } from "react-router-dom";
import { Layers, Zap, ShieldCheck, Download, ArrowRight, Tag, ScanLine, Radio } from "lucide-react";

const RFIDTags = () => {
  const categories = [
    {
      id: "uhf",
      title: "UHF (Ultra High Frequency)",
      subtitle: "860 MHz - 960 MHz",
      description: "Designed for long-range tracking and bulk reading capabilities. Ideal for supply chain, inventory, and logistics.",
      features: ["Read range up to 12m+", "High-speed bulk reading", "Global standard compliance", "Asset & Inventory focus"],
      icon: <Radio size={32} className="text-brand-orange" />,
      color: "border-brand-orange/30",
      bgColor: "bg-brand-orange/5"
    },
    {
      id: "hf",
      title: "HF (High Frequency)",
      subtitle: "13.56 MHz",
      description: "Offers high security and short-range precision. Widely used for access control, ticketing, and payment systems.",
      features: ["Read range up to 1m", "NFC Compatibility", "Secure data encryption", "Identity & Payment focus"],
      icon: <ScanLine size={32} className="text-brand-green" />,
      color: "border-brand-green/30",
      bgColor: "bg-brand-green/5"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Specialized <span className="text-brand-orange">RFID Tags</span> <br />
              for Every Environment
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              From high-security access control to long-range industrial asset tracking, our tags are engineered for 99.9% read accuracy.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-8 py-4 bg-white/5 border font-bold border-white/10 rounded-2xl text-white text-sm">
                  <ShieldCheck size={20} className="text-brand-green" />
                  ISO Certified
               </div>
               <div className="flex items-center gap-2 px-8 py-4 bg-white/5 border font-bold border-white/10 rounded-2xl text-white text-sm">
                  <Zap size={20} className="text-brand-orange" />
                  High Performance
               </div>
            </div>
          </div>

          {/*  */}
          <div className="relative">
            <div className="relative z-20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/20 p-4 rounded-[48px] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors"></div>
              <img 
                src="/assets/rfid-tag.jpg" 
                alt="RFID Hardware" 
                className="relative z-10 w-full h-auto object-contain rounded-3xl mix-blend-screen opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative rings */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/5 rounded-full"></div>
          </div>
          {/*  */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequency Categories</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Choose the right frequency based on your read range and security requirements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className={`p-10 rounded-[40px] border ${cat.color} ${cat.bgColor} hover:shadow-2xl transition-all duration-500`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                {cat.icon}
              </div>
              <div className="mb-2 text-sm font-bold tracking-widest text-slate-500 uppercase">{cat.subtitle}</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">{cat.title}</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {cat.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {cat.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-brand-orange transition-colors">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </section>

          {/* CTA Section - Unique Glassmorphism Design */}
      <section className="pt-12 pb-24 px-5 lg:px-10">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="absolute inset-0 bg-brand-blue rounded-[60px] transform -rotate-1 skew-y-1"></div>
          <div className="relative bg-[#0f172a] rounded-[60px] p-12 md:p-24 overflow-hidden shadow-2xl border border-white/10">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to Choose the <br />
                <span className="text-brand-orange">Right RFID Tags for Your Needs?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Whether you need long-range UHF or secure HF tags, our team will help you select the best option for your tracking, access, and inventory goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto bg-brand-orange text-white font-medium px-12 py-5 rounded-2xl tracking-wide hover:bg-brand-orange/90 hover:scale-105 transition-all shadow-lg shadow-brand-orange/20">
                  Contact Us Now
                </Link>
                <a
                  href="/assets/RFID%20products/TagsCatalogue.pptx"
                  download
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium tracking-wide px-12 py-5 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download Datasheets
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500 font-medium uppercase tracking-[0.2em]">
                PDF • Latest Revision • 2024
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RFIDTags;
