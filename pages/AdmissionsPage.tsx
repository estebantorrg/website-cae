
import React from 'react';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-[#0A2A5B] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">{title}</h1>
            <p className="mt-2 text-lg text-gray-300">Únete a la familia del Colegio Adventista Emmanuel.</p>
        </div>
    </div>
);

const AdmissionsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <PageHeader title="Proceso de Admisiones" />
            
            <div className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-center text-[#0A2A5B] mb-12">Pasos para la Matrícula</h2>
                    
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 before:md:mx-auto">
                        
                        {/* Step 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white font-bold shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-lg text-gray-800">Contacto y Solicitud</h3>
                                <p className="text-gray-600 mt-2">Póngase en contacto con nuestra oficina de admisiones a través del formulario en línea o por teléfono para recibir información detallada y el formulario de solicitud.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white font-bold shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-lg text-gray-800">Entrevista y Evaluación</h3>
                                <p className="text-gray-600 mt-2">Se programará una entrevista con los padres y una evaluación diagnóstica para el estudiante, con el fin de conocer sus habilidades y necesidades.</p>
                            </div>
                        </div>

                         {/* Step 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white font-bold shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-lg text-gray-800">Entrega de Documentos</h3>
                                <p className="text-gray-600 mt-2">Una vez aprobado el proceso, se deberán entregar los documentos requeridos en la secretaría del colegio para formalizar la inscripción.</p>
                            </div>
                        </div>
                        
                         {/* Step 4 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                           <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white font-bold shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">4</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-lg text-gray-800">Formalización de Matrícula</h3>
                                <p className="text-gray-600 mt-2">Realizar el pago de la matrícula y firmar el contrato de servicios educativos para completar el proceso y asegurar el cupo.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl font-extrabold text-[#0A2A5B] mb-4">Lista de Útiles Escolares</h2>
                     <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Consulte y descargue la lista de útiles escolares correspondiente a cada grado académico para el próximo año lectivo.</p>
                     <a href="#" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                        Ver Listas de Útiles
                     </a>
                </div>
            </div>

        </div>
    );
};

export default AdmissionsPage;
