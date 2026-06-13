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
import RFIDHardware from "./pages/RFIDHardware";
import RFIDTags from "./pages/RFIDTags";
import DataLoggers from "./pages/DataLoggers";
import GPSDevices from "./pages/GPSDevices";
import LoRaWANSensors from "./pages/LoRaWANSensors";
import RetailAutomation from "./pages/RetailAutomation";
import AssetsTracking from "./pages/AssetsTracking";
import WarehouseManagement from "./pages/WarehouseManagement";
import FacilityManagement from "./pages/FacilityManagement";
import FactoryAutomationSoftware from "./pages/FactoryAutomationSoftware";
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
        <Route path="/products/rfid/hardware" element={<RFIDHardware />} />
        <Route path="/products/rfid/tags" element={<RFIDTags />} />
        
        {/* IoT Products */}
        <Route path="/products/iot/data-loggers" element={<DataLoggers />} />
        <Route path="/products/iot/gps-gnss" element={<GPSDevices />} />
        <Route path="/products/iot/lorawan-sensors" element={<LoRaWANSensors />} />

        {/* Software Solutions */}
        <Route path="/products/software/retail-automation" element={<RetailAutomation />} />
        <Route path="/products/software/assets-tracking" element={<AssetsTracking />} />
        <Route path="/products/software/warehouse-management" element={<WarehouseManagement />} />
        <Route path="/products/software/facility-management" element={<FacilityManagement />} />
        <Route path="/products/software/factory-automation" element={<FactoryAutomationSoftware />} />

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
