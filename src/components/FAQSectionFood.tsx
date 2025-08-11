import { useState } from 'react';

const FAQSectionFood = () => {
  return (
    <section id="faq" className="py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Dúvidas frequentes sobre gastronomia?<br />
            <span className="text-gradient">Nós temos as respostas.</span>
          </h2>
        </div>
        <div className="space-y-4 fade-in">
          {[
            {
              question: "Por que meu restaurante tem movimento mas não lucra?",
              answer: "Nem sempre casa cheia significa lucro. Analisamos custos, cardápio e operação para aumentar sua margem."
            },
            {
              question: "Como aumentar pedidos no delivery?",
              answer: "Fotos profissionais, promoções estratégicas e presença digital aumentam o desejo e os pedidos."
            },
            {
              question: "Como criar promoções que realmente funcionam?",
              answer: "Promoção boa é aquela que traz cliente novo e faz o antigo voltar. Montamos campanhas que geram recorrência."
            },
            {
              question: "Vale a pena investir em influenciadores?",
              answer: "Depende do perfil do seu público e do influenciador. Ajudamos a escolher e negociar as melhores parcerias."
            },
            {
              question: "Como saber se minha operação está eficiente?",
              answer: "Acompanhamos indicadores semanais e sugerimos ajustes para melhorar cada etapa do atendimento."
            },
            {
              question: "Como destacar meu restaurante nas redes sociais?",
              answer: "Conteúdo autêntico, bastidores e histórias reais conectam mais do que só fotos de pratos."
            }
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none flex justify-between items-center py-4 px-6"
      >
        <span className="font-medium text-foreground text-lg">{question}</span>
        <span className="text-primary text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQSectionFood;
