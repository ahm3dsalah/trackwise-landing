import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Features from "@/components/landing/Features";
import AppPreview from "@/components/landing/AppPreview";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check for hash in the URL after component renders
    const hash = location.hash;
    if (hash) {
      const elementId = hash.replace('#', '');
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Trackwise</title>
        <meta 
          name="description" 
          content="Organize your budget, track all your bank accounts, and visualize your cash flow in one beautiful dashboard. Start making smarter financial decisions today." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <AppPreview />
          <Features />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;