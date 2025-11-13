
import React from 'react';
import { CONTACT_INFO } from '../constants';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-[#0A2A5B] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">{title}</h1>
            <p className="mt-2 text-lg text-gray-300">Estamos aquí para ayudarte. Ponte en contacto con nosotros.</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white">
            <PageHeader title="Contacto" />

            <div className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-3xl font-extrabold text-[#0A2A5B] mb-6">Información de Contacto</h2>
                            <div className="space-y-4 text-lg text-gray-700">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-600">{CONTACT_INFO.email}</a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <a href={`https://wa.me/${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">{CONTACT_INFO.phoneFormatted}</a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{CONTACT_INFO.schedule}</span>
                                </div>
                                 <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 text-cyan-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span>Cl. 52 #29-04, Bucaramanga, Santander, Colombia</span>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.04940026365!2d-73.1166666852261!3d7.120710994857471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f7a8b66e3cd%3A0x6e7b5797378d3886!2sColegio%20Adventista%20Emmanuel!5e0!3m2!1sen!2sco!4v1681502542456!5m2!1sen!2sco" 
                                width="100%" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación del Colegio Adventista Emmanuel"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
