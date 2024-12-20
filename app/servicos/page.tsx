import { ServiceCard } from '@/components/service-card'
import { FilterButton } from '@/components/filter-button'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#001020]">
      {/* Decorative dots */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-blue-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-bold text-white">SERVIÇOS</h1>
            <span className="text-blue-400 text-3xl">(+)</span>
          </div>
          <p className="text-gray-400">Nossas soluções em IA para seu negócio</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            number="1"
            title="DESENVOLVIMENTO DE AGENTES AUTÔNOMOS"
            variant="light"
          />
          <ServiceCard
            number="2"
            title="CONSULTORIA EMPRESARIAL"
            variant="dark"
          />
          <ServiceCard
            number="3"
            title="DESENVOLVIMENTO DE CHATBOTS"
            variant="primary"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          <FilterButton label="Desenvolvimento de Estratégia" isActive />
          <FilterButton label="Avaliação de Performance" />
          <FilterButton label="Identificação de Casos de Uso" />
          <FilterButton label="Avaliação de Viabilidade" />
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">
            Avaliação de Viabilidade
          </h2>
          <p>
            Aventurar-se em iniciativas de IA sem avaliar sua viabilidade pode levar ao desperdício de recursos com pouco retorno. 
            Nossa Avaliação de Viabilidade fornece uma análise rigorosa dos projetos de IA propostos, garantindo que eles se baseiem em 
            fundamentos de praticidade, viabilidade e potencial retorno sobre o investimento.
          </p>
          <p>
            Com uma abordagem meticulosa, nossos consultores avaliam os aspectos técnicos, operacionais e financeiros de suas aspirações em IA. 
            Esta avaliação abrangente garante que cada projeto de IA que você empreenda seja acionável e esteja alinhado com a infraestrutura, 
            objetivos e recursos do seu negócio.
          </p>
        </div>
      </div>
    </main>
  )
}

