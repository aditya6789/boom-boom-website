
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import PrivacyPolicyPage from "./privacy/page";


function App() {
  return (
    <>
      <Router>
        <Routes>
        
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />


          
            



            


        
        </Routes>
      </Router>
    </>
  );
}

export default App;
