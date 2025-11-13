
import React from 'react';
import { Link } from 'react-router-dom';
import { DOCUMENT_LINKS, SOCIAL_LINKS, CONTACT_INFO, FacebookIcon, InstagramIcon, YoutubeIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2A5B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Sobre el Colegio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CAE</h3>
            <p className="text-gray-300">
              Educación integral basada en principios cristianos y excelencia académica. Formando líderes para hoy y para la eternidad.
            </p>
          </div>

          {/* Column 2: Documentos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">Documentos</h4>
            <ul className="space-y-2">
              <li>
                <a href={DOCUMENT_LINKS.manualConvivencia} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Manual de convivencia
                </a>
              </li>
              <li>
                <a href={DOCUMENT_LINKS.politicasCartera} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Políticas de cartera
                </a>
              </li>
              <li>
                <a href={DOCUMENT_LINKS.proteccionDatos} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Política de protección de datos
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.email}</a></li>
              <li>WhatsApp: <a href={`https://wa.me/${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.phoneFormatted}</a></li>
              <li>Horario: {CONTACT_INFO.schedule}</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FacebookIcon /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><InstagramIcon /></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><YoutubeIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6">
        <p className="text-center text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} Colegio Adventista Emmanuel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
