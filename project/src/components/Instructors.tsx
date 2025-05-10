import { Instagram, Globe } from 'lucide-react';
import {instructors} from '@/data/instructors';

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 bg-white" aria-labelledby="instructors-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="instructors-heading" className="section-title">Nossos Instrutores</h2>
          <p className="section-subtitle">
            Conheça nossa equipe de professores altamente qualificados e experientes,
            prontos para guiar você em sua jornada no Jiu-Jitsu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center card-hover" aria-label={`Instrutor ${instructor.name}`}>
              <div className="h-80 overflow-hidden">
                <img
                  src={instructor.image}
                  alt={`Foto do instrutor ${instructor.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-bjj-blue">{instructor.name}</h3>
                <p className="text-bjj-red font-medium mb-3">{instructor.title}</p>
                <p className="text-gray-600 mb-4">{instructor.description}</p>
                <div className="flex justify-center space-x-4">
                  {instructor.socialLinks.instagram && (
                    <a
                      href={instructor.socialLinks.instagram}
                      className="text-gray-600 hover:text-bjj-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${instructor.name}`}
                    >
                      <Instagram size={20} />
                    </a>
                  )}

                  {instructor.socialLinks.website && (
                    <a
                      href={instructor.socialLinks.website}
                      className="text-gray-600 hover:text-bjj-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Site oficial de ${instructor.name}`}
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
