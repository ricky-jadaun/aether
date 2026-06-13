import { Link } from "react-router-dom";
import { Building2, Settings, ShieldCheck, Download, ArrowRight, Activity, Users, Zap } from "lucide-react";

const FacilityManagement = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen selection:bg-brand-green selection:text-white">
      {/* Structural Hero */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-slate-900 skew-y-3 -translate-y-24 origin-top-left"></div>
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10 text-white">
          <div className="max-w-3xl pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 border border-brand-green/30 rounded-lg text-brand-green font-bold text-sm uppercase mb-8">
              <Building2 size={18} /> Integrated Facility Ecosystem
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-10 leading-[1.2] tracking-none">
                TOTAL 
                <span className="text-brand-green"> FACILITY </span> <br />
                CONTROL.
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
              Unified management for smarter buildings. Monitor energy, manage visitors, and automate maintenance through a single, intelligent interface.
            </p>
            <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="px-12 py-5 bg-brand-green text-slate-900 font-black rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-brand-green/20">
                    Connect My Building
                </Link>
                <button className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                    Feature Tour
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Control */}
      <section className="py-32 max-w-[1400px] mx-auto px-5 lg:px-10">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { t: "Visitor Tracking", d: "Digital check-ins with instant security clearance.", i: <Users /> },
                { t: "Energy Auditing", d: "Real-time utility monitoring and automated savings.", i: <Zap /> },
                { t: "Safety Compliance", d: "Digital logs for every safety inspection and alert.", i: <ShieldCheck /> },
                { t: "Asset Health", d: "Predictive monitoring for HVAC and critical infra.", i: <Activity /> }
            ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
                    <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-8">
                        {item.i}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 italic uppercase">{item.t}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                </div>
            ))}
         </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                  <h2 className="text-5xl font-black mb-8 italic uppercase leading-none">
                      SMART <br /> INFRASTRUCTURE.
                  </h2>
                  <p className="text-xl text-gray-400 mb-10 font-light">
                      Moving from reactive to proactive management. Our system learns your building's patterns to optimize operations automatically.
                  </p>
                  <ul className="space-y-6">
                      {["Centralized Dashboard", "Mobile Maintenance App", "Automated Work Orders", "Custom Reporting Engine"].map((text, i) => (
                          <li key={i} className="flex items-center gap-4 text-brand-green font-bold text-lg italic">
                              <Settings className="text-white" size={20} />
                              {text}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="aspect-video bg-white/5 border border-white/10 rounded-[60px] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors"></div>
                  <Building2 size={120} className="text-white/20" />
                  <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                      <div className="text-4xl font-black text-brand-green italic">25%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Energy Efficiency Increase</div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
