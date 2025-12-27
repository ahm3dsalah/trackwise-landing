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
        <title>TrackWise - Expense Tracking Made Simple</title>
        <meta 
          name="description" 
          content="TrackWise - Simplify your expense tracking with our intuitive application. Manage your finances effortlessly with our powerful expense tracking tools." 
        />
        <meta name="keywords" content="expense tracking, finance management, budget tracking, personal finance, expense app, financial tools" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trackwise.me/" />
        <meta property="og:title" content="TrackWise - Expense Tracking Made Simple" />
        <meta property="og:description" content="Simplify your expense tracking with our intuitive application. Manage your finances effortlessly with our powerful expense tracking tools." />
        <meta property="og:image" content="https://trackwise.me/og-image.jpg" />
        <meta property="og:image:alt" content="TrackWise Expense Tracking Application" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://trackwise.me/" />
        <meta name="twitter:title" content="TrackWise - Expense Tracking Made Simple" />
        <meta name="twitter:description" content="Simplify your expense tracking with our intuitive application. Manage your finances effortlessly with our powerful expense tracking tools." />
        <meta name="twitter:image" content="https://trackwise.me/twitter-image.jpg" />
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