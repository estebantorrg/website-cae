
import React from 'react';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-[#0A2A5B] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">{title}</h1>
            <p className="mt-2 text-lg text-gray-300">Nuestra oferta educativa para cada etapa del desarrollo.</p>
        </div>
    </div>
);

interface AcademicLevelProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const AcademicLevelCard: React.FC<AcademicLevelProps> = ({ title, description, imageUrl, features }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl flex flex-col">
        <img className="h-56 w-full object-cover" src={imageUrl} alt={`Nivel Académico: ${title}`} />
        <div className="p-8 flex-grow">
            <h3 className="text-2xl font-bold text-[#0A2A5B] mb-3">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="flex-shrink-0 h-6 w-6 text-cyan-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const AcademicsPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <PageHeader title="Niveles Académicos" />

            <div className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AcademicLevelCard
                            title="Preescolar"
                            description="Una base sólida para el futuro. Fomentamos la curiosidad y el amor por el aprendizaje en un ambiente seguro y estimulante."
                            imageUrl="https://picsum.photos/400/300?image=1018"
                            features={["Desarrollo de motricidad", "Iniciación a la lectura y escritura", "Juego como herramienta de aprendizaje", "Formación en valores cristianos"]}
                        />
                        <AcademicLevelCard
                            title="Primaria"
                            description="Construyendo conocimiento y carácter. Nuestros estudiantes desarrollan habilidades críticas y creativas."
                            imageUrl="https://picsum.photos/400/300?image=1021"
                            features={["Énfasis en matemáticas y ciencias", "Programa de bilingüismo", "Actividades artísticas y deportivas", "Proyectos de investigación"]}
                        />
                         <AcademicLevelCard
                            title="Bachillerato"
                            description="Preparando líderes para el mañana. Ofrecemos una educación rigurosa que prepara a los estudiantes para la universidad y la vida."
                            imageUrl="https://picsum.photos/400/300?image=1025"
                            features={["Preparación para pruebas ICFES", "Orientación vocacional", "Desarrollo de habilidades tecnológicas", "Liderazgo y servicio comunitario"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicsPage;
