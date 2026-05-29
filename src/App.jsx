import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CompanyOverview from "./pages/CompanyOverview";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CaseStudies from "./pages/CaseStudies";
import RFIDTechnology from "./pages/RFIDTechnology";
import IoTTechnology from "./pages/IoTTechnology";
import Barcodes from "./pages/Barcodes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/technologies/rfid" element={<RFIDTechnology />} />
        <Route path="/technologies/iot" element={<IoTTechnology />} />
        <Route path="/technologies/barcodes" element={<Barcodes />} />
        <Route path="/about/company-overview" element={<CompanyOverview />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/career" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
