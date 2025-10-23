import { useQuery } from '@tanstack/react-query';
import { client } from '@/sanity/lib/client';

const careersEmailQuery = `
  *[_type == "careers"][0] {
    applicationForm {
      email
    }
  }
`;

export function useCareersEmail() {
  return useQuery({
    queryKey: ['careers-email'],
    queryFn: async () => {
      const data = await client.fetch(careersEmailQuery);
      return data?.applicationForm?.email || 'barboroberto98@gmail.com';
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

