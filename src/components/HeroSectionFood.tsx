import { ArrowRight } from 'lucide-react';

interface HeroSectionFoodProps {
  scrollToSection: (id: string) => void;
}

const HeroSectionFood = ({ scrollToSection }: HeroSectionFoodProps) => {
  return (
    <section id="home" className="pt-20 lg:pt-32 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light heading-tight mb-6">
            <span className="text-gradient font-bold">Gastronomia que Encanta</span><br />
            <span className="text-foreground text-4xl md:text-6xl lg:text-7xl">e Vende Todos os Dias.</span><br />
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-extralight">
              Sua marca de food precisa de presença, não só de promoções.
            </span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white font-light max-w-4xl mx-auto mb-12 leading-relaxed">
            Diagnóstico real. Estratégia. Execução. Resultados para restaurantes, franquias e delivery.<br />
            <span className="text-sm md:text-xl lg:text-2xl text-muted-foreground inline-block mt-2 md:mt-0">Transformamos experiências gastronômicas em desejo e vendas.</span>
          </p>
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold rounded px-3 py-1">4 meses de transformação</span>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold rounded px-3 py-1">Vagas limitadas: 10 operações</span>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFood;
