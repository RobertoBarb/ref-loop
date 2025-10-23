import { useQuery } from '@tanstack/react-query';
import { client } from '@/sanity/lib/client';

const bookDemoEmailQuery = `
  *[_type == "bookDemo"][0] {
    formSection {
      email
    }
  }
`;

export function useBookDemoEmail() {
  return useQuery({
    queryKey: ['book-demo-email'],
    queryFn: async () => {
      const data = await client.fetch(bookDemoEmailQuery);
      return data?.formSection?.email || 'barboroberto98@gmail.com';
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

