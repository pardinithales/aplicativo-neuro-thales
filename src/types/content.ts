export interface Topic {
  id: string
  title: string
  content: string
  duration: number // em minutos
  order: number
  isCompleted?: boolean
  isFavorite?: boolean
}

export interface Subtopic {
  id: string
  topicId: string
  title: string
  content: string
  duration: number
  order: number
  isCompleted?: boolean
}

export interface Chapter {
  id: string
  title: string
  description: string
  difficulty: 'Básico' | 'Intermediário' | 'Avançado'
  estimatedDuration: number // em minutos
  topics: Topic[]
  order: number
  isUnlocked?: boolean
  completionPercentage?: number
}

export interface UserProgress {
  userId: string
  chapterId: string
  topicId?: string
  completedTopics: string[]
  favoriteTopics: string[]
  lastAccessedAt: string
  totalTimeSpent: number // em minutos
}

export interface User {
  id: string
  email: string
  fullName: string
  avatar?: string
  createdAt: string
  subscription: 'free' | 'premium'
  progress: UserProgress[]
}

export interface ContentStats {
  totalChapters: number
  totalTopics: number
  averageDuration: number
  totalUsers: number
} 