import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-white p-8 rounded-lg shadow-md card-hover h-full min-h-[300px] flex flex-col justify-between">
    <div className="flex text-yellow-400 mb-3" aria-label="Avaliação de 5 estrelas" role="img" aria-hidden="false">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" size={20} aria-hidden="true" />
      ))}
    </div>
    <blockquote className="text-gray-600 italic mb-6">
      {`"${testimonial.text}"`}
    </blockquote>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img
          src={testimonial.image}
          alt={`Foto de ${testimonial.name}, ${testimonial.position}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <p className="text-bjj-blue font-bold">{testimonial.name}</p>
        <p className="text-gray-500 text-sm">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;