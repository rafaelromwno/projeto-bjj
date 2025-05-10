import { Button } from '@/components/ui/button';
import { scrollToContact } from '@/utils/scrollToContact';
import { programs } from '@/data/programs'; 
import ProgramCard from './ProgramCard';

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
            <ProgramCard key={index} program={program} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Além dos programas principais, também oferecemos aulas especializadas de No-Gi, Apenas mulheres (Women's Only) e Defesa Pessoal.
          </p>
          <Button
            onClick={scrollToContact}
            className="btn-secondary bg-bjj-darkblue hover:bg-bjj-lightblue duration-500"
          >
            Ver Horário Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
