import { Chapter, Topic } from '@/types/content'

export const mockTopics: Topic[] = [
  {
    id: '1',
    title: 'Introdução ao Exame Neurológico',
    content: `
# Introdução ao Exame Neurológico

O exame neurológico é uma ferramenta fundamental para avaliar o sistema nervoso central e periférico.

## Objetivos
- Identificar sinais de disfunção neurológica
- Localizar lesões no sistema nervoso
- Orientar investigações complementares

## Componentes Principais
1. **Anamnese neurológica**
2. **Exame do estado mental**
3. **Nervos cranianos**
4. **Sistema motor**
5. **Sistema sensitivo**
6. **Reflexos**
7. **Coordenação e marcha**

## Dicas Importantes
- Sempre compare lados direito e esquerdo
- Observe o paciente desde a entrada
- Documente achados de forma sistemática
    `,
    duration: 5,
    order: 1,
  },
  {
    id: '2',
    title: 'Exame do Estado Mental',
    content: `
# Exame do Estado Mental

Avaliação das funções cognitivas superiores.

## Componentes
### 1. Nível de Consciência
- **Alerta**: responde adequadamente
- **Sonolento**: desperta com estímulo verbal
- **Estupor**: desperta apenas com estímulo físico
- **Coma**: não desperta

### 2. Orientação
- **Temporal**: dia, mês, ano
- **Espacial**: local, cidade
- **Pessoal**: nome, idade

### 3. Atenção
- Teste dos dígitos (repetir números)
- Teste dos meses (falar de trás para frente)

### 4. Memória
- **Imediata**: repetir 3 palavras
- **Recente**: lembrar após 5 minutos
- **Remota**: eventos passados

## Mini Exame do Estado Mental (MEEM)
Pontuação máxima: 30 pontos
- Normal: ≥ 24 pontos
- Comprometimento leve: 18-23
- Comprometimento moderado: 12-17
- Comprometimento grave: < 12
    `,
    duration: 7,
    order: 2,
  }
]

export const mockChapters: Chapter[] = [
  {
    id: 'semiologia',
    title: 'Semiologia Neurológica',
    description: 'Exame neurológico completo e sistematizado',
    difficulty: 'Básico',
    estimatedDuration: 40,
    topics: mockTopics,
    order: 1,
    isUnlocked: true,
    completionPercentage: 0,
  },
  {
    id: 'cefaleia',
    title: 'Cefaleia e Enxaqueca',
    description: 'Diagnóstico diferencial e tratamento',
    difficulty: 'Intermediário',
    estimatedDuration: 30,
    topics: [
      {
        id: '3',
        title: 'Classificação das Cefaleias',
        content: `
# Classificação das Cefaleias

## Cefaleias Primárias
### 1. Enxaqueca
- **Sem aura**: dor unilateral, pulsátil, 4-72h
- **Com aura**: sintomas neurológicos focais precedem a dor

### 2. Cefaleia Tensional
- Dor bilateral, em aperto/pressão
- Não pulsátil, leve a moderada

### 3. Cefaleia em Salvas
- Dor unilateral intensa, periorbital
- Duração: 15min-3h
- Sintomas autonômicos ipsilaterais

## Cefaleias Secundárias
- Trauma craniano
- Distúrbios vasculares
- Infecções
- Hipertensão intracraniana
- Uso/retirada de substâncias

## Sinais de Alarme
- Início súbito ("pior dor da vida")
- Mudança no padrão habitual
- Febre + rigidez nucal
- Déficits neurológicos
- Idade > 50 anos (primeira vez)
        `,
        duration: 8,
        order: 1,
      }
    ],
    order: 2,
    isUnlocked: true,
    completionPercentage: 0,
  },
  {
    id: 'avc',
    title: 'AVC e Emergências',
    description: 'Reconhecimento e manejo inicial',
    difficulty: 'Avançado',
    estimatedDuration: 50,
    topics: [
      {
        id: '4',
        title: 'Reconhecimento do AVC',
        content: `
# Reconhecimento do AVC

## Escala FAST
### F - Face (Face)
- Peça para sorrir
- Observe assimetria facial

### A - Arms (Braços)
- Peça para levantar os braços
- Observe queda de um lado

### S - Speech (Fala)
- Peça para repetir frase
- Observe disartria/afasia

### T - Time (Tempo)
- Anote horário dos sintomas
- **Janela terapêutica: 4,5h**

## Tipos de AVC
### AVC Isquêmico (85%)
- Trombótico
- Embólico
- Lacunar

### AVC Hemorrágico (15%)
- Hemorragia intracerebral
- Hemorragia subaracnóidea

## Manejo Inicial
1. **ABC** (vias aéreas, respiração, circulação)
2. **Glicemia** (descartar hipoglicemia)
3. **TC crânio** (descartar hemorragia)
4. **Trombólise** (se indicada)
        `,
        duration: 10,
        order: 1,
      }
    ],
    order: 3,
    isUnlocked: false,
    completionPercentage: 0,
  }
] 