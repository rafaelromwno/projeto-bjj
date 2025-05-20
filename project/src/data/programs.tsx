import KidsProgram from "/kids-program.avif";
import FundamentalsProgram from "/fundamentals-program.avif";
import CompetitionProgram from "/competition-program.avif";

export const programs = [
  {
    title: "Jiu-Jitsu Kids",
    description: "Programa para crianças de 5 a 12 anos, focado em coordenação, disciplina, respeito e defesa pessoal de maneira lúdica e segura.",
    image: KidsProgram,
    details: [
      { label: "Idade", value: "5-12 anos" },
      { label: "Duração", value: "45 minutos" },
      { label: "Frequência", value: "2-3x por semana" },
    ],
  },
  {
    title: "Fundamentos",
    description: "Curso para adultos iniciantes, com foco em técnicas essenciais, condicionamento físico e princípios de defesa pessoal.",
    image: FundamentalsProgram,
    details: [
      { label: "Idade", value: "13+ anos" },
      { label: "Duração", value: "60 minutos" },
      { label: "Frequência", value: "2-5x por semana" },
    ],
  },
  {
    title: "Avançado & Competição",
    description: "Treinamento intensivo para faixas azuis e superiores, focado em técnica, estratégias de competição e resistência física e mental.",
    image: CompetitionProgram,
    details: [
      { label: "Nível", value: "Intermediário/Avançado" },
      { label: "Duração", value: "90 minutos" },
      { label: "Frequência", value: "3-6x por semana" },
    ],
  },
];
 