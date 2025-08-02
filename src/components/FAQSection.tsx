import { useState } from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Dúvidas frequentes?<br />
            <span className="text-gradient">Nós temos as respostas.</span>
          </h2>
        </div>

        <div className="space-y-4 fade-in">
          {[
            {
              question: "Por que tenho seguidores mas não tenho engajamento?",
              answer: "Seguidores sem engajamento geralmente indicam desalinhamento entre seu conteúdo e o interesse do público, ou conteúdos que não incentivam interação. Nós identificamos e corrigimos esses pontos."
            },
            {
              question: "Com que frequência devo postar nas redes sociais?",
              answer: "Consistência importa mais do que quantidade. Criamos um calendário sustentável que mantém a qualidade e garante presença regular nas plataformas certas."
            },
            {
              question: "Como humanizar minha marca no digital?",
              answer: "Autenticidade vem de boas histórias, bastidores e mostrar as pessoas reais do seu negócio. Montamos estratégias que mostram sua personalidade sem perder a autoridade."
            },
            {
              question: "Por que meu conteúdo não tem alcance?",
              answer: "Os algoritmos priorizam conteúdos que geram engajamento rápido. Otimizamos sua estratégia para cada plataforma e comportamento do público."
            },
            {
              question: "Devo investir em anúncios ou focar no orgânico?",
              answer: "Ambos têm papel em uma estratégia completa. Analisamos seus objetivos, orçamento e mercado para definir o melhor equilíbrio entre orgânico e pago."
            },
            {
              question: "Como saber se meu conteúdo está performando?",
              answer: "Enviamos dashboards semanais com métricas que realmente importam para o seu negócio, não só curtidas e seguidores."
            },
            {
              question: "Perfil completo influencia no engajamento?",
              answer: "Com certeza. Seu perfil é sua vitrine digital. Otimizamos cada detalhe para comunicar valor e atrair o público certo."
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
        className="w-full text-left flex items-center justify-between p-6 focus:outline-none"
      >
        <span className="text-lg font-medium text-foreground pr-4">{question}</span>
        <div className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-0.5 bg-primary"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-0.5 h-4 bg-primary"></div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQSection;