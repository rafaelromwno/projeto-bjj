import KidsProgram from "../../public/kids-program.avif";
import FundamentalsProgram from "../../public/fundamentals-program.avif";
import CompetitionProgram from "../../public/competition-program.avif";

export const programs = [
  {
    title: "Jiu-Jitsu Kids",
    description: "Programa desenvolvido especialmente para crianças de 5 a 12 anos, focando em coordenação motora, disciplina, respeito e defesa pessoal de forma lúdica e segura.",
    image: KidsProgram,
    details: [
      { label: "Idade", value: "5-12 anos" },
      { label: "Duração", value: "45 minutos" },
      { label: "Frequência", value: "2-3x por semana" },
    ],
  },
  {
    title: "Fundamentos",
    description: "Curso completo para adultos iniciantes no Jiu-Jitsu, com foco em técnicas fundamentais, condicionamento físico e princípios básicos de defesa pessoal.",
    image: FundamentalsProgram,
    details: [
      { label: "Idade", value: "13+ anos" },
      { label: "Duração", value: "60 minutos" },
      { label: "Frequência", value: "2-5x por semana" },
    ],
  },
  {
    title: "Avançado & Competição",
    description: "Treinamento intensivo para faixas azuis e acima, preparação física e mental para competições de alto nível. Aulas dinâmicas focadas em desempenho técnico, estratégia de luta e resistência sob pressão.",
    image: CompetitionProgram,
    details: [
      { label: "Nível", value: "Intermediário/Avançado" },
      { label: "Duração", value: "90 minutos" },
      { label: "Frequência", value: "3-6x por semana" },
    ],
  },
];