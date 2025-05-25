import Link from 'next/link'
import { Brain, BookOpen, Clock, Users, Star, Play } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="text-center pt-8 pb-6 px-4">
        <div className="flex items-center justify-center mb-4">
          <Brain className="h-10 w-10 text-primary-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">
            Neuronus
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Neurologia sem complicação no seu bolso
        </p>
      </header>

      {/* Stats Cards */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-3 gap-3">
          <StatCard icon={<BookOpen className="h-5 w-5" />} number="12" label="Capítulos" />
          <StatCard icon={<Clock className="h-5 w-5" />} number="5min" label="Por tópico" />
          <StatCard icon={<Users className="h-5 w-5" />} number="1.2k" label="Estudantes" />
        </div>
      </div>

      {/* Featured Chapters */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Capítulos em Destaque</h2>
        <div className="space-y-3">
          <ChapterCard
            title="Semiologia Neurológica"
            description="Exame neurológico completo e sistematizado"
            topics={8}
            duration="40min"
            difficulty="Básico"
            href="/capitulos/semiologia"
          />
          <ChapterCard
            title="Cefaleia e Enxaqueca"
            description="Diagnóstico diferencial e tratamento"
            topics={6}
            duration="30min"
            difficulty="Intermediário"
            href="/capitulos/cefaleia"
          />
          <ChapterCard
            title="AVC e Emergências"
            description="Reconhecimento e manejo inicial"
            topics={10}
            duration="50min"
            difficulty="Avançado"
            href="/capitulos/avc"
          />
        </div>
      </div>

      {/* Quick Access */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickAccessCard
            icon={<Star className="h-6 w-6" />}
            title="Favoritos"
            subtitle="Seus tópicos salvos"
            href="/favoritos"
          />
          <QuickAccessCard
            icon={<Play className="h-6 w-6" />}
            title="Continuar"
            subtitle="Onde você parou"
            href="/continuar"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 pb-8">
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Comece sua jornada
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Faça login para acessar todo o conteúdo e acompanhar seu progresso
          </p>
          <div className="space-y-2">
            <Link href="/auth/login" className="btn-primary w-full block text-center text-sm">
              Entrar
            </Link>
            <Link href="/auth/register" className="btn-secondary w-full block text-center text-sm">
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ 
  icon, 
  number, 
  label 
}: { 
  icon: React.ReactNode
  number: string
  label: string 
}) {
  return (
    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-200">
      <div className="text-primary-600 mb-1 flex justify-center">
        {icon}
      </div>
      <div className="text-lg font-bold text-gray-900">{number}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  )
}

function ChapterCard({ 
  title, 
  description, 
  topics, 
  duration, 
  difficulty,
  href 
}: { 
  title: string
  description: string
  topics: number
  duration: string
  difficulty: string
  href: string
}) {
  const difficultyColor = {
    'Básico': 'bg-green-100 text-green-800',
    'Intermediário': 'bg-yellow-100 text-yellow-800',
    'Avançado': 'bg-red-100 text-red-800'
  }[difficulty] || 'bg-gray-100 text-gray-800'

  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 text-xs mb-3">{description}</p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{topics} tópicos</span>
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  )
}

function QuickAccessCard({ 
  icon, 
  title, 
  subtitle,
  href 
}: { 
  icon: React.ReactNode
  title: string
  subtitle: string
  href: string
}) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
        <div className="text-primary-600 mb-2 flex justify-center">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <p className="text-gray-600 text-xs">{subtitle}</p>
      </div>
    </Link>
  )
} 