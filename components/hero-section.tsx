'use client'

import { Button } from "@/components/ui/button"
import { useCallback } from 'react'
import Image from "next/image"

export function HeroSection() {
  const scrollToServices = useCallback(() => {
    const servicesSection = document.getElementById('servicos')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div id="home" className="relative min-h-screen bg-[#001020] overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
        <div className="max-w-3xl space-y-12">
        <div className="flex justify-center w-full">
            <div className="relative w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] aspect-[3/1]">
              <Image
                src="/images/nexyn-logo.png"
                alt="Nexyn"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-blue-400">COLOCANDO MAIS DINHEIRO NO BOLSO DO E-COMMERCE</span>{' '}
            <span className="text-gray-400">POR MEIO DE IA</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 pt-8">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Fale Conosco!
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/20 hover:bg-blue-500/10"
              onClick={scrollToServices}
            >
              Nossos Serviços
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

