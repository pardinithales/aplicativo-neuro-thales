import Link from 'next/link'
import { Brain, Users, FileText, BarChart3, Shield, Stethoscope } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Brain className="h-12 w-12 text-primary-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            Aplicativo de Neurologia
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Uma plataforma moderna para auxiliar profissionais de neurologia no 
          diagnóstico e acompanhamento de pacientes
        </p>
      </header>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Users className="h-8 w-8" />}
          title="Gestão de Pacientes"
          description="Cadastre e gerencie informações completas dos seus pacientes de forma organizada e segura."
        />
        <FeatureCard
          icon={<FileText className="h-8 w-8" />}
          title="Histórico Médico"
          description="Mantenha um registro detalhado do histórico médico e evolução de cada paciente."
        />
        <FeatureCard
          icon={<Stethoscope className="h-8 w-8" />}
          title="Ferramentas de Diagnóstico"
          description="Acesse ferramentas especializadas para auxiliar no diagnóstico neurológico."
        />
        <FeatureCard
          icon={<BarChart3 className="h-8 w-8" />}
          title="Relatórios e Estatísticas"
          description="Gere relatórios detalhados e visualize estatísticas dos seus atendimentos."
        />
        <FeatureCard
          icon={<Shield className="h-8 w-8" />}
          title="Segurança de Dados"
          description="Seus dados e dos pacientes são protegidos com criptografia de ponta."
        />
        <FeatureCard
          icon={<Brain className="h-8 w-8" />}
          title="Interface Intuitiva"
          description="Design moderno e intuitivo, desenvolvido especificamente para profissionais da saúde."
        />
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="card max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Comece agora
          </h2>
          <p className="text-gray-600 mb-6">
            Faça login ou crie sua conta para começar a usar o aplicativo.
          </p>
          <div className="space-y-3">
            <Link href="/auth/login" className="btn-primary w-full block text-center">
              Fazer Login
            </Link>
            <Link href="/auth/register" className="btn-secondary w-full block text-center">
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )
} 