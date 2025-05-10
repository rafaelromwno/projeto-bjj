import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header role="banner" aria-label="Seção de introdução com chamada para ação">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-blue-dark-gradient" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-gracie-red"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gracie-white mb-6 animate-fade-in">
            DOMINE A ARTE DO <span className="text-bjj-redhero">JIU-JITSU</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/60 mb-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Fortaleça seu corpo e mente através da disciplina e técnica do Jiu-Jitsu tradicional!
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#contact" className="btn-primary bg-red text-white text-lg">
              Agende uma Aula Gratuita
            </a>
            <a
              href="#programs"
              className="bg-transparent border-2 border-gracie-white text-gracie-white hover:bg-gracie-white hover:text-bjj-darkblue transition-all px-6 py-3 rounded-md font-medium text-lg duration-500"
            >
              Nossos Programas
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gracie-white cursor-pointer animate-bounce"
          onClick={scrollToAbout}
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown size={32} aria-hidden="true" />
        </button>
      </section>
    </header>
  );
};

export default Hero;
