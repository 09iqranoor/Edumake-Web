
import HeroSection from '../../components/landing/HeroSection'
import WhyChooseSection from '../../components/landing/WhyChooseUS'
import FeaturesSection from '../../components/landing/FeaturesSection'
import WhoWeServe from '../../components/landing/WhoWeServe'
import PricingPlan from '../../components/landing/PricingPlan'
import FAQ from '../../components/landing/FAQ'
import Advertised from '../../components/landing/Advertised'
import Testimonials from '../../components/landing/Testimonials'
import Footer from '../../components/landing/Footer'


// interface LandingPageProps {
//   onLoginClick: () => void;
// }


const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <FeaturesSection />
      <WhoWeServe />
      <PricingPlan />
      <FAQ />
      <Advertised />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage