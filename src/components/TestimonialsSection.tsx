const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "A Brand Scale transformou totalmente nossa presença digital. O faturamento cresceu 180% em apenas 4 meses.",
              author: "Sarah Chen",
              role: "CEO, TechFlow Solutions",
              metric: "+180% Faturamento"
            },
            {
              quote: "A abordagem estratégica nos ajudou a clarear o posicionamento e atrair clientes ideais de forma consistente.",
              author: "Marcus Rivera",
              role: "Fundador, Design Studio",
              metric: "+250% Leads"
            },
            {
              quote: "Finalmente, uma consultoria que entrega o que promete. Nossa autoridade de marca nunca foi tão forte.",
              author: "Elena Vasquez",
              role: "Diretora, Innovation Lab",
              metric: "+300% Engajamento"
            }
          ].map((testimonial, index) => (
            <div key={index} className="glass-card fade-in">
              <div className="text-2xl font-light text-primary mb-4">{testimonial.metric}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
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