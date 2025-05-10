import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gracie-white shadow-md py-3' : 'bg-transparent py-5'}`}
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center ml-3">
          
        <a href="#" className="flex items-center" aria-label="Página inicial">
          <img 
            src="/logotipo.svg" 
            alt="Logo" 
            className={`h-10 transition-all duration-300 ${isScrolled ? 'filter-blue' : 'filter-white'}`} 
          />
        </a>

          {/* Desktop menu */}
          {!isMobile && (
          <div className="flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            <a href="#about" className={`duration-500 transition-colors ${isScrolled ? 'hover:text-bjj-red text-bjj-darkblue' : 'text-white hover:text-red-400'}`}>Sobre</a>
            <a href="#programs" className={`duration-500 transition-colors ${isScrolled ? 'hover:text-bjj-red text-bjj-darkblue' : 'text-white hover:text-red-400'}`}>Programas</a>
            <a href="#instructors" className={`duration-500 transition-colors ${isScrolled ? 'hover:text-bjj-red text-bjj-darkblue' : 'text-white hover:text-red-400'}`}>Instrutores</a>
            <a href="#testimonials" className={`duration-500 transition-colors ${isScrolled ? 'hover:text-bjj-red text-bjj-darkblue' : 'text-white hover:text-red-400'}`}>Depoimentos</a>
            <a href="#contact" className={`duration-500 btn-primary transition-colors ${isScrolled ? 'bg-bjj-blue text-white' : 'bg-transparent border-2 border-gracie-white text-gracie-white hover:bg-gracie-white hover:text-bjj-darkblue'}`}>Aula Gratuita</a>
          </div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <button
              className={`transition-colors ${isScrolled ? 'text-bjj-blue' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div 
            id="mobile-menu"
            className="mt-4 py-4 bg-gracie-white rounded-lg shadow-lg animate-fade-in"
            role="navigation" 
            aria-label="Menu mobile"
          >
            <div className="flex flex-col space-y-4 px-4">
              <a href="#about" className="hover:text-bjj-red text-bjj-darkblue transition-colors py-2"
                onClick={() => setIsOpen(false)}>Sobre</a>
              <a href="#programs" className="hover:text-bjj-red text-bjj-darkblue transition-colors py-2"
                onClick={() => setIsOpen(false)}>Programas</a>
              <a href="#instructors" className="hover:text-bjj-red text-bjj-darkblue transition-colors py-2"
                onClick={() => setIsOpen(false)}>Instrutores</a>
              <a href="#testimonials" className="hover:text-bjj-red text-bjj-darkblue transition-colors py-2"
                onClick={() => setIsOpen(false)}>Depoimentos</a>
              <Button className="btn-primary bg-bjj-blue text-white"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                Aula Gratuita
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
