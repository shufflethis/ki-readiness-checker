import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site.config";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.siteName,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.siteName,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.legal.companyName,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.legal.street,
        postalCode: siteConfig.legal.zip,
        addressLocality: siteConfig.legal.city,
        addressCountry: "DE",
      },
      telephone: siteConfig.legal.phone,
      email: siteConfig.legal.email,
    },
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${openSans.variable} font-body antialiased bg-page-bg text-brand-black`}>
        {children}
      </body>
    </html>
  );
}
