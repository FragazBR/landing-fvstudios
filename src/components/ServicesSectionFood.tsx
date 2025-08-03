import { Utensils, BarChart3, Target, Zap, TrendingUp, Users } from 'lucide-react';

interface ServicesSectionFoodProps {
  scrollToSection: (id: string, opts?: { forceSectionTop?: boolean }) => void;
}

const ServicesSectionFood = ({ scrollToSection }: ServicesSectionFoodProps) => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light heading-tight mb-6">
            Seu restaurante não precisa só de posts. Precisa de uma estratégia que transforma <span className="text-gradient">atenção</span> em <span className="text-gradient">reservas e pedidos</span>.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Nosso trabalho começa entendendo seu cardápio, público e operação.<br />
            E termina com sua casa cheia e delivery bombando.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Diagnóstico Gastronômico', desc: 'Análise profunda do cardápio, operação e experiência do cliente', icon: Utensils },
            { title: 'Plano Estratégico Personalizado', desc: 'Plano claro para aumentar reservas, pedidos e recorrência', icon: Target },
            { title: 'Mentoria Gastronômica', desc: 'Sessões semanais para decisões melhores e operação mais lucrativa', icon: Users },
            { title: 'Criação de Conteúdo Gastronômico', desc: 'Fotos e vídeos profissionais de pratos, ambiente e equipe', icon: Zap },
            { title: 'Dashboard de Performance', desc: 'Métricas e insights em tempo real para acompanhar vendas e engajamento', icon: BarChart3 },
            { title: 'Otimização de Crescimento', desc: 'O que funciona, escalamos. O que não performa, ajustamos. Crescimento com dados.', icon: TrendingUp }
          ].map((service, index) => (
            <div key={index} className="glass-card fade-in group cursor-pointer text-center md:text-left">
              <service.icon className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform mx-auto md:mx-0" />
              <h3 className="text-xl font-medium mb-4 text-foreground">{service.title}</h3>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionFood;
