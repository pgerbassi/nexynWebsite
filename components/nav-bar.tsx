'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState, useCallback } from 'react'

export function NavBar() {
  const [active, setActive] = useState('home')
  
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <Link href="#home" className="relative w-28 h-16">
          <Image
            src="/images/nexyn-logo.png"
            alt="Nexyn"
            fill
            className="object-fill "
            priority
          />
        </Link>
        
        <div className="md:flex items-center px-6 gap-8 bg-[#003366] bg-opacity-60 rounded-full">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Produtos', href: '#produtos' },
            { name: 'Time', href: '#time' },
            { name: 'Contato', href: '#contato' }
          ].map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "text-blue-200 hover:text-white",
                active === item.name.toLowerCase() && "text-white"
              )}
              onClick={() => {
                setActive(item.name.toLowerCase())
                if (item.href.startsWith('#')) {
                  scrollToSection(item.href.slice(1))
                }
              }}
            >
              <span className="w-full h-full flex items-center justify-center">
                {item.name}
              </span>
            </Button>
          ))}
        </div>
        
        <Button variant="secondary" className="bg-blue-500/10 backdrop-blur-sm text-white hover:bg-blue-500/20">
          Fale conosco
        </Button>
      </div>
    </nav>
  )
}

