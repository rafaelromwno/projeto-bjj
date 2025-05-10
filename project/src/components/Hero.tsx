import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
          />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-gracie-red"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex flex-col items-center mb-8 animate-fade-in">

          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gracie-white mb-6 animate-fade-in">
            DOMINE A ARTE DO <span className="text-gracie-red">JIU-JITSU</span>
          </h1>
          <p className="text-xl md:text-2xl text-gracie-silver mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fortaleça seu corpo e mente através da disciplina e técnica do Jiu-Jitsu tradicional
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#contact" className="btn-primary bg-bjj-blue text-white text-lg">
              Agende uma Aula Gratuita
            </a>
            <a href="#programs" className="bg-transparent border-2 border-gracie-white text-gracie-white hover:bg-gracie-white hover:text-gracie-black transition-all px-6 py-3 rounded-md font-medium text-lg">
              Nossos Programas
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gracie-white cursor-pointer animate-bounce"
          onClick={scrollToAbout}
        >
          <ChevronDown size={32} />
        </div>
      </section>

    </>
  );
};

export default Hero;
