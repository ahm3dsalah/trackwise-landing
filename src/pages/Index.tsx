import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AppPreview from "@/components/landing/AppPreview";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Trackwise - Smart Budget & Bank Account Tracking</title>
        <meta 
          name="description" 
          content="Organize your budget, track all your bank accounts, and visualize your cash flow in one beautiful dashboard. Start making smarter financial decisions today." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <AppPreview />
          <HowItWorks />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;