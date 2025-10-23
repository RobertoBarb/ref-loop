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
        serviceId: data?.serviceId || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        templateId: data?.templateId || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        publicKey: data?.publicKey || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
