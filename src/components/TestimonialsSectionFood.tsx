const TestimonialsSectionFood = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Depois da consultoria, nosso delivery triplicou e o salão vive cheio. O conteúdo realmente faz diferença!",
              author: "Marina Souza",
              role: "Sócia, Restaurante Sabor & Arte",
              metric: "+200% Pedidos Delivery",
              avatar: "/marina.png"
            },
            {
              quote: "A estratégia de datas sazonais e promoções mudou o jogo. Nunca vendemos tanto em datas especiais!",
              author: "Carlos Lima",
              role: "Proprietário, Pizzaria Don Carlo",
              metric: "+150% Vendas em datas especiais",
              avatar: "/carlos.png"
            },
            {
              quote: "O acompanhamento semanal e as fotos profissionais elevaram o padrão do nosso restaurante.",
              author: "Fernanda Ribeiro",
              role: "Chef Executiva, Bistrô da Fê",
              metric: "+120% Engajamento Instagram",
              avatar: "/fernanda.png"
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
                    src={testimonial.avatar || '/public/placeholder.svg'}
                    srcSet={`${testimonial.avatar || '/placeholder.svg'} 1x, ${(testimonial.avatar && testimonial.avatar.replace(/(\.[a-z]+)$/i, '@2x$1')) || '/placeholder.svg'} 2x`}
                    sizes="(max-width: 768px) 64px, 80px"
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
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

export default TestimonialsSectionFood;
