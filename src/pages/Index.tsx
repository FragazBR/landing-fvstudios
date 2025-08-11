import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ResultsSection from '@/components/ResultsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MissionSection from '@/components/MissionSection';
import HireUsSection from '@/components/HireUsSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FragmentBackground from '@/components/FragmentBackground';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, opts?: { forceSectionTop?: boolean }) => {
    // Se o id for 'hire-us' e NÃO for forçado para o topo, rola até o botão do CTA do card de investimento mensal
    if (id === 'hire-us' && !opts?.forceSectionTop) {
      const ctaBtn = document.getElementById('whatsapp-cta-card');
      if (ctaBtn) {
        ctaBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`.spline-watermark { display: none !important; }`}</style>
      <div className="min-h-screen relative">
        <FragmentBackground />
        <Navigation scrollToSection={scrollToSection} />
        <HeroSection scrollToSection={scrollToSection} />
        <ResultsSection />
        <ServicesSection scrollToSection={scrollToSection} />
        <TestimonialsSection />
        <MissionSection />
        <HireUsSection />
        <AboutSection scrollToSection={scrollToSection} />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;