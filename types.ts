// FIX: Import React to make React types available in this file.
import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Pillar {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
