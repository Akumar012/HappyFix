import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import WhatsAppButton from "./components/WhatsappButton";

function App() {
  return (
    <Router>
      {/* Main layout wrapper */}
      <div className="min-h-screen w-full flex flex-col  bg-gray-50 text-gray-900">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow px-4 sm:px-6 lg:px-12  w-full mt-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Optional footer placeholder */}
        <Footer />
      </div>
      <WhatsAppButton />
      {/* Toast container to render toasts anywhere in the app */}
      <ToastContainer />
    </Router>
  );
}

export default App;
