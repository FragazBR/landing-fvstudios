import { Utensils, Target, CheckCircle, TrendingUp } from 'lucide-react';

interface AboutSectionFoodProps {
  scrollToSection?: (id: string) => void;
}

const AboutSectionFood = ({ scrollToSection }: AboutSectionFoodProps) => {
  return (
    <section id="about" className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Quem serve experiência de verdade não precisa falar mais,
            <span className="block sm:inline">{' '}
              <span className="sm:hidden">é preciso <span className="text-gradient">ser visto</span></span>
              <span className="hidden sm:inline">precisa ser <span className="text-gradient">desejado</span></span>
            </span>.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Somos especialistas em escalar negócios gastronômicos com estratégia, conteúdo e posicionamento de verdade.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="glass-card fade-in">
            <h3 className="text-2xl font-medium mb-6 text-foreground">Quem somos</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais de 15 anos ajudando restaurantes, franquias e chefs a lotarem suas casas e venderem mais no delivery.
              Estratégia viva, com dados, direção e ação.
            </p>
          </div>
          <div className="slide-in-right">
            <h3 className="text-2xl font-medium mb-8 text-center text-foreground">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Sabor e experiência em primeiro lugar', icon: Utensils },
                { title: 'Execução com foco e intenção', icon: Target },
                { title: 'Transparência total no processo', icon: CheckCircle },
                { title: 'Obsessão por resultados', icon: TrendingUp }
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-4 glass-card">
                  <value.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium text-foreground">{value.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card fade-in text-center">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Seu restaurante pode ser excelente, mas está perdendo espaço para quem sabe se vender e domina o digital.
            </p>
            <p className="text-lg md:text-xl text-foreground mb-4 font-medium">
              Hoje, não basta ser bom. <span className="whitespace-nowrap">É preciso <span className="text-gradient">ser visto, lembrado e desejado</span></span>.<br />
              A gente resolve isso pra você.
            </p>
            <button className="btn-primary" onClick={() => scrollToSection && scrollToSection('hire-us')}>
              QUERO APLICAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFood;
