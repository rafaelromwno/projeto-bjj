import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Melhora da Condição Física",
    description: "A prática do Jiu-Jitsu ajuda a desenvolver força, resistência e flexibilidade, promovendo uma vida mais saudável.",
  },
  {
    title: "Aprimoramento Mental",
    description: "O Jiu-Jitsu ensina disciplina, paciência e resiliência, ajudando a lidar com desafios dentro e fora do tatame.",
  },
  {
    title: "Defesa Pessoal",
    description: "Aprenda técnicas eficazes de defesa pessoal que podem ser aplicadas em situações reais.",
  },
  {
    title: "Comunidade e Amizades",
    description: "Faça parte de uma comunidade acolhedora e construa amizades duradouras enquanto treina.",
  },
  {
    title: "Redução do Estresse",
    description: "O treino regular ajuda a aliviar o estresse e promove o bem-estar mental.",
  },
  {
    title: "Desenvolvimento da autoconfiança",
    description: "Ajuda a desenvolver a autoestima e a autoconfiança através do aprendizado e superação de desafios.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Benefícios do Jiu-Jitsu</h2>
          <p className="section-subtitle">
            Descubra como o Jiu-Jitsu pode transformar sua vida física e mentalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <CheckCircle className="text-bjj-blue w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bjj-blue mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;