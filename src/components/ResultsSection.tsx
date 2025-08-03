import { CheckCircle, TrendingUp, Users } from 'lucide-react';
import retrofuturisticBg from '@/assets/retrofuturistic-bg.jpg';

const ResultsSection = () => {
  return (
    <section 
      className="py-20 lg:py-32 relative"
      style={{
        backgroundImage: `url(${retrofuturisticBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { number: '+500', label: 'marcas atendidas em SC', icon: Users },
            { number: '3x', label: 'mais leads qualificados em até 90 dias', icon: TrendingUp },
            { number: 'até 10x +', label: 'de crescimento orgânico', icon: TrendingUp },
            { number: '96%', label: 'recomendam nossos serviços.', icon: CheckCircle }
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in glass-card">
              <stat.icon className="w-9 h-9 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;