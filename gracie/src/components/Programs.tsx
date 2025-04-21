import { Button } from '@/components/ui/button';

const programs = [
  {
    title: "Jiu-Jitsu Kids",
    description: "Programa desenvolvido especialmente para crianças de 5 a 12 anos, focando em coordenação motora, disciplina, respeito e defesa pessoal de forma lúdica e segura.",
    image: "src/assets/kids-program.jpg",
    details: [
      { label: "Idade", value: "5-12 anos" },
      { label: "Duração", value: "45 minutos" },
      { label: "Frequência", value: "2-3x por semana" },
    ],
  },
  {
    title: "Fundamentos",
    description: "Curso completo para adultos iniciantes no Jiu-Jitsu, com foco em técnicas fundamentais, condicionamento físico e princípios básicos de defesa pessoal.",
    image: "src/assets/fundamentals-program.jpg",
    details: [
      { label: "Idade", value: "13+ anos" },
      { label: "Duração", value: "60 minutos" },
      { label: "Frequência", value: "2-5x por semana" },
    ],
  },
  {
    title: "Avançado & Competição",
    description: "Treinamento intensivo para faixas azuis e acima, com técnicas avançadas e preparação física e mental para competições de alto nível.",
    image: "src/assets/competition-program.jpg",
    details: [
      { label: "Nível", value: "Intermediário/Avançado" },
      { label: "Duração", value: "90 minutos" },
      { label: "Frequência", value: "3-6x por semana" },
    ],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Programas</h2>
          <p className="section-subtitle">
            Oferecemos treinamento personalizado para todas as idades e níveis de habilidade,
            desde iniciantes até atletas de competição avançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="h-60 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-bjj-blue">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex flex-col gap-3">
                  {program.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-700 font-medium">{detail.label}:</span>
                      <span className="text-gray-600">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#contact" className="w-full inline-block">
                  <Button className="w-full bg-bjj-blue text-white hover:bg-bjj-blue/90">Saiba Mais</Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Além dos programas principais, também oferecemos aulas especializadas de No-Gi, Women's Only e Self-Defense.
          </p>
          <a href="#contact" className="inline-block">
            <Button className="btn-secondary">Ver Horário Completo</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
