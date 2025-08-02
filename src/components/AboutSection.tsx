import { Brain, Target, CheckCircle, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  scrollToSection?: (id: string) => void;
}

const AboutSection = ({ scrollToSection }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Pessoas reais por trás de <span className="text-gradient">resultados reais</span>.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Somos estrategistas e consultores com uma missão: escalar marcas com inteligência e consistência.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="glass-card fade-in">
            <h3 className="text-2xl font-medium mb-6 text-foreground">Quem somos</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 15 anos de experiência prática em branding, marketing e conteúdo,
              desenvolvemos um método estratégico baseado em clareza, dados e execução.
              Não acreditamos em mágica — acreditamos em ação estruturada.
            </p>
          </div>

          <div className="slide-in-right">
            <h3 className="text-2xl font-medium mb-8 text-center text-foreground">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Clareza antes da ação', icon: Brain },
                { title: 'Precisão na execução', icon: Target },
                { title: 'Transparência radical', icon: CheckCircle },
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Se você é um profissional qualificado sendo ofuscado por quem só sabe se vender online — é hora de unir forças.
            </p>
            <p className="text-xl font-medium text-foreground mb-8">
              Você cuida do conhecimento. Nós cuidamos do posicionamento e da execução.
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