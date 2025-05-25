import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, CheckCircle } from 'lucide-react'
import { mockChapters } from '@/lib/mockData'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const { id } = await params
  const chapter = mockChapters.find(c => c.id === id)
  
  if (!chapter) {
    notFound()
  }

  const difficultyColor = {
    'Básico': 'bg-green-100 text-green-800',
    'Intermediário': 'bg-yellow-100 text-yellow-800',
    'Avançado': 'bg-red-100 text-red-800'
  }[chapter.difficulty] || 'bg-gray-100 text-gray-800'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-3 flex items-center">
          <Link href="/capitulos" className="mr-3">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-900">{chapter.title}</h1>
            <div className="flex items-center mt-1 space-x-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
                {chapter.difficulty}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{chapter.estimatedDuration}min</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Info */}
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <p className="text-gray-600 text-sm mb-3">{chapter.description}</p>
        
        {/* Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progresso do capítulo</span>
            <span>{chapter.completionPercentage || 0}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${chapter.completionPercentage || 0}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{chapter.topics.length} tópicos</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span>0 concluídos</span>
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tópicos</h2>
        <div className="space-y-3">
          {chapter.topics.map((topic, index) => (
            <TopicCard 
              key={topic.id} 
              topic={topic} 
              chapterId={chapter.id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TopicCard({ 
  topic, 
  chapterId, 
  index 
}: { 
  topic: any
  chapterId: string
  index: number
}) {
  const isCompleted = topic.isCompleted || false

  return (
    <Link href={`/capitulos/${chapterId}/topicos/${topic.id}`} className="block">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded mr-3">
                {index + 1}
              </span>
              <h3 className="font-medium text-gray-900 text-sm">{topic.title}</h3>
              {isCompleted && (
                <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
              )}
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{topic.duration} min</span>
            </div>
          </div>
          <div className="ml-3">
            {isCompleted ? (
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
            ) : (
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-500">{index + 1}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
} 