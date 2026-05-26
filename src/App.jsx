import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CompanyOverview from "./pages/CompanyOverview";
import Team from "./pages/Team";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/company-overview" element={<CompanyOverview />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/career" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
