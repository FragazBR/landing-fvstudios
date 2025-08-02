import { ArrowRight } from 'lucide-react';
import dashboardHero from '@/assets/dashboard-hero.jpg';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-20 lg:pt-32 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light heading-tight mb-6">
            <span className="text-gradient">Estratégia, Conteúdo</span><br />
            <span className="text-foreground">e Execução.</span><br />
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-extralight">
              Tudo que sua marca precisa para crescer com consistência.
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-4xl mx-auto mb-12 leading-relaxed">
            Diagnóstico profundo. Plano sob medida. Execução precisa.<br />
            Transformamos ideias em resultados reais.
          </p>
          
          <div className="flex flex-col items-center space-y-4 mb-16">
            <button 
              onClick={() => scrollToSection('hire-us')}
              className="btn-primary text-lg px-10 py-5 group"
            >
              QUERO APLICAR
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <p className="text-sm text-muted-foreground">Clique para entrar na lista de espera</p>
          </div>

          <div className="slide-in-left max-w-5xl mx-auto">
            <img 
              src={dashboardHero} 
              alt="Strategic Dashboard" 
              className="w-full rounded-3xl shadow-2xl glass-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;