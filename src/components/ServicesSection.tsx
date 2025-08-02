import { Brain, BarChart3, Target, Zap, TrendingUp, Users } from 'lucide-react';

interface ServicesSectionProps {
  scrollToSection: (id: string) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Soluções estratégicas para <span className="text-gradient">transformar</span><br />
            seu negócio desde a base.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Do diagnóstico ao crescimento, nosso método é focado em escalar sua marca
            com estratégia, dados e execução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Diagnóstico de Negócios', desc: 'Análise profunda do posicionamento e oportunidades de crescimento', icon: Brain },
            { title: 'Plano Estratégico Personalizado', desc: 'Roteiro sob medida para os objetivos do seu negócio', icon: Target },
            { title: 'Consultoria Contínua', desc: 'Sessões semanais 1:1 para orientar e otimizar sua execução', icon: Users },
            { title: 'Criação de Conteúdo', desc: 'Conteúdo estratégico quinzenal para posicionar você como referência', icon: Zap },
            { title: 'Dashboard de Performance', desc: 'Métricas e insights em tempo real para acompanhar seu crescimento', icon: BarChart3 },
            { title: 'Otimização de Crescimento', desc: 'Aprimoramento contínuo e escala das estratégias que funcionam', icon: TrendingUp }
          ].map((service, index) => (
            <div key={index} className="glass-card fade-in group cursor-pointer">
              <service.icon className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <button 
            onClick={() => scrollToSection('hire-us')}
            className="neuro-btn text-primary hover:text-primary-foreground"
          >
            Ver Plano Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;