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
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Specialized <span className="text-brand-orange">RFID Tags</span> <br />
              for Every Environment
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              From high-security access control to long-range industrial asset tracking, our tags are engineered for 99.9% read accuracy.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm">
                  <ShieldCheck size={16} className="text-brand-green" />
                  ISO Certified
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm">
                  <Zap size={16} className="text-brand-orange" />
                  High Performance
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequency Categories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Choose the right frequency based on your read range and security requirements.</p>
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

    </div>
  );
};

export default RFIDTags;
