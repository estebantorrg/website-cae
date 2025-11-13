
import React from 'react';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-[#0A2A5B] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">{title}</h1>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Conócenos" />

            <div className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/600/400?image=24" alt="Estudiantes en clase" className="rounded-lg shadow-xl w-full" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-extrabold text-[#0A2A5B]">Nuestra Filosofía</h2>
                            <p className="text-gray-600">
                                La filosofía de la educación Adventista es Cristocéntrica. Los Adventistas del Séptimo Día creen que, bajo la dirección del Espíritu Santo, el carácter y los pensamientos de hombre pueden ser restaurados a la semejanza de su creador.
                            </p>
                            <p className="text-gray-600">
                                La educación en su sentido más amplio es un medio de restaurar en el hombre la imagen de su creador, de devolverlo a la perfección con que fue creado, de promover el desarrollo del cuerpo, la mente, el alma, para que el plan divino de su creación pudiera ser realizado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-cyan-600 mb-4">Misión</h3>
                            <p className="text-gray-700">
                                Promover a través de la educación cristiana adventista, el desarrollo integral del educando para formar ciudadanos autónomos, comprometidos con Dios, la patria, y sus semejantes.
                            </p>
                        </div>
                         <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-cyan-600 mb-4">Visión</h3>
                            <p className="text-gray-700">
                                Ser una institución líder en la formación de niños y jóvenes competentes, con una educación integral fundamentada en principios bíblicos, para servir a Dios y a la humanidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                     <h2 className="text-3xl font-extrabold text-[#0A2A5B] text-center mb-8">Nuestra Historia</h2>
                     <p className="text-gray-600 text-center">
                        Con más de 84 años de servicio, el Colegio Adventista Emmanuel ha sido un faro de educación y valores en la comunidad. Desde nuestros humildes comienzos, hemos crecido para convertirnos en una institución reconocida por nuestra excelencia académica y nuestro compromiso con el desarrollo espiritual y personal de cada estudiante.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
