import { Link } from "react-router-dom";
import { Cpu, Smartphone, ShieldCheck, Download, ArrowRight, Radio, Settings, Database } from "lucide-react";

const RFIDHardware = () => {
  const hardwareFeatures = [
    {
      title: "Fixed Readers",
      description: "Enterprise-grade readers designed for continuous, high-performance tracking at key choke points.",
      icon: <Radio size={24} className="text-brand-orange" />,
    },
    {
      title: "Handheld Terminals",
      description: "Ergonomic mobile computers with integrated long-range RFID scanners for versatile inventory management.",
      icon: <Smartphone size={24} className="text-brand-green" />,
    },
    {
      title: "RFID Antennas",
      description: "Sophisticated antenna arrays providing high-gain, circular or linear polarization for diverse environments.",
      icon: <Settings size={24} className="text-brand-blue" />,
    },
    {
      title: "Integrated Systems",
      description: "Custom-configured hardware bundles pre-integrated for rapid deployment and maximum ROI.",
      icon: <Database size={24} className="text-red-700" />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section - Unique Diagonal Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0f18]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-brand-orange font-semibold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Industrial Grade RFID Hardware
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              High Performance <br />
              <span className="bg-gradient-to-r from-brand-orange via-white to-brand-green bg-clip-text text-transparent">RFID Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Engineered for precision. Built for reliability. Our industrial-grade hardware provides the backbone for next-generation automated tracking systems.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="group flex items-center gap-3 bg-brand-orange text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-orange/90 transition-all transform hover:-translate-y-1">
                Start a Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/20 p-8 rounded-[48px] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors"></div>
              <img 
                src="/assets/Aether-rfid.png" 
                alt="RFID Hardware" 
                className="relative z-10 w-full h-auto object-contain rounded-3xl mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating feature tags */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 animate-bounce duration-[3000ms]">
                <Cpu className="text-brand-orange" size={32} />
              </div>
              <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 animate-bounce duration-[4000ms]">
                <ShieldCheck className="text-brand-green" size={32} />
              </div>
            </div>
            
            {/* Decorative rings */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="pt-24 pb-12 max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareFeatures.map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
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
                Ready to Implement a <br />
                <span className="text-brand-orange">Seamless Tracking Solution?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Whether you're looking for specialized readers or a full-scale deployment, our team of experts is here to guide your hardware selection process.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto bg-brand-orange text-white font-bold px-12 py-5 rounded-2xl hover:bg-brand-orange/90 hover:scale-105 transition-all shadow-lg shadow-brand-orange/20">
                  Contact Us Now
                </Link>
                <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold px-12 py-5 rounded-2xl hover:bg-white/10 transition-all">
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download Datasheets
                </button>
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

export default RFIDHardware;
