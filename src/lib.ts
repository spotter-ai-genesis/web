// Prefix a site path with the configured base (needed for GitHub project pages).
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
export const GITHUB = 'https://github.com/spotter-ai-genesis';

// Partner institutions: logo files live in public/logos/.
export const PARTNERS = [
  { key: 'ANL', name: 'Argonne National Laboratory', logo: '/logos/anl.svg', href: 'https://www.anl.gov' },
  { key: 'ORNL', name: 'Oak Ridge National Laboratory', logo: '/logos/ornl.svg', href: 'https://www.ornl.gov' },
  { key: 'HPE', name: 'Hewlett Packard Enterprise', logo: '/logos/hpe.svg', href: 'https://www.hpe.com' },
  { key: 'IIT', name: 'Illinois Institute of Technology', logo: '/logos/iit.svg', href: 'https://www.iit.edu' },
] as const;
