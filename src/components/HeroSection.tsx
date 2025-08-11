
import { ArrowRight } from 'lucide-react';
import dashboardHero from '@/assets/dashboard-hero.jpg';
import CascadeStackCarousel from './VerticalVideoCarousel';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-20 lg:pt-32 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light heading-tight mb-6">
            <span className="text-gradient font-bold">Conexão, Autoridade</span><br />
            <span className="text-foreground text-4xl md:text-6xl lg:text-7xl">e Conteúdo que Converte.</span><br />
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-extralight">
              A nova geração de marcas cresce com <span className="text-white">presença</span>, não com anúncios.
            </span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-white font-light max-w-4xl mx-auto mb-12 leading-relaxed">
            Diagnóstico real. Estratégia. Execução. Resultados.<br />
            <span className="text-sm md:text-xl lg:text-2xl text-muted-foreground inline-block mt-2 md:mt-0">Transformamos histórias em influência. E influência em vendas.</span>
          </p>
          
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold rounded px-3 py-1">4 meses de duração</span>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold rounded px-3 py-1">Vagas limitadas: 30 marcas</span>
            </div>
            <span className="text-xs text-primary font-semibold uppercase tracking-wide">Garanta a sua!</span>
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
            <CascadeStackCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;