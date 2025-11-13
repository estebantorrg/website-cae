
import React from 'react';
import { NavLinkItem } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Conócenos', path: '/conocenos' },
  { name: 'Académico', path: '/academico' },
  { name: 'Admisiones', path: '/admisiones' },
  { name: 'Pagos en Línea', path: '/pagos-en-linea' },
  { name: 'Contacto', path: '/contacto' },
];

export const QUID_PLATFORM_URL = 'https://emmanuel.redacademica.com/';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/Colegioadventistaemmanuel',
  instagram: 'https://www.instagram.com/colegioadventistaemmanuel/',
  youtube: 'https://www.youtube.com/@colegioadventistaemmanuelb7511',
};

export const DOCUMENT_LINKS = {
  manualConvivencia: 'https://firebasestorage.googleapis.com/v0/b/cae-pagare.appspot.com/o/Manual-de-convivencia-CAE-2024.pdf?alt=media&token=42d10332-9ab1-423c-a901-ecaf173d1f3f',
  politicasCartera: 'https://firebasestorage.googleapis.com/v0/b/cae-pagare.appspot.com/o/Pol%C3%ADticas-de-cartera.pdf?alt=media&token=8753b0f5-9372-46bb-ba2f-659fca82d02c',
  proteccionDatos: 'https://firebasestorage.googleapis.com/v0/b/cae-pagare.appspot.com/o/POL%C3%8DTICA-DE-PROTECCI%C3%93N-Y-TRATAMIENTO-DE-DATOS-PERSONALES-CAE.pdf?alt=media&token=db2a9829-d5c2-4759-93b5-32115c544d65',
};

export const CTA_LINKS = {
    pagare: 'https://pagare-cae.vercel.app/',
    pagos: 'https://checkout.bold.co/payment/LNK_LCCY6VS8B9',
};

export const CONTACT_INFO = {
    email: 'colegio@cae.edu.co',
    phone: '+573176476366',
    phoneFormatted: '+57 3176476366',
    schedule: 'LUNES A VIERNES: 7 A.M A 2 P.M'
};

// --- SVG ICONS ---

export const MusicIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
);

export const BilingualismIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
);

export const ValuesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export const ComputerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="8" x="5" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 18h2"/><path d="M12 18h6"/></svg>
);

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
);

export const CardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 4.5 4 7 4h10c2.5 0 4.5 2 4.5 3v10c0 .5 0 1-2.5 2-2.5 1-10 1-10 1S5 21 2.5 20z"/><path d="m10 15 5-3-5-3z"/></svg>
);
