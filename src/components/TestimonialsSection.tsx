const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Eles foram capazes de realmente entender qual era a essência do restaurante. Entender qual era a nossa necessidade e a forma que a gente gostaria de divulgar os nossos produtos.",
              author: "Ricardo D'Aquino",
              role: "CEO Restaurante Drummond, Diretor Geral Qa+ Franquias, Expert iFood Brasil",
              metric: "+180% Faturamento",
              avatar: "/ricardo.png"
            },
            {
              quote: "Eu só queria, realmente, muito indicar, porque quando a gente encontra pessoas assim, que são batalhadoras.. e vão lá domingo de manhã pra fazer conteúdo pra Fabrica!.",
              author: "Vannessa Macena",
              role: "CEO, Franquia Mundo di chocolate",
              metric: "+110% Leads",
              avatar: "/vanessa.png"
            },
            {
              quote: "Excelente trabalho, atendimento e parceria! Voces são baita parceiros da Pizza Bis, muito obrigado Franco e Suzana!",
              author: "Luis Eduardo Kist",
              role: "Presidente, Pizza Bis Franchising",
              metric: "+240% Engajamento",
              avatar: "/luiseduardo.png"
            }
          ].map((testimonial, index) => (
            <div key={index} className="glass-card fade-in flex flex-col items-center text-center">
              <div className="text-2xl font-light text-primary mb-4">{testimonial.metric}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    srcSet={testimonial.avatar
                      ? `${testimonial.avatar} 1x, ${testimonial.avatar.replace(/(\.[a-z]+)$/i, '@2x$1')} 2x`
                      : '/placeholder.svg 1x, /placeholder.svg 2x'}
                    sizes="(max-width: 600px) 80px, 80px"
                    alt={testimonial.author}
                    className="w-20 h-20 min-w-[80px] min-h-[80px] rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;