// Declaração para evitar erro TS de propriedades customizadas no window
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}
import { CheckCircle } from 'lucide-react';

const HireUsSection = () => {
  return (
    <section id="hire-us" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Pronto para <span className="text-gradient">crescer</span> seu negócio?
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Um plano de 4 meses para diagnosticar, executar e escalar.
            Com análise real, acompanhamento contínuo e métricas semanais.
          </p>
        </div>

        <div className="max-w-6xl mx-auto fade-in">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 sm:p-6 text-base sm:text-lg font-medium text-foreground">Etapa</th>
                      <th className="text-center p-4 sm:p-6 text-base sm:text-lg font-medium text-foreground">Mês 1 – Diagnóstico</th>
                      <th className="text-center p-4 sm:p-6 text-base sm:text-lg font-medium text-foreground">Meses 2-4 – Execução</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                  {[
                    { step: 'Sessões Estratégicas', month1: true, months24: false },
                    { step: 'Análise de Mercado', month1: true, months24: false },
                    { step: 'Plano Estratégico', month1: true, months24: false },
                    { step: 'Consultorias Individuais', month1: false, months24: true },
                    { step: 'Criação de Conteúdo', month1: false, months24: true },
                    { step: 'Relatórios Semanais', month1: false, months24: true },
                    { step: 'Otimização de Crescimento', month1: false, months24: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/30">
                      <td className="p-4 sm:p-6 font-medium">{row.step}</td>
                      <td className="p-4 sm:p-6 text-center">
                        {row.month1 ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground/50">–</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-6 text-center">
                        {row.months24 ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground/50">–</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-border/50">
                    <td className="p-4 sm:p-6 font-semibold text-foreground text-base sm:text-lg">Investimento Mensal</td>
                    <td className="p-4 sm:p-6 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-gradient">R$1,499.00</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-gradient">R$3,499.00<span className="text-xs sm:text-base font-normal text-muted-foreground">/month</span></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 fade-in">
          <div className="flex justify-center mb-8">
            <a
              id="whatsapp-cta"
              href="https://wa.me/5547996311903?text=Oi%2C%20quero%20entrar%20na%20fila%20de%20espera.&utm_source=landing&utm_medium=button&utm_campaign=conversao-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'whatsapp_click', {
                    event_category: 'engagement',
                    event_label: 'Botão WhatsApp CTA',
                    value: 1,
                  });
                }
                if (window.fbq) {
                  window.fbq('trackCustom', 'whatsapp_click');
                }
              }}
            >
              ACESSAR FILA DE ESPERA
            </a>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Clique no botão para entrar na lista de espera.</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <span>Seus dados estão seguros conosco. Seguimos padrões avançados de privacidade e segurança.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;