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
  },
  {
    id: '3',
    title: 'Nervos Cranianos',
    content: `
# Nervos Cranianos

Avaliação sistemática dos 12 pares de nervos cranianos.

## I - Olfatório
- **Função**: Olfato
- **Teste**: Substâncias aromáticas (café, menta)
- **Alterações**: Anosmia, hiposmia

## II - Óptico
- **Função**: Visão
- **Testes**: 
  - Acuidade visual
  - Campos visuais
  - Fundo de olho
- **Alterações**: Amaurose, hemianopsia

## III - Oculomotor
- **Função**: Movimentos oculares, pupila, pálpebra
- **Testes**:
  - Movimentos extraoculares
  - Reflexo pupilar
  - Ptose palpebral
- **Alterações**: Diplopia, midríase, ptose

## IV - Troclear
- **Função**: Músculo oblíquo superior
- **Teste**: Olhar para baixo e medial
- **Alterações**: Diplopia vertical

## V - Trigêmeo
- **Função**: Sensibilidade facial, mastigação
- **Testes**:
  - Sensibilidade tátil, dolorosa, térmica
  - Força dos músculos mastigatórios
  - Reflexo córneo-palpebral
- **Alterações**: Neuralgia, anestesia facial

## VI - Abducente
- **Função**: Músculo reto lateral
- **Teste**: Abdução ocular
- **Alterações**: Diplopia horizontal

## VII - Facial
- **Função**: Mímica facial, gustação, lacrimejamento
- **Testes**:
  - Movimentos faciais simétricos
  - Gustação (2/3 anteriores da língua)
- **Alterações**: Paralisia facial, ageusia

## VIII - Vestibulococlear
- **Função**: Audição e equilíbrio
- **Testes**:
  - Acuidade auditiva
  - Weber e Rinne
  - Nistagmo
- **Alterações**: Surdez, vertigem, nistagmo

## IX - Glossofaríngeo
- **Função**: Gustação, deglutição, reflexo do vômito
- **Testes**:
  - Reflexo do vômito
  - Gustação (1/3 posterior da língua)
- **Alterações**: Disfagia, ageusia

## X - Vago
- **Função**: Fonação, deglutição, funções viscerais
- **Testes**:
  - Fonação ("ah")
  - Elevação do palato
- **Alterações**: Disfonia, disfagia

## XI - Acessório
- **Função**: Músculos trapézio e esternocleidomastóideo
- **Testes**:
  - Elevação dos ombros
  - Rotação da cabeça
- **Alterações**: Fraqueza cervical

## XII - Hipoglosso
- **Função**: Movimentos da língua
- **Testes**:
  - Protrusão da língua
  - Movimentos laterais
- **Alterações**: Atrofia, fasciculações, desvio
    `,
    duration: 12,
    order: 3,
  }
]

export const mockChapters: Chapter[] = [
  {
    id: 'semiologia',
    title: 'Semiologia Neurológica',
    description: 'Exame neurológico completo e sistematizado',
    difficulty: 'Básico',
    estimatedDuration: 60,
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