import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const testimonials = [
  {
    text: "Treino na CleanBJJ há 3 anos e posso dizer que mudou minha vida. Além da excelente técnica, encontrei uma família que me apoia dentro e fora do tatame. O ambiente é acolhedor e respeitoso.",
    name: "Pedro Souza",
    position: "Faixa Azul • 3 anos de treino",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    text: "Inscrevi meus dois filhos no programa infantil e estou impressionada com a mudança. Eles estão mais disciplinados, confiantes e aprenderam valores importantes. Os professores são incríveis com as crianças!",
    name: "Mariana Alves",
    position: "Mãe de alunos do Kids Program",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    text: "Como mulher, estava hesitante em começar no Jiu-Jitsu, mas a CleanBJJ oferece um ambiente seguro e respeitoso. A Professora Ana é incrível e o programa feminino me ajudou a ganhar confiança e autodefesa.",
    name: "Juliana Costa",
    position: "Faixa Branca • 8 meses de treino",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    text: "Treinei em várias academias e a metodologia da CleanBJJ é sem dúvida a melhor. Os professores são muito atenciosos e as aulas são estruturadas de forma que todos, independente do nível, conseguem evoluir.",
    name: "Rafael Oliveira",
    position: "Faixa Roxa • 5 anos de treino",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    text: "Minha experiência no programa de competição tem sido transformadora. Em apenas um ano, melhorei significativamente minha técnica e já conquistei medalhas em campeonatos regionais.",
    name: "Gabriel Santos",
    position: "Faixa Azul • Atleta de Competição",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-white p-8 rounded-lg shadow-md card-hover h-full">
    <div className="flex text-yellow-400 mb-3" aria-label={`Avaliação 5 estrelas`}>
      <Star fill="currentColor" size={20} aria-hidden="true" />
      <Star fill="currentColor" size={20} aria-hidden="true" />
      <Star fill="currentColor" size={20} aria-hidden="true" />
      <Star fill="currentColor" size={20} aria-hidden="true" />
      <Star fill="currentColor" size={20} aria-hidden="true" />
    </div>
    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img 
          src={testimonial.image} 
          alt={`Foto de ${testimonial.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <h4 className="text-bjj-blue font-bold">{testimonial.name}</h4>
        <p className="text-gray-500 text-sm">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos alunos dizem sobre sua experiência em nossa academia.
          </p>
        </div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative transform-none mx-2 size-10" aria-label="Ver depoimento anterior" />
            <CarouselNext className="relative transform-none mx-2 size-10" aria-label="Ver próximo depoimento" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
