import { useQuery } from '@tanstack/react-query';
import { client } from '@/sanity/lib/client';

const emailjsConfigQuery = `
  *[_type == "emailjsConfig"][0] {
    serviceId,
    templateId,
    publicKey
  }
`;

export function useEmailJSConfig() {
  return useQuery({
    queryKey: ['emailjs-config'],
    queryFn: async () => {
      const data = await client.fetch(emailjsConfigQuery);
      return {
        serviceId: data?.serviceId || 'service_halss8z',
        templateId: data?.templateId || 'template_gzgxcwp',
        publicKey: data?.publicKey || '_IsGcqR5qSufMNDdM',
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
