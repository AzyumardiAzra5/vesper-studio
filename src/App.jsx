import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotFAQ from "./components/ChatbotFAQ";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import LayananDetail from "./pages/LayananDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/portofolio/:kategori" element={<Portofolio />} />
            <Route path="/layanan/:slug" element={<LayananDetail />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotFAQ />
      </div>
    </BrowserRouter>
  );
}

export default App;
