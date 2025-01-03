'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string; // Added optional LinkedIn URL
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Flávio Marques",
    role: "CEO & CO-Founder",
    image: "/images/flavio.png",
    linkedin: "https://www.linkedin.com/in/fl%C3%A1vio-marques-inovacao/" // Added LinkedIn URL
  },
  {
    id: 2,
    name: "Lucas Pereira",
    role: "COO & CO-Founder",
    image: "/images/pereira.png",
    linkedin: "https://www.linkedin.com/in/lpera/" // Added LinkedIn URL

  },
  {
    id: 3,
    name: "Matheus Simões",
    role: "Head Comercial",
    image: "/images/matheus.png",
    linkedin: "https://www.linkedin.com/in/matheus-sim%C3%B5es-costa/" // Added LinkedIn URL
  },
  {
    id: 4,
    name: "Pablo Costa",
    role: "Software Developer",
    image: "/images/pablo.png",
    linkedin: "https://www.linkedin.com/in/pablo-gerbassi-desenvolvedor/" // Added LinkedIn URL
  }
]

export function TeamSection() {
  const [visibleMembers, setVisibleMembers] = useState(4)

  const loadMore = () => {
    setVisibleMembers(prevVisible => prevVisible + 4)
  }

  return (
    <section id="time" className="min-h-screen bg-[#001020] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <h2 className="text-5xl font-bold text-white">NOSSO TIME</h2>
            <span className="text-blue-400 text-3xl">(+)</span>
          </div>
          <p className="text-gray-400">Conheça os especialistas por trás da nossa tecnologia</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.slice(0, visibleMembers).map(member => (
            <div key={member.id} className="bg-[#001830] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        className="w-5 h-5"
                      />
                    </a>
                  )}
                </div>
                <p className="text-blue-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleMembers < teamMembers.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              variant="outline"
              className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Carregar Mais
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

