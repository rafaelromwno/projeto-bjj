import React from 'react'
import { Button } from '@/components/ui/button';
import { scrollToContact } from '@/utils/scrollToContact';
import { programs } from '@/data/programs';

// componente para exibir cada programa
const ProgramCard = React.memo(({ program }: { program: typeof programs[0] }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
    <div className="h-60 overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover"
        loading="lazy" // carregamento assíncrono da imagem
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-bjj-blue">{program.title}</h3>
      <p className="text-gray-600 mb-4">{program.description}</p>
      <div className="flex flex-col gap-3">
        {program.details.map((detail, idx) => (
          <div key={idx} className="flex justify-between">
            <span className="text-gray-700 font-medium">{detail.label}:</span>
            <span className="text-gray-600">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="p-6 pt-0">
      <Button
        onClick={scrollToContact}
        className="w-full bg-bjj-blue text-white hover:bg-bjj-blue/90"
      >
        Saiba Mais
      </Button>
    </div>
  </div>
));

export default ProgramCard