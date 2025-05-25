import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle, Heart, Share } from 'lucide-react'
import { mockChapters } from '@/lib/mockData'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
    topicId: string
  }
}

export default async function TopicPage({ params }: PageProps) {
  const { id, topicId } = await params
  const chapter = mockChapters.find(c => c.id === id)
  
  if (!chapter) {
    notFound()
  }

  const topic = chapter.topics.find(t => t.id === topicId)
  
  if (!topic) {
    notFound()
  }

  const currentIndex = chapter.topics.findIndex(t => t.id === topicId)
  const nextTopic = chapter.topics[currentIndex + 1]
  const prevTopic = chapter.topics[currentIndex - 1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href={`/capitulos/${id}`} className="mr-3">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">{topic.title}</h1>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{topic.duration} min</span>
                <span className="mx-2">•</span>
                <span>{currentIndex + 1} de {chapter.topics.length}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-2">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-primary-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / chapter.topics.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-none">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <TopicContent content={topic.content} />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mb-6">
            {prevTopic ? (
              <Link 
                href={`/capitulos/${id}/topicos/${prevTopic.id}`}
                className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Anterior
              </Link>
            ) : (
              <div></div>
            )}

            {nextTopic ? (
              <Link 
                href={`/capitulos/${id}/topicos/${nextTopic.id}`}
                className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Próximo
                <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
              </Link>
            ) : (
              <Link 
                href={`/capitulos/${id}`}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Concluir Capítulo
              </Link>
            )}
          </div>

          {/* Mark as Complete */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Marcar como concluído</h3>
                <p className="text-sm text-gray-600">Você terminou de ler este tópico?</p>
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Concluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TopicContent({ content }: { content: string }) {
  const parseMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-5">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-medium text-gray-900 mb-2 mt-4">{line.slice(4)}</h3>
        }
        
        if (line.includes('**')) {
          const parts = line.split('**')
          return (
            <p key={index} className="text-gray-700 mb-3 leading-relaxed">
              {parts.map((part, i) => 
                i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part
              )}
            </p>
          )
        }
        
        if (line.startsWith('- ')) {
          return <li key={index} className="text-gray-700 mb-1 ml-4 list-disc">{line.slice(2)}</li>
        }
        if (line.match(/^\d+\. /)) {
          return <li key={index} className="text-gray-700 mb-1 ml-4 list-decimal">{line.replace(/^\d+\. /, '')}</li>
        }
        
        if (line.trim() === '') {
          return <br key={index} />
        }
        
        return <p key={index} className="text-gray-700 mb-3 leading-relaxed">{line}</p>
      })
  }

  return <div className="prose prose-sm max-w-none">{parseMarkdown(content)}</div>
} 