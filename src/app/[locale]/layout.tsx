import "@/globals.css";

import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/shared/helpers/trpc/client";
import { I18nProviderClient } from "@/shared/locales/client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Loop AI Group - La Piattaforma AI Agents Leader",
  description: "Potenzia la tua forza lavoro costruendo i tuoi AI Agents enterprise che forniscono lavoro reale utilizzando qualsiasi ML/LLM, i tuoi sistemi legacy e la tua infrastruttura.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <I18nProviderClient locale={locale}>
            <NuqsAdapter>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                {children}
                <Toaster />
              </ThemeProvider>
            </NuqsAdapter>
          </I18nProviderClient>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
