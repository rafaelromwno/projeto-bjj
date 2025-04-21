import { Instagram, Globe } from 'lucide-react';

const instructors = [
  {
    name: "Marcus Almeida",
    title: "Fundador & Faixa-Preta 6° Grau",
    description: "Com 25 anos de experiência, Mestre Marcus é formado pela linhagem direta dos fundadores do Jiu-Jitsu Brasileiro. 13x Campeão mundial e reconhecido por sua excelência técnica.",
    image: "../assets/buchecha.jpeg",
    socialLinks: {
      instagram: "#https://www.instagram.com/marcusbuchecha/",
    },
  },
  {
    name: "Rafael Mendes",
    title: "Faixa-Preta 3° Grau",
    description: "Especialista em competição de alto nível, Rafael é 4x campeão mundial e referência em técnicas modernas de Jiu-Jitsu. Lidera nosso programa de competição e aulas comerciais.",
    image: "../assets/rafael-mendes-jiu-jitsu.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/mendesbros/",
      website: "https://artofjiujitsu.com",
    },
  },
  {
    name: "Tainan Dalpra",
    title: "Faixa-Preta 2° Grau",
    description: "Tainan lidera nosso programa de competição feminino, masculino e infantil. Competidor internacional com vasta experiência em pedagogia adaptada para diferentes grupos e idades.",
    image: "../assets/tainan-dalpra.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/tainandalpra/",
      website: "https://artofjiujitsu.com",
    },
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Instrutores</h2>
          <p className="section-subtitle">
            Conheça nossa equipe de professores altamente qualificados e experientes,
            prontos para guiar você em sua jornada no Jiu-Jitsu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center card-hover">
              <div className="h-80 overflow-hidden">
                <img
                  src={instructor.image}
                  alt={`Instrutor ${instructor.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-bjj-blue">{instructor.name}</h3>
                <p className="text-bjj-red font-medium mb-3">{instructor.title}</p>
                <p className="text-gray-600 mb-4">{instructor.description}</p>
                <div className="flex justify-center space-x-4">
                  {instructor.socialLinks.instagram && (
                    <a href={instructor.socialLinks.instagram} className="text-gray-600 hover:text-bjj-blue transition-colors" target='_blank'>
                      <Instagram size={20} />
                    </a>
                  )}

                  {instructor.socialLinks.website && (
                    <a href={instructor.socialLinks.website} className="text-gray-600 hover:text-bjj-blue transition-colors" target='_blank'>
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
