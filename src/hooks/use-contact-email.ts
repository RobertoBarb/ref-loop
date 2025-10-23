import { useQuery } from '@tanstack/react-query';
import { client } from '@/sanity/lib/client';

const contactEmailQuery = `
  *[_type == "contact"][0] {
    contactForm {
      email
    }
  }
`;

export function useContactEmail() {
  return useQuery({
    queryKey: ['contact-email'],
    queryFn: async () => {
      const data = await client.fetch(contactEmailQuery);
      return data?.contactForm?.email || 'barboroberto98@gmail.com';
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

