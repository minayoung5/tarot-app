import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { LanguageProvider } from "@/hooks/useLang";

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <LanguageProvider>
      <Router basename={basename || undefined}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
