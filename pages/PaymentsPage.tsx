
import React from 'react';
import { CTA_LINKS, CardIcon } from '../constants';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-[#0A2A5B] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">{title}</h1>
            <p className="mt-2 text-lg text-gray-300">Realice sus pagos de forma segura y conveniente.</p>
        </div>
    </div>
);

const PaymentsPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <PageHeader title="Pagos en Línea" />

            <div className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg text-center p-8 md:p-12">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-cyan-100 text-cyan-600 mx-auto mb-6">
                            <CardIcon className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0A2A5B] mb-4">Portal de Pagos</h2>
                        <p className="text-gray-600 mb-8">
                            Para realizar el pago de pensiones, matrículas u otros servicios, por favor haga clic en el siguiente botón. Será redirigido a nuestra plataforma de pagos segura.
                        </p>
                        <a 
                            href={CTA_LINKS.pagos} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
                        >
                            Ir a Pagar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentsPage;
