import { Link } from "react-router-dom";
import { Package, Search, BarChart3, ShieldCheck, Download, ArrowRight, Truck, ClipboardList } from "lucide-react";

const AssetsTracking = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Search-Inspired Hero */}
      <section className="relative py-12 bg-brand-blue text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12"></div>
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-lg text-brand-orange font-bold text-sm uppercase mb-8">
              <Search size={18} /> 100% Asset Visibility
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9]">
              TRACK EVERYTHING. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">LOSE NOTHING.</span>
            </h1>
            <p className="text-xl text-blue-100/70 mb-12 max-w-2xl font-light">
               Our Asset Tracking engine provides a single source of truth for your physical inventory, from high-value equipment to mission-critical tools.
            </p>
            <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="px-12 py-5 bg-brand-orange text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl shadow-brand-orange/20">
                    Deploy Tracker
                </Link>
                <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                    View Demo
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { l: "Misplaced Assets", v: "0%", c: "text-brand-green" },
                { l: "Time Saved", v: "40%", c: "text-brand-orange" },
                { l: "Asset Utilization", v: "98%", c: "text-brand-blue" },
                { l: "Cost Recovery", v: "22%", c: "text-slate-900" }
            ].map((stat, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 text-center">
                    <div className={`text-5xl font-black mb-4 ${stat.c}`}>{stat.v}</div>
                    <div className="text-xs text-slate-400 uppercase font-black tracking-widest">{stat.l}</div>
                </div>
            ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                      <div className="absolute inset-0 bg-brand-orange/20 blur-[120px] rounded-full"></div>
                      <div className="relative z-10 grid grid-cols-2 gap-6">
                          <div className="space-y-6">
                              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                                  <Package size={60} className="text-brand-orange" />
                              </div>
                              <div className="p-8 bg-brand-orange rounded-3xl text-black">
                                  <h4 className="font-black text-2xl mb-2 italic">SCAN</h4>
                                  <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">Instant Identity</p>
                              </div>
                          </div>
                          <div className="space-y-6 mt-12">
                              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                                  <h4 className="font-black text-2xl mb-2 italic">LOCATE</h4>
                                  <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Real-time GPS/RFID</p>
                              </div>
                              <div className="aspect-square bg-white rounded-3xl flex items-center justify-center">
                                  <Truck size={60} className="text-brand-blue" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>
                      <h2 className="text-5xl font-black mb-10 leading-tight italic">END-TO-END <br /> ASSET LIFECYCLE.</h2>
                      <div className="space-y-8">
                          {[
                              { t: "Automated Check-in/out", d: "Track custodial responsibility without manual logs.", i: <ClipboardList /> },
                              { t: "Predictive Maintenance", d: "Schedule services based on actual asset usage data.", i: <BarChart3 /> },
                              { t: "Security Geofencing", d: "Instant alerts if assets leave designated zones.", i: <ShieldCheck /> }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-6 group">
                                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                                      {item.i}
                                  </div>
                                  <div>
                                      <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                                      <p className="text-gray-400 leading-relaxed">{item.d}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default AssetsTracking;
