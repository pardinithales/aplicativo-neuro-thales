import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, Lock } from 'lucide-react'
import { mockChapters } from '@/lib/mockData'
import { Chapter } from '@/types/content'

export default function CapitulosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-3 flex items-center">
          <Link href="/" className="mr-3">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Capítulos</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="space-y-4">
          {mockChapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  const difficultyColor = {
    'Básico': 'bg-green-100 text-green-800',
    'Intermediário': 'bg-yellow-100 text-yellow-800',
    'Avançado': 'bg-red-100 text-red-800'
  }[chapter.difficulty] || 'bg-gray-100 text-gray-800'

  const isLocked = !chapter.isUnlocked

  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 ${isLocked ? 'opacity-60' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="font-semibold text-gray-900 text-lg mr-2">{chapter.title}</h3>
            {isLocked && <Lock className="h-4 w-4 text-gray-400" />}
          </div>
          <p className="text-gray-600 text-sm mb-3">{chapter.description}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
          {chapter.difficulty}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{chapter.topics.length} tópicos</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{chapter.estimatedDuration}min</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progresso</span>
          <span>{chapter.completionPercentage || 0}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${chapter.completionPercentage || 0}%` }}
          ></div>
        </div>
      </div>

      {/* Action Button */}
      {isLocked ? (
        <button className="w-full py-2 px-4 bg-gray-300 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
          Bloqueado
        </button>
      ) : (
        <Link 
          href={`/capitulos/${chapter.id}`}
          className="block w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium text-center transition-colors"
        >
                     {(chapter.completionPercentage || 0) > 0 ? 'Continuar' : 'Começar'}
        </Link>
      )}
    </div>
  )
} 