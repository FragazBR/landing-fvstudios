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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { number: '+ de 500', label: 'clientes satisfeitos em SC', icon: Users },
            { number: '2x', label: 'Crescimento em 90 Dias', icon: TrendingUp },
            { number: '96%', label: 'Satisfação dos Clientes', icon: CheckCircle }
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in glass-card">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl lg:text-5xl font-light text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
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