import { Brain, Target, CheckCircle, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  scrollToSection?: (id: string) => void;
}

const AboutSection = ({ scrollToSection }: AboutSectionProps) => {
  return (
    <section id="about" className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Quem constrói de verdade não precisa falar mais,
            <span className="block sm:inline">{' '}
              <span className="sm:hidden">precisa <span className="text-gradient">ser visto</span>.</span>
              <span className="hidden sm:inline">precisa ser <span className="text-gradient">visto</span>.</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Somos estrategistas e executores focados em escalar marcas com inteligência, processo e posicionamento de verdade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="glass-card fade-in">
            <h3 className="text-2xl font-medium mb-6 text-foreground">Quem somos</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Após 15 anos construindo marcas na prática, e não só no discurso,
              desenvolvemos um método que une clareza, conteúdo e execução.
              Não acreditamos em fórmulas mágicas. Acreditamos em estratégia viva, com dados, direção e ação.
            </p>
          </div>

          <div className="slide-in-right">
            <h3 className="text-2xl font-medium mb-8 text-center text-foreground">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Clareza antes de qualquer ação', icon: Brain },
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
              Você é excelente no que faz, mas está perdendo espaço para profissionais medíocres que sabem se vender e dominam a internet.
            </p>
            <p className="text-lg md:text-xl text-foreground mb-4 font-medium">
              Hoje, não basta ser excelente.
              <span className="inline">
                <span className="hidden sm:inline"> É preciso <span className="text-gradient">ser visto, lembrado e desejado</span></span>
                <span className="block sm:hidden">
                  <span className="text-base font-normal text-muted-foreground">É preciso</span><br />
                  <span className="text-gradient">ser visto, lembrado e desejado</span>
                </span>
              </span>.<br />
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

export default AboutSection;