import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

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

        <Carousel className="w-full" opts={{ loop: true }} id="testimonials-carousel">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <figure>
                  <TestimonialCard testimonial={testimonial} />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious
              className="relative transform-none mx-2 size-10"
              aria-label="Ver depoimento anterior"
              role="button"
              aria-controls="testimonials-carousel"
            />
            <CarouselNext
              className="relative transform-none mx-2 size-10"
              aria-label="Ver próximo depoimento"
              role="button"
              aria-controls="testimonials-carousel"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;