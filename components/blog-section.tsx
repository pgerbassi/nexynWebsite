'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "O Impacto da IA no E-commerce em 2024",
    excerpt: "Descubra como a Inteligência Artificial está revolucionando o setor de e-commerce e impulsionando as vendas online.",
    date: "15 Mar 2024",
    readTime: "5 min",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "5 Estratégias de IA para Aumentar a Conversão",
    excerpt: "Aprenda técnicas avançadas de IA para melhorar suas taxas de conversão e maximizar o ROI do seu e-commerce.",
    date: "10 Mar 2024",
    readTime: "7 min",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "Personalização em Tempo Real com IA",
    excerpt: "Explore como a personalização baseada em IA pode transformar a experiência do cliente e aumentar a fidelização.",
    date: "5 Mar 2024",
    readTime: "6 min",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export function BlogSection() {
  const [visiblePosts, setVisiblePosts] = useState(3)

  const loadMore = () => {
    setVisiblePosts(prevVisible => prevVisible + 3)
  }

  return (
    <section id="blog" className="min-h-screen bg-[#001020] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <h2 className="text-5xl font-bold text-white">BLOG</h2>
            <span className="text-blue-400 text-3xl">(+)</span>
          </div>
          <p className="text-gray-400">Insights e novidades sobre IA no e-commerce</p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, visiblePosts).map(post => (
            <div key={post.id} className="bg-[#001830] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < blogPosts.length && (
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

