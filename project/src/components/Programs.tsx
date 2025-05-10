import { Button } from '@/components/ui/button';
import { scrollToContact } from '@/utils/scrollToContact';
import { programs } from '@/data/programs';
import ProgramCard from './ProgramCard';

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50" aria-labelledby="programs-heading" role="region">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="programs-heading" className="section-title">Nossos Programas</h2>
          <p className="section-subtitle">
            Oferecemos treinamento personalizado para todas as idades e níveis de habilidade,
            desde iniciantes até atletas de competição avançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Também oferecemos aulas especializadas como No-Gi, Women's Only (apenas para mulheres) e Defesa Pessoal.
          </p>
          <Button
            onClick={scrollToContact}
            className="btn-secondary bg-bjj-darkblue hover:bg-bjj-lightblue duration-500"
            aria-label="Ver o cronograma completo de aulas"
          >
            Ver Horário Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;