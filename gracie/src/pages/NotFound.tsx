import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-6">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-4">
        Página não encontrada
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Desculpe, a página que você está tentando acessar não existe ou foi movida.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Voltar para a Página Inicial
      </a>
    </div>
  );
};

export default NotFound;
