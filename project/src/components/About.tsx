import { Award, Shield, Users } from 'lucide-react';
import NossaHistoria from '../../public/nossa-historia.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre Nossa Academia</h2>
          <p className="section-subtitle">
            Fundada com a missão de ensinar a verdadeira arte do Jiu-Jitsu Brasileiro, promovemos
            valores de respeito, disciplina e crescimento pessoal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Values Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bjj-blue/10 mb-6">
              <Award size={32} className="text-bjj-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-bjj-blue">Excelência Técnica</h3>
            <p className="text-gray-600">
              Nossos instrutores certificados ensinam técnicas refinadas e testadas em competições
              para garantir seu desenvolvimento e progresso constante.
            </p>
          </div>

          {/* Values Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bjj-blue/10 mb-6">
              <Shield size={32} className="text-bjj-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-bjj-blue">Tradição e Respeito</h3>
            <p className="text-gray-600">
              Mantemos os valores tradicionais do Jiu-Jitsu, onde o respeito pelos mestres e 
              colegas é tão importante quanto o desenvolvimento das habilidades técnicas.
            </p>
          </div>

          {/* Values Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bjj-blue/10 mb-6">
              <Users size={32} className="text-bjj-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-bjj-blue">Comunidade Forte</h3>
            <p className="text-gray-600">
              Criar uma comunidade inclusiva onde praticantes de todos os níveis podem crescer juntos,
              apoiando uns aos outros dentro e fora do tatame.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src={NossaHistoria}
              alt="Academia de Jiu-Jitsu"
              className="rounded-lg shadow-xl object-cover w-full h-96"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-bjj-blue">Nossa História</h3>
            <p className="text-gray-600 mb-6">
              Fundada em 2010 pelo Mestre Lyoto, nossa academia nasceu do sonho de criar um espaço 
              onde o Jiu-Jitsu Brasileiro pudesse ser praticado em sua forma mais pura e autêntica.
            </p>
            <p className="text-gray-600 mb-6">
              Com mais de uma década de experiência, formamos centenas de alunos e campeões que carregam nossos 
              valores e ensinamentos pelo mundo. Nossa academia tornou-se referência em técnica, disciplina e 
              formação de caráter.
            </p>
            <p className="text-gray-600">
              Seja para defesa pessoal, condicionamento físico ou competição, oferecemos um ambiente onde 
              todos podem crescer e evoluir em seu próprio ritmo, com segurança e orientação profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
