
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stat, Pillar } from '../types';
import CountUp from '../components/CountUp';
import { MusicIcon, BilingualismIcon, ValuesIcon, ComputerIcon, CheckIcon, CardIcon, CTA_LINKS } from '../constants';

// --- DATA ---
const stats: Stat[] = [
    { value: 84, label: "Años de Servicio" },
    { value: 401, label: "Estudiantes" },
    { value: 18, label: "Docentes" },
    { value: 3, label: "Deserción", suffix: '%' },
    { value: 303, label: "Promedio ICFES" },
];

const pillars: Pillar[] = [
    { icon: MusicIcon, title: "Música", description: "No solo nos enfocamos en las ciencias, sino también en el desarrollo estudiantil." },
    { icon: BilingualismIcon, title: "Bilingüismo", description: "El manejo de idiomas nos abren posibilidades gigantes por eso nuestro camino será al Bilingüismo." },
    { icon: ValuesIcon, title: "Desarrollo en Valores", description: "Los valores nos desarrollan como personas integras, honestas y temerosas de Dios." },
    { icon: ComputerIcon, title: "Ciencias Computacionales", description: "La computación y el desarrollo de habilidades computacionales nos hace estar a la vanguardia." },
];

// --- SECTION COMPONENTS ---

const HeroSection: React.FC = () => (
    <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1074')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Colegio Adventista Emmanuel</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">Educación integral basada en principios cristianos y excelencia académica.</p>
            <Link
                to="/admisiones"
                className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
                Proceso de Admisiones
            </Link>
        </div>
    </section>
);

const StatsBar: React.FC = () => (
    <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                {stats.map(stat => (
                    <div key={stat.label}>
                        <p className="text-3xl md:text-4xl font-extrabold text-[#0A2A5B]">
                            <CountUp end={stat.value} />{stat.suffix}
                        </p>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const WelcomeSection: React.FC = () => (
    <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-8">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2A5B] mb-4">Bienvenido al Colegio Adventista Emmanuel</h2>
                    <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-600 text-lg">
                        "Nuestros niños y jóvenes necesitan razones para creer, valores para vivir y motivos para esperar."
                    </blockquote>
                    <p className="mt-6 text-gray-700">
                        Somos una institución educativa con más de 80 años de experiencia, comprometida con la formación de estudiantes íntegros, capaces de enfrentar los desafíos del mundo con una base sólida en valores cristianos y excelencia académica.
                    </p>
                </div>
                <div>
                    {/* Placeholder for a professional photo of the school's facade */}
                    <img src="https://picsum.photos/600/400?image=1081" alt="Fachada del Colegio Adventista Emmanuel" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    </section>
);

const PillarsSection: React.FC = () => (
    <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2A5B]">Nuestros Pilares Fundamentales</h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Creemos en una educación holística que va más allá de lo académico.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map(pillar => (
                    <div key={pillar.title} className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-100 text-cyan-600 mx-auto mb-6">
                            <pillar.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A2A5B] mb-2">{pillar.title}</h3>
                        <p className="text-gray-600">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const CtaButtonsSection: React.FC = () => (
    <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href={CTA_LINKS.pagare} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full md:w-auto text-lg font-semibold text-[#0A2A5B] bg-gray-100 hover:bg-gray-200 py-4 px-8 rounded-lg transition-colors duration-300 shadow-sm">
                    <CheckIcon className="w-6 h-6"/> GENERAR PAGARÉ
                </a>
                <a href={CTA_LINKS.pagos} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full md:w-auto text-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 py-4 px-8 rounded-lg transition-colors duration-300 shadow-md">
                    <CardIcon className="w-6 h-6"/> PAGOS EN LÍNEA
                </a>
            </div>
        </div>
    </section>
);

const ContactFormSection: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // In a real app, you would handle form submission here (e.g., API call).
        // For this demo, we'll simulate a successful submission.
        const formData = new FormData(event.currentTarget);
        const name = formData.get('nombre');
        const email = formData.get('email');
        if (!name || !email) {
            setError('Por favor, complete los campos obligatorios.');
            return;
        }
        setError('');
        setSubmitted(true);
    };

    if (submitted) {
        return (
             <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-green-600">¡Gracias!</h3>
                <p className="mt-2 text-gray-700">Hemos recibido tu mensaje y te contactaremos pronto.</p>
            </div>
        )
    }

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2A5B]">¡Educamos para la Eternidad! Contáctanos</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" name="nombre" id="nombre" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                            </div>
                            <div>
                                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">Apellidos</label>
                                <input type="text" name="apellidos" id="apellidos" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Dirección de Correo</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                        <div>
                            <label htmlFor="tipo_solicitud" className="block text-sm font-medium text-gray-700">Tipo de Solicitud</label>
                            <select id="tipo_solicitud" name="tipo_solicitud" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md">
                                <option>Información General</option>
                                <option>Admisiones</option>
                                <option>Soporte Pagos</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div>
                             <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                             <textarea id="mensaje" name="mensaje" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0A2A5B] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
                                Enviar
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 text-center">Al dejar tus datos aceptas la política de privacidad y recolección de datos del colegio adventista Emmanuel.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

// --- MAIN PAGE COMPONENT ---

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WelcomeSection />
      <PillarsSection />
      <CtaButtonsSection />
      <ContactFormSection />
    </>
  );
};

export default HomePage;
