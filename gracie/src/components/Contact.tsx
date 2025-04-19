import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would submit to backend here
    console.log('Form submitted:', formData);

    // Show success toast
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve para agendar sua aula gratuita.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Agende sua aula experimental gratuita ou tire suas dúvidas sobre nossos programas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-bold mb-4 text-gracie-red">Agende Sua Aula Gratuita</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(XX) XXXXX-XXXX"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className=" active:to-bjj-blue block text-sm font-medium text-gray-700 mb-1">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos um pouco sobre seu interesse ou objetivo com o Jiu-Jitsu"
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary bg-bjj-blue hover:bg-bjj-darkblue text-white">
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <p>Av. Paulista, 1000 - Bela Vista</p>
                  <p>São Paulo - SP, 01310-100</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Telefone</h4>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>contato@graciebarra.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 6h às 22h</p>
                  <p>Sábado: 9h às 17h</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gracie-red transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gracie-red transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-gracie-red transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
