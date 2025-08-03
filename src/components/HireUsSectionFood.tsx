
import { CheckCircle, Users, Search, ClipboardList, Settings, Calendar, Camera, Edit, ThumbsUp, Repeat, Send, BarChart3 } from 'lucide-react';

const HireUsSectionFood = () => {
  return (
    <section id="hire-us" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-light heading-tight mb-6">
            Pronto para <span className="text-gradient">crescer</span> sua franquia ou restaurante?
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Um plano de 4 meses para diagnosticar, executar e escalar seu negócio de food service.
            Com análise real, acompanhamento contínuo e métricas semanais.
          </p>
        </div>

        <div className="max-w-3xl mx-auto fade-in">
          <div className="grid gap-6">
            {[
              {
                icon: Users,
                title: 'Imersão no seu Negócio Food',
                subtitle: 'Entendimento do seu cardápio e operação',
                desc: 'Especialistas analisam seu restaurante ou franquia para identificar diferenciais e oportunidades.',
                periodo: 'Dias 1-3'
              },
              {
                icon: Search,
                title: 'Diagnóstico de Mercado',
                subtitle: 'Análise de concorrentes e tendências',
                desc: 'Mapeamos concorrentes, tendências e comportamento do consumidor no food service.',
                periodo: 'Dias 4-10'
              },
              {
                icon: ClipboardList,
                title: 'Plano de Ação Personalizado',
                subtitle: 'Estratégia para seu público',
                desc: 'Criamos um roteiro prático para aumentar vendas, engajamento e recorrência.',
                periodo: 'Dias 11-18'
              },
              {
                icon: Settings,
                title: 'Otimização de Processos',
                subtitle: 'Fluxo de atendimento e produção',
                desc: 'Ajustamos processos internos para garantir agilidade e qualidade na entrega.',
                periodo: 'Dias 19-23'
              },
              {
                icon: Calendar,
                title: 'Calendário de Produção',
                subtitle: 'Conteúdo e campanhas alinhados',
                desc: 'Planejamento de datas sazonais, promoções e lançamentos de novos pratos.',
                periodo: 'Dias 24-25'
              },
              {
                icon: Camera,
                title: 'Captação Gastronômica',
                subtitle: 'Fotos e vídeos de dar água na boca',
                desc: 'Produção de conteúdo visual focado em pratos, ambiente e experiência do cliente.',
                periodo: 'Recorrente: todo mês'
              },
              {
                icon: Edit,
                title: 'Criação e Edição de Conteúdo',
                subtitle: 'Material irresistível para redes sociais',
                desc: 'Transformamos imagens e vídeos em posts, stories e campanhas que vendem.',
                periodo: 'Dias 29-32'
              },
              {
                icon: ThumbsUp,
                title: 'Aprovação do Cliente',
                subtitle: 'Você aprova tudo antes de publicar',
                desc: 'Transparência total: nada vai ao ar sem seu aval.',
                periodo: 'Dias 33-34'
              },
              {
                icon: Repeat,
                title: 'Ajustes Finais',
                subtitle: 'Tudo do seu jeito',
                desc: 'Fazemos os ajustes necessários para garantir que tudo fique perfeito para sua marca.',
                periodo: 'Dias 35-36'
              },
              {
                icon: Send,
                title: 'Campanhas e Delivery',
                subtitle: 'Promoções e alcance ampliado',
                desc: 'Impulsionamos campanhas e promoções para atrair mais clientes e pedidos online.',
                periodo: 'Dias 37-38'
              },
              {
                icon: BarChart3,
                title: 'Relatórios e Métricas',
                subtitle: 'Resultados claros e mensuráveis',
                desc: 'Você recebe relatórios com dados de vendas, engajamento e crescimento.',
                periodo: 'Dias 39-40'
              },
            ].map((row, index) => (
              <div key={index} className="glass-card flex items-start gap-4 p-6 md:p-8">
                <div className="flex-shrink-0 flex flex-col items-center justify-center pt-1">
                  <CheckCircle className="w-7 h-7 text-primary mb-2" />
                  <row.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg md:text-xl mb-1 flex items-center gap-2">
                    {row.title}
                    <span className="text-xs font-normal text-muted-foreground bg-primary/10 rounded px-2 py-0.5 ml-2">{row.periodo}</span>
                  </div>
                  <div className="text-primary text-sm md:text-base font-medium leading-tight mb-1">{row.subtitle}</div>
                  <div className="text-muted-foreground text-sm md:text-base font-normal leading-tight">{row.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 bg-primary/10 rounded-lg p-4 text-primary text-sm font-semibold mb-2">
            <Camera className="w-8 h-8 text-primary" />
            Captações e produções de conteúdo gastronômico acontecem todos os meses durante os 120 dias do projeto.
          </div>
        </div>

        {/* Card de investimento mensal para food */}
        <div className="max-w-md mx-auto mt-8 mb-8 fade-in">
          <div className="glass-card flex flex-col items-center justify-center gap-2 p-6 text-center">
            <div className="font-semibold text-foreground text-lg md:text-xl mb-1">Investimento Mensal</div>
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">R$3.840<span className="text-lg font-normal text-muted-foreground">/mês</span></div>
            <div className="text-sm text-muted-foreground mb-0">
              Acesso completo a nossa plataforma SaaS, com sistema de entregas, acompanhamento semanal e relatórios. <span className="whitespace-nowrap">Sem taxas extras, sem surpresas.</span>
            </div>
            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold rounded px-3 py-1 mb-2">Vagas limitadas</div>
            <a
              id="whatsapp-cta-card"
              href="https://wa.me/5547996311903?text=Oi%2C%20quero%20entrar%20na%20fila%20de%20espera%20food.&utm_source=landing-food&utm_medium=button&utm_campaign=conversao-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 mt-2"
            >
              ACESSAR FILA DE ESPERA
            </a>
          </div>
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-sm text-muted-foreground mb-8">Clique no botão acima para entrar na lista de espera.</p>
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

export default HireUsSectionFood;
