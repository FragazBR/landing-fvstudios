import React from 'react';

const LeadStep2 = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-16">
      <div className="max-w-lg w-full glass-card p-8 flex flex-col items-center text-center gap-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Falta mais<br />um passo...</h1>
        <p className="text-lg md:text-xl font-medium mb-4">Agende sua reunião com um dos nossos especialistas.</p>
        <a
          href="https://wa.me/5547996311903?text=Oi%2C%20quero%20agendar%20minha%20reuni%C3%A3o%20com%20um%20especialista!"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-8 py-4 mb-2"
        >
          QUERO FALAR AGORA
        </a>
        <div className="bg-primary/10 text-primary font-semibold rounded px-3 py-1 mb-2">-40% no custo de aquisição de clientes em 4 semanas</div>
        <blockquote className="text-muted-foreground text-base italic border-l-4 border-primary pl-4 mb-2">
          "Eles foram capazes de realmente entender qual era a essência do restaurante. Entender qual era a nossa necessidade e a forma que a gente gostaria de divulgar os nossos produtos."
        </blockquote>
        <div className="text-sm text-muted-foreground font-medium">Ricardo D'Aquino - CEO Restaurante Drummond, Diretor Geral Qa+ Franquias, Expert iFood Brasil</div>
      </div>
    </section>
  );
};

export default LeadStep2;
