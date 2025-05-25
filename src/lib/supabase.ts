import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Tipos para o banco de dados
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'doctor' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'doctor' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'doctor' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      patients: {
        Row: {
          id: string
          doctor_id: string
          full_name: string
          birth_date: string
          cpf: string
          phone: string | null
          email: string | null
          address: string | null
          emergency_contact: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          doctor_id: string
          full_name: string
          birth_date: string
          cpf: string
          phone?: string | null
          email?: string | null
          address?: string | null
          emergency_contact?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          doctor_id?: string
          full_name?: string
          birth_date?: string
          cpf?: string
          phone?: string | null
          email?: string | null
          address?: string | null
          emergency_contact?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
} 