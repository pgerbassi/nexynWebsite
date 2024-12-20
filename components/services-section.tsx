'use client'

import { useState } from 'react'
import { ServiceCard } from '@/components/service-card'

const services = [
  {
    id: 1,
    title: "PRIMEIRO CHECKOUT BASEADO EM IA DA AMÉRICA LATINA",
    content: "O primeiro checkout IA based da américa-latina, o mais fácil de usar, o mais personalizável e o que mais converte. Use todo o poder da IA para impulsionar a parte mais relevante do funil de aquisição do seu e-commerce."
  },
  {
    id: 2,
    title: "IA CHATBOT PARA VENDAS",
    content: "Um time multi-disciplinar de agentes de IA focados em aumentar as vendas do seu e-commerce, seja apoiando o cliente no seu site a comprar mais e melhor, recuperando carrinhos abandonados e pedidos rejeitados ou criando campanhas para aumentar o LTV da sua base de clientes."
  },
  {
    id: 3,
    title: "AGENTE DE IA PARA OTIMIZAÇÃO DE LOJA",
    content: "Nossos agentes de IA especialistas em análise, conversão e copy podem analisar os seus concorrentes e a sua loja para propor otimizações na sua estrutura para torná-la o mais alinhada às melhores práticas dos e-commerce que mais vendem e convertem no mundo."
  }
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="produtos" className="min-h-screen bg-[#001020] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <h2 className="text-5xl font-bold text-white">PRODUTOS</h2>
            <span className="text-blue-400 text-3xl">(+)</span>
          </div>
          <p className="text-gray-400">Nossas soluções em IA para seu negócio</p>
        </div>

        {/* Service Cards as Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.id.toString()}
              title={service.title}
              isActive={activeService.id === service.id}
              onClick={() => setActiveService(service)}
            />
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
          <h3 className="text-2xl font-bold text-white">
            {activeService.title}
          </h3>
          <p>
            {activeService.content}
          </p>
        </div>
      </div>
    </section>
  )
}

