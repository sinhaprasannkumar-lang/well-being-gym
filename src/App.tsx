import { useState } from 'react';
import SeoHead from './components/SeoHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Membership from './components/Membership';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BmiCalculator from './components/BmiCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FreeTrialModal from './components/FreeTrialModal';
import { BmiResult } from './types';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  const handleOpenTrialModal = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgram(programTitle);
    } else {
      setSelectedProgram('General Gym & Cardio Access');
    }
    setTrialModalOpen(true);
  };

  const handleSelectMembershipPlan = (planName: string, billingCycle: string) => {
    setSelectedProgram(`Membership: ${planName} (${billingCycle.toUpperCase()})`);
    setTrialModalOpen(true);
  };

  const handleBookTrainer = (trainerName: string) => {
    setSelectedProgram(`1-on-1 Personal Training with ${trainerName}`);
    setTrialModalOpen(true);
  };

  const handleRequestCustomBmiPlan = (bmiData: BmiResult) => {
    setSelectedProgram(`Custom Diet & Workout Plan (BMI: ${bmiData.bmi} - ${bmiData.category})`);
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-amber-500 selection:text-black antialiased">
      {/* Dynamic SEO & JSON-LD schema head */}
      <SeoHead />

      {/* Navigation Header */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Main Sections */}
      <main className="relative">
        <Hero
          onOpenTrialModal={() => handleOpenTrialModal()}
          onOpenMembershipModal={() => {
            const el = document.getElementById('membership');
            if (el) {
              const offsetTop = el.offsetTop - 80;
              window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          }}
        />

        <About />

        <WhyChooseUs onOpenTrialModal={() => handleOpenTrialModal()} />

        <Services onOpenTrialModal={(title) => handleOpenTrialModal(title)} />

        <Membership onSelectPlan={(plan, cycle) => handleSelectMembershipPlan(plan, cycle)} />

        <Trainers onBookTrainer={(trainer) => handleBookTrainer(trainer)} />

        <Gallery />

        <Testimonials />

        <BmiCalculator onRequestCustomPlan={(bmi) => handleRequestCustomBmiPlan(bmi)} />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingWhatsApp />

      {/* Global Free Pass / Trial Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}
