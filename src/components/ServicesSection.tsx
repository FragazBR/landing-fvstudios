import { Brain, BarChart3, Target, Zap, TrendingUp, Users } from 'lucide-react';

interface ServicesSectionProps {
  scrollToSection: (id: string, opts?: { forceSectionTop?: boolean }) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light heading-tight mb-6">
            Você não precisa de mais conteúdo. Precisa de uma estratégia que transforma <span className="text-gradient">atenção</span> em <span className="text-gradient">resultado</span>.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Nosso trabalho começa entendendo onde sua marca está<br />
            e termina com ela sendo vista, seguida e desejada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Diagnóstico de Marca', desc: 'Análise profunda do posicionamento\ne oportunidades de crescimento', icon: Brain },
            { title: 'Plano Estratégico Personalizado', desc: 'Um plano claro, viável e direcionado para escalar com conteúdo, posicionamento e consistência.', icon: Target },
            { title: 'Mentoria Contínua', desc: 'Sessões semanais 1:1 para tomar melhores decisões e otimizar sua execução', icon: Users },
            { title: 'Criação de Conteúdo', desc: 'Conteúdo estratégico quinzenal para posicionar você como referência', icon: Zap },
            { title: 'Dashboard de Performance', desc: 'Métricas e insights em tempo real para acompanhar seu crescimento', icon: BarChart3 },
            { title: 'Otimização de Crescimento', desc: 'O que funcionou, a gente escala. O que não performa, a gente ajusta. Crescimento com dados, não achismo.', icon: TrendingUp }
          ].map((service, index) => (
            <div key={index} className="glass-card fade-in group cursor-pointer text-center md:text-left">
              <service.icon className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform mx-auto md:mx-0" />
              <h3 className="text-xl font-medium mb-4 text-foreground">{service.title}</h3>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                {service.title === 'Diagnóstico de Marca' ? (
                  <>
                    {'Análise profunda do posicionamento'}<br />{'e oportunidades de crescimento'}
                  </>
                ) : service.title === 'Plano Estratégico Personalizado' ? (
                  <>
                    <span className="block md:hidden">
                      {'Um plano claro, viável e direcionado para escalar'}<br />{'com conteúdo, posicionamento e consistência.'}
                    </span>
                    <span className="hidden md:inline">{'Um plano claro, viável e direcionado para escalar com conteúdo, posicionamento e consistência.'}</span>
                  </>
                ) : service.title === 'Mentoria Contínua' ? (
                  <>
                    <span className="block md:hidden">{'Sessões semanais 1:1 para tomar'}</span>
                    <span className="block md:hidden">{'as melhores decisões e otimizar sua execução'}</span>
                    <span className="hidden md:inline">{'Sessões semanais 1:1 para tomar as melhores decisões e otimizar sua execução'}</span>
                  </>
                ) : service.title === 'Criação de Conteúdo' ? (
                  <>
                    <span className="block md:hidden">{'Conteúdo estratégico quinzenal para'}</span>
                    <span className="block md:hidden">{'posicionar você como referência'}</span>
                    <span className="hidden md:inline">{'Conteúdo estratégico quinzenal para posicionar você como referência'}</span>
                  </>
                ) : service.title === 'Dashboard de Performance' ? (
                  <>
                    <span className="block md:hidden">{'Métricas e insights em tempo real'}</span>
                    <span className="block md:hidden">{'para acompanhar seu crescimento'}</span>
                    <span className="hidden md:inline">{'Métricas e insights em tempo real para acompanhar seu crescimento'}</span>
                  </>
                ) : service.title === 'Otimização de Crescimento' ? (
                  <>
                    <span className="block md:hidden">{'O que funcionou, a gente escala. O que não performa,'}</span>
                    <span className="block md:hidden">{'a gente ajusta. Crescimento com dados, não achismo.'}</span>
                    <span className="hidden md:inline">{'O que funcionou, a gente escala. O que não performa, a gente ajusta. Crescimento com dados, não achismo.'}</span>
                  </>
                ) : service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <button 
            onClick={() => scrollToSection('hire-us', { forceSectionTop: true })}
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