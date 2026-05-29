import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const navItems = [
    {
      name: "About Us",
      dropdown: [
        { name: "Our Company", path: "/about/company-overview" },
        { name: "Team", path: "/about/team" },
        { name: "Careers", path: "/about/career" }
      ],
    },
    {
      name: "Technologies",
      dropdown: [
        { name: "RFID", path: "/technologies/rfid" },
        { name: "IOT", path: "/technologies/iot" },
        { name: "Barcodes", path: "/technologies/barcodes" }
      ],
    },
    {
      name: "Products",
      dropdown: ["RFID", "IOT", "Software Solution"],
    },
    {
      name: "Industry",
      dropdown: ["Retail", "Factory Automation", "Logistics", "E-commerce", "Quick Commerce"],
    },
    {
      name: "Blogs",
      dropdown: [
        { name: "Latest Blogs", path: "/blogs" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Updates", path: "/blogs" }
      ],
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full bg-[#ffffff]/90 backdrop-blur-md text-brand-blue border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            {/* Logo Image */}
            <img
              src="/assets/Aether-rfid.png"
              alt="Logo"
              className="w-18 lg:w-24 h-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-9">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setDropdown(index)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[16px] font-medium hover:text-brand-blue transition duration-300">
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-[45px] left-0 w-[220px] bg-brand-blue border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 z-50 ${
                    dropdown === index
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-3"
                  }`}
                >
                  {item.dropdown.map((drop, i) => (
                    <Link
                      key={i}
                      to={typeof drop === 'string' ? "/" : drop.path}
                      className="block px-5 py-3 text-sm text-gray-300 hover:bg-[#1b1b1b] hover:text-[#ffffff] transition"
                    >
                      {typeof drop === 'string' ? drop : drop.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Button */}
            <Link to="/contact" className="bg-brand-blue border-2 border-brand-blue text-white font-semibold px-7 py-3 rounded-full hover:bg-[#ffffff] hover:text-brand-blue hover:scale-105 transition duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu ? "max-h-[1000px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-white/10 pb-3">
                <button
                  className="flex items-center justify-between w-full text-left text-[14px] font-medium"
                  onClick={() => setDropdown(dropdown === index ? null : index)}
                >
                  {item.name}

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      dropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    dropdown === index ? "max-h-60 mt-3" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 pl-3">
                    {item.dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        to={typeof drop === 'string' ? "/" : drop.path}
                        className="text-gray-400 hover:text-brand-blue text-sm"
                        onClick={() => setMobileMenu(false)}
                      >
                        {typeof drop === 'string' ? drop : drop.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link 
              to="/contact" 
              className="bg-brand-blue border-2 border-brand-blue text-white font-semibold px-6 py-3 rounded-full mt-2 hover:bg-[#ffffff] hover:text-brand-blue lg:hover:scale-105 transition duration-300 text-center"
              onClick={() => setMobileMenu(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
