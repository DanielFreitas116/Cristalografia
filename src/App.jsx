import { useMemo, useState } from "react";
import crystalBcc from "../assets/crystal-bcc-DaaSjEiW.jpg";
import crystalFcc from "../assets/crystal-fcc-Bf56Usbn.jpg";
import crystalFluorite from "../assets/crystal-fluorite-D2ypW7xE.jpg";
import crystalHcp from "../assets/crystal-hcp-C-PgxU2V.jpg";
import crystalPyrite from "../assets/crystal-pyrite-0LyVF97J.jpg";
import crystalQuartz from "../assets/crystal-quartz-ByeO7S3m.jpg";
import diffractionPattern from "../assets/diffraction-pattern-BPcyMrbO.jpg";
import heroCrystal from "../assets/hero-crystal-CgXRvmCt.jpg";
import symmetryOps from "../assets/symmetry-ops-CwMW30I4.jpg";

const navLinks = [
  { label: "Galeria", href: "#galeria" },
  { label: "Difração", href: "#difracao" },
  { label: "Matemática", href: "#matematica" },
  { label: "Sistemas", href: "#sistemas" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Quiz", href: "#quiz" },
  { label: "Autores", href: "#autores" }
];

const galleryItems = [
  {
    image: crystalBcc,
    system: "Cúbico",
    title: "Célula Cúbica de Corpo Centrado (BCC)",
    description:
      "Átomos nos vértices e no centro do cubo. Exemplos: ferro-α, crómio, tungsténio."
  },
  {
    image: crystalFcc,
    system: "Cúbico",
    title: "Cúbica de Faces Centradas (FCC)",
    description:
      "Átomos nos vértices e no centro de cada face. Exemplos: alumínio, cobre, ouro."
  },
  {
    image: crystalHcp,
    system: "Hexagonal",
    title: "Rede Hexagonal Compacta (HCP)",
    description:
      "Empacotamento denso com camadas ABAB. Exemplos: magnésio, zinco, titânio."
  },
  {
    image: crystalQuartz,
    system: "Hexagonal / Trigonal",
    title: "Quartzo (SiO2)",
    description:
      "Cristais prismáticos com faces terminais. Um dos minerais mais abundantes da crosta terrestre."
  },
  {
    image: crystalPyrite,
    system: "Cúbico",
    title: "Pirite (FeS2)",
    description:
      "Cristais cúbicos perfeitos com brilho metálico dourado, o famoso ouro dos tolos."
  },
  {
    image: crystalFluorite,
    system: "Cúbico",
    title: "Fluorite (CaF2)",
    description:
      "Cristais octaédricos translúcidos. Estrutura de referência para o tipo fluorite em cristalografia."
  }
];

const systems = [
  {
    name: "Cúbico",
    params: "a = b = c, α = β = γ = 90°",
    desc: "Máxima simetria. Exemplos: sal-gema, diamante, ouro.",
    color: "border-primary/60"
  },
  {
    name: "Tetragonal",
    params: "a = b ≠ c, α = β = γ = 90°",
    desc: "Dois eixos iguais e um distinto. Exemplos: rutilo, estanho branco.",
    color: "border-accent/60"
  },
  {
    name: "Ortorrômbico",
    params: "a ≠ b ≠ c, α = β = γ = 90°",
    desc: "Três eixos desiguais e ortogonais. Exemplos: enxofre, olivina, topázio.",
    color: "border-primary/50"
  },
  {
    name: "Hexagonal",
    params: "a = b ≠ c, α = β = 90°, γ = 120°",
    desc: "Base hexagonal com eixo principal distinto. Exemplos: grafite, zinco, berilo.",
    color: "border-accent/50"
  },
  {
    name: "Monoclínico",
    params: "a ≠ b ≠ c, α = γ = 90° ≠ β",
    desc: "Três eixos desiguais, um ângulo oblíquo. Exemplos: gesso, ortoclase, augite.",
    color: "border-primary/40"
  },
  {
    name: "Triclínico",
    params: "a ≠ b ≠ c, α ≠ β ≠ γ ≠ 90°",
    desc: "Três eixos desiguais, nenhum ângulo reto. Máxima assimetria.",
    color: "border-accent/40"
  },
  {
    name: "Trigonal (Romboédrico)",
    params: "a = b = c, α = β = γ ≠ 90°",
    desc: "Três eixos iguais com ângulos iguais mas diferentes de 90°. Exemplos: calcite, dolomite.",
    color: "border-primary/50"
  }
];

const applications = [
  {
    title: "Mineralogia",
    description:
      "Identificação e classificação de minerais pela sua estrutura cristalina, essencial na geologia e exploração de recursos naturais."
  },
  {
    title: "Física do Estado Sólido",
    description:
      "Compreensão das propriedades elétricas, magnéticas e ópticas dos materiais semicondutores e supercondutores."
  },
  {
    title: "Biologia Molecular",
    description:
      "Determinação da estrutura 3D de proteínas, ADN e vírus, fundamental para o desenvolvimento de fármacos."
  },
  {
    title: "Novos Materiais",
    description:
      "Design de ligas metálicas, cerâmicas avançadas, polímeros cristalinos e materiais para energia sustentável."
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "O que afirma a Lei de Bragg?",
    options: [
      "nλ = 2d sen(θ)",
      "E = mc²",
      "F = ma",
      "λ = h/p"
    ],
    correctIndex: 0,
    explanation:
      "A Lei de Bragg relaciona a condição de interferência construtiva com o ângulo de incidência, a distância interplanar e o comprimento de onda."
  },
  {
    id: 2,
    question: "Quantos grupos espaciais existem em 3D?",
    options: ["14", "32", "230", "7"],
    correctIndex: 2,
    explanation:
      "Existem 230 grupos espaciais, catalogados por Fedorov em 1891."
  },
  {
    id: 3,
    question: "Quantas redes de Bravais existem em três dimensões?",
    options: ["7", "14", "32", "230"],
    correctIndex: 1,
    explanation:
      "Existem exatamente 14 redes de Bravais em 3D, distribuídas pelos 7 sistemas cristalinos."
  },
  {
    id: 4,
    question:
      "Qual rotação não é permitida pela restrição cristalográfica em cristais periódicos?",
    options: ["Ordem 2", "Ordem 3", "Ordem 5", "Ordem 6"],
    correctIndex: 2,
    explanation:
      "Rotações de ordem 5 são incompatíveis com a periodicidade translacional."
  },
  {
    id: 5,
    question: "Quantos grupos pontuais cristalográficos existem?",
    options: ["7", "14", "32", "230"],
    correctIndex: 2,
    explanation:
      "Existem 32 grupos pontuais cristalográficos."
  }
];

const authors = [
  {
    name: "Auguste Bravais",
    years: "1811-1863",
    nationality: "Francês",
    contribution: "14 Redes de Bravais",
    detail:
      "Demonstrou matematicamente que existem exatamente 14 tipos distintos de redes cristalinas em 3D, classificadas nos 7 sistemas cristalinos.",
    formula: "R = n1a1 + n2a2 + n3a3"
  },
  {
    name: "William Henry Bragg & William Lawrence Bragg",
    years: "1862-1942 / 1890-1971",
    nationality: "Britânicos",
    contribution: "Lei de Bragg",
    detail:
      "Formularam a Lei de Bragg para difração de raios X, permitindo determinar a estrutura atómica dos cristais.",
    formula: "nλ = 2d sin θ"
  },
  {
    name: "Evgraf Fedorov",
    years: "1853-1919",
    nationality: "Russo",
    contribution: "230 Grupos Espaciais",
    detail:
      "Catalogou independentemente os 230 grupos espaciais em 1891, descrevendo todas as combinações possíveis de simetria em cristais tridimensionais."
  },
  {
    name: "Rosalind Franklin",
    years: "1920-1958",
    nationality: "Britânica",
    contribution: "Difração de raios X do ADN",
    detail:
      "As suas imagens de difração de raios X foram cruciais para a descoberta da estrutura em dupla hélice do ADN."
  },
  {
    name: "William Hallowes Miller",
    years: "1801-1880",
    nationality: "Britânico",
    contribution: "Índices de Miller (hkl)",
    detail:
      "Introduziu o sistema de indexação de planos cristalográficos usando três inteiros.",
    formula: "1/d²hkl = (h² + k² + l²) / a²"
  },
  {
    name: "Dorothy Hodgkin",
    years: "1910-1994",
    nationality: "Britânica",
    contribution: "Estruturas biomoleculares",
    detail:
      "Determinou estruturas 3D como penicilina, vitamina B12 e insulina por cristalografia de raios X."
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQuestion];
  const percentage = useMemo(
    () => Math.round((correctAnswers / quizQuestions.length) * 100),
    [correctAnswers]
  );

  function chooseAnswer(index) {
    if (showAnswer) return;

    setSelectedAnswer(index);
    setShowAnswer(true);
    setAnsweredCount((value) => value + 1);

    if (index === question.correctIndex) {
      setCorrectAnswers((value) => value + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((value) => value + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
      return;
    }

    setFinished(true);
  }

  function resetQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setCorrectAnswers(0);
    setAnsweredCount(0);
    setFinished(false);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#" className="flex items-center gap-2 text-primary font-display font-bold text-lg">
            Cristalografia
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroCrystal}
              alt="Estruturas cristalinas"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-background/90" />
          </div>

          <div className="relative container mx-auto text-center max-w-5xl pt-24">
            <p className="section-label mb-4">A Ciência da Estrutura Atómica</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary glow-text mb-6">
              Cristalografia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              O estudo da organização tridimensional dos átomos e moléculas nos sólidos cristalinos,
              revelando a simetria oculta da matéria.
            </p>
            <p className="text-sm text-muted-foreground/60 mb-8">
              Fundamentos de Matemática - Projeto Académico
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#matematica"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Matemática
              </a>
              <a
                href="#galeria"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                Galeria
              </a>
              <a
                href="#aplicacoes"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                Aplicações
              </a>
            </div>
          </div>
        </section>

        <section id="galeria" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Exemplos</p>
              <h2 className="section-title mb-4">Galeria de Estruturas</h2>
              <p className="section-description">
                Desde redes cristalinas idealizadas a espécimes minerais reais, a diversidade geométrica dos cristais.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <article key={item.title} className="crystal-card group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                      {item.system}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="difracao" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Método Principal</p>
              <h2 className="section-title mb-4">Difração de Raios X</h2>
              <p className="section-description">
                Quando um feixe de raios X incide sobre um cristal, o padrão resultante descrito pela Lei de Bragg revela a disposição tridimensional dos átomos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src={diffractionPattern}
                  alt="Padrão de difração de raios X"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">Lei de Bragg</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A condição de interferência construtiva entre raios X difratados por planos cristalinos paralelos é dada por:
                  </p>
                  <div className="formula-block text-2xl">nλ = 2d sin(θ)</div>
                  <p className="formula-note">
                    n = ordem de difração; λ = comprimento de onda; d = distância interplanar; θ = ângulo de incidência
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    Demonstração Matemática
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Considere dois planos paralelos separados por distância <span className="formula-inline">d</span>. Um raio incidente no segundo plano percorre uma distância extra:
                  </p>
                  <div className="formula-block">Δ = 2d sin(θ)</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Para interferência construtiva, essa diferença de caminho deve ser um múltiplo inteiro do comprimento de onda, isto é,
                    <span className="formula-inline"> Δ = nλ</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="matematica" className="py-24 px-6 bg-crystal-deep">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="section-label mb-3">O Foco Central</p>
              <h2 className="section-title mb-4">Matemática da Cristalografia</h2>
              <p className="section-description">
                A cristalografia é, na sua essência, uma disciplina matemática construída sobre álgebra linear, teoria de grupos e análise de Fourier.
              </p>
            </div>

            <div className="mb-16">
              <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Redes de Bravais e Vetores de Translação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Uma rede cristalina é descrita por vetores de translação primitivos
                    <span className="formula-inline"> a1, a2, a3</span>. Qualquer ponto da rede pode ser expresso como:
                  </p>
                  <div className="formula-block text-xl">R = n1a1 + n2a2 + n3a3</div>
                  <p className="formula-note mb-4">onde n1, n2, n3 ∈ Z</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O tensor métrico da rede codifica toda a geometria da célula unitária e permite obter distâncias, ângulos e volume.
                  </p>
                  <div className="formula-block">G = [gij] onde gij = ai · aj</div>
                  <p className="formula-note">V = √det(G)</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={symmetryOps}
                    alt="Operações de simetria"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Teoria de Grupos e Simetria
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="crystal-card p-6">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">Grupos Pontuais</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Operações de simetria que deixam pelo menos um ponto fixo: rotações, reflexões, inversão e rotações impróprias.
                  </p>
                  <div className="formula-block text-base">32 grupos pontuais cristalográficos</div>
                </div>
                <div className="crystal-card p-6">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">Grupos Espaciais</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Combinam operações pontuais com translações, helicoidais e planos de deslizamento.
                  </p>
                  <div className="formula-block text-base">230 grupos espaciais</div>
                </div>
                <div className="crystal-card p-6">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                    Restrição Cristalográfica
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    A periodicidade translacional limita as rotações possíveis a ordens 1, 2, 3, 4 e 6.
                  </p>
                  <div className="formula-block text-base">cos(2π/n) ∈ {'{'}-1, -1/2, 0, 1/2, 1{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sistemas" className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Classificação</p>
              <h2 className="section-title mb-4">Sistemas Cristalinos</h2>
              <p className="section-description">
                Os cristais são classificados em sete sistemas com base na simetria dos seus eixos e ângulos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {systems.map((item) => (
                <article key={item.name} className={`crystal-card p-6 border-l-4 ${item.color}`}>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">{item.name}</h3>
                  <p className="font-mono text-sm text-primary mb-2">{item.params}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4 text-center">
                14 Redes de Bravais
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left p-3 font-display font-semibold text-foreground">Sistema</th>
                      <th className="text-left p-3 font-display font-semibold text-foreground">Redes</th>
                      <th className="text-left p-3 font-display font-semibold text-foreground">Símbolo</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-3">Cúbico</td>
                      <td className="p-3">3</td>
                      <td className="p-3 font-mono text-primary">P, I, F</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/50">
                      <td className="p-3">Hexagonal</td>
                      <td className="p-3">1</td>
                      <td className="p-3 font-mono text-primary">P</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Trigonal</td>
                      <td className="p-3">1</td>
                      <td className="p-3 font-mono text-primary">R</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/50">
                      <td className="p-3">Tetragonal</td>
                      <td className="p-3">2</td>
                      <td className="p-3 font-mono text-primary">P, I</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Ortorrômbico</td>
                      <td className="p-3">4</td>
                      <td className="p-3 font-mono text-primary">P, C, I, F</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/50">
                      <td className="p-3">Monoclínico</td>
                      <td className="p-3">2</td>
                      <td className="p-3 font-mono text-primary">P, C</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Triclínico</td>
                      <td className="p-3">1</td>
                      <td className="p-3 font-mono text-primary">P</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="aplicacoes" className="py-24 px-6 bg-crystal-deep">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Onde se aplica</p>
              <h2 className="section-title mb-4">Áreas de Aplicação</h2>
              <p className="section-description">
                Da estrutura do ADN aos semicondutores, a cristalografia é uma pedra angular da ciência moderna.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((item) => (
                <article key={item.title} className="crystal-card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                    {item.title.slice(0, 1)}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quiz" className="py-24 px-6 bg-crystal-deep">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Teste os Seus Conhecimentos</p>
              <h2 className="section-title mb-4">Quiz de Cristalografia</h2>
              <p className="section-description">
                Avalie o seu domínio sobre os conceitos matemáticos e físicos da cristalografia com estas questões.
              </p>
            </div>

            {finished ? (
              <div className="crystal-card p-10 text-center">
                <div className="text-6xl font-display font-bold text-primary mb-4 glow-text">
                  {percentage}%
                </div>
                <p className="text-xl font-display font-semibold text-foreground mb-2">
                  {percentage >= 80 ? "Excelente" : percentage >= 50 ? "Bom trabalho" : "Continue a estudar"}
                </p>
                <p className="text-muted-foreground mb-8">
                  Acertou {correctAnswers} de {quizQuestions.length} questões
                </p>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Repetir Quiz
                </button>
              </div>
            ) : (
              <div className="crystal-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-muted-foreground">
                    Questão {currentQuestion + 1}/{quizQuestions.length}
                  </span>
                  <span className="text-sm font-mono text-primary">
                    {correctAnswers}/{answeredCount} corretas
                  </span>
                </div>
                <div className="w-full h-1 bg-secondary rounded-full mb-8">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 leading-relaxed">
                  {question.question}
                </h3>
                <div className="space-y-3 mb-6">
                  {question.options.map((option, index) => {
                    let classes =
                      "w-full text-left p-4 rounded-lg border transition-all duration-200 font-medium text-sm ";

                    if (showAnswer) {
                      if (index === question.correctIndex) {
                        classes += "border-green-500/60 bg-green-500/10 text-green-400";
                      } else if (index === selectedAnswer) {
                        classes += "border-destructive/60 bg-destructive/10 text-red-400";
                      } else {
                        classes += "border-border/50 bg-secondary/30 text-muted-foreground";
                      }
                    } else {
                      classes +=
                        "border-border bg-secondary/50 hover:border-primary/60 hover:bg-secondary cursor-pointer text-foreground";
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => chooseAnswer(index)}
                        className={classes}
                        disabled={showAnswer}
                      >
                        <span className="font-mono text-primary/60 mr-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {showAnswer ? (
                  <>
                    <div className="p-4 rounded-lg bg-secondary border border-border mb-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Explicação:</strong> {question.explanation}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={nextQuestion}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      >
                        {currentQuestion < quizQuestions.length - 1 ? "Próxima" : "Ver Resultado"}
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            )}
          </div>
        </section>

        <section id="autores" className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Os Pioneiros</p>
              <h2 className="section-title mb-4">Autores e Cientistas Fundamentais</h2>
              <p className="section-description">
                Os matemáticos, físicos e químicos cujo trabalho construiu os alicerces da cristalografia moderna.
              </p>
            </div>
            <div className="space-y-6">
              {authors.map((author) => (
                <article key={author.name} className="crystal-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="md:w-64 shrink-0">
                      <h3 className="text-lg font-display font-bold text-foreground leading-snug">
                        {author.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {author.years} · {author.nationality}
                      </p>
                      <span className="inline-block mt-2 text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {author.contribution}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed text-sm">{author.detail}</p>
                      {author.formula ? (
                        <div className="formula-block text-base mt-4">{author.formula}</div>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 p-6 bg-secondary rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Nota histórica:</strong> a cristalografia é uma das poucas disciplinas onde a matemática pura precedeu e guiou descobertas experimentais.
              </p>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-border">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <span className="font-display font-semibold">Cristalografia</span>
            </div>
            <p className="text-sm text-muted-foreground">Projeto académico - Fundamentos de Matemática</p>
            <p className="text-xs text-muted-foreground/50 mt-2">
              © {new Date().getFullYear()} · Conteúdo educativo
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
