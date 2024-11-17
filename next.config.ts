import { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const nextConfig: NextConfig = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      // Configuraciones específicas para producción
      reactStrictMode: true,
      poweredByHeader: false,
    };
  }

  return {
    // Configuraciones para desarrollo por defecto
    reactStrictMode: true,
  };
};

export default nextConfig;
