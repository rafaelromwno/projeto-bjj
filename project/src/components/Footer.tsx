
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white" aria-label="Rodapé com informações institucionais e navegação">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              <a href="#" className="flex items-center" aria-label="Página inicial da academia CleanBJJ">
                <img
                  src="/logotipo.svg"
                  alt="Logotipo da CleanBJJ"
                  className='h-10 transition-all duration-300 filter-white'
                />
              </a>
            </h2>
            <p className="text-gray-300 mb-4">
              Academia premium de Jiu-Jitsu Brasileiro com ambiente familiar e
              comprometida com a excelência técnica e valores tradicionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram da CleanBJJ" className="hover:text-gracie-red transition-colors">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Facebook da CleanBJJ" className="hover:text-gracie-red transition-colors">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="YouTube da CleanBJJ" className="hover:text-gracie-red transition-colors">
                <Youtube size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegue</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Programas
                </a>
              </li>
              <li>
                <a href="#instructors" className="text-gray-300 hover:text-white transition-colors">
                  Instrutores
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Jiu-Jitsu Kids
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Fundamentais
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Avançado & Competição
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Treino Feminino
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  No-Gi / Submission Grappling
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Rua Exemplo, 123 - Centro</p>
              <p>Cidade - Estado, 00000-000</p>
              <p>Telefone: (11) 99999-9999</p>
              <p>Email: contato@cleanbjj.com.br</p>
            </address>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 text-center text-gray-300 text-sm">
          <p>© {currentYear} CleanBJJ. Todos os direitos reservados.</p>
          <p className="mt-2">Esta é uma academia fictícia criada apenas para demonstração.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
