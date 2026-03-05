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
  // WebApplication schema
  const webAppSchema = {
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
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
      url: siteConfig.author.linkedin,
      sameAs: [siteConfig.author.linkedin],
      worksFor: {
        "@type": "Organization",
        name: siteConfig.author.company,
      },
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

  // Person schema (Author/GF)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    description: siteConfig.author.bio,
    url: siteConfig.author.linkedin,
    sameAs: [siteConfig.author.linkedin],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.author.company,
      url: `https://${siteConfig.domain}`,
    },
    knowsAbout: [
      "Künstliche Intelligenz",
      "KI Beratung",
      "Digitale Transformation",
      "KI Strategie",
      "Mittelstand",
      "KMU",
      "Prozessautomatisierung",
    ],
  };

  // HowTo schema — "KI im KMU einführen"
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "So führen Sie KI in Ihrem KMU ein: 5 Schritte",
    description:
      "Schritt-für-Schritt-Anleitung zur erfolgreichen KI-Einführung im Mittelstand — von der Erstanalyse bis zur Skalierung.",
    totalTime: "P30D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "KI-Readiness Check durchführen",
        text: "Starten Sie mit dem kostenlosen Online-Check. In 5 Minuten erhalten Sie Ihren KI-Reifegrad, eine Kategorieanalyse und erste Handlungsempfehlungen.",
        url: `https://${siteConfig.domain}`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Quick Wins identifizieren",
        text: "Basierend auf Ihrem Ergebnis identifizieren Sie die Bereiche mit dem größten Automatisierungspotenzial: E-Mail-Automatisierung, Chatbot, KI-gestützte Angebotserstellung.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "KI-Strategie entwickeln",
        text: "Entwickeln Sie eine priorisierte KI-Roadmap mit klaren Meilensteinen. Definieren Sie Prozesse, Tools und benötigte Ressourcen.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Pilotprojekt umsetzen",
        text: "Starten Sie mit einem klar abgegrenzten Pilotprojekt mit hohem Automatisierungspotenzial und messbarem Ergebnis.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Skalieren und optimieren",
        text: "Rollen Sie die KI-Lösung auf weitere Geschäftsbereiche aus. Schulen Sie Ihr Team und messen Sie kontinuierlich den Impact.",
      },
    ],
  };

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie lange dauert der kostenlose KI-Check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der KI-Readiness Check umfasst 10 kurze Abschnitte und dauert in der Regel nur 5 Minuten. Sie erhalten Ihr Ergebnis mit konkretem KI-Reifegrad und Handlungsempfehlungen sofort nach Abschluss.",
        },
      },
      {
        "@type": "Question",
        name: "Ist die KI Beratung wirklich kostenlos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, der KI-Readiness Check ist zu 100 % kostenlos und unverbindlich. Er dient als erster Schritt unserer KI Beratung für KMU: Sie erhalten eine fundierte Standortbestimmung, ohne versteckte Kosten.",
        },
      },
      {
        "@type": "Question",
        name: "Was genau ist KI Beratung für KMU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KI Beratung für KMU umfasst die strategische und operative Begleitung kleiner und mittelständischer Unternehmen bei der Einführung von Künstlicher Intelligenz — von der Analyse des IST-Zustands über die KI-Roadmap bis zur Implementierung.",
        },
      },
      {
        "@type": "Question",
        name: "Für welche Branchen eignet sich der KI-Readiness Check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unser KI-Readiness Check ist branchenübergreifend konzipiert und eignet sich für alle Wirtschaftszweige: Handwerk, Produktion, Handel, Dienstleistung, IT, Gesundheitswesen, Finanzwesen, Logistik und mehr.",
        },
      },
      {
        "@type": "Question",
        name: "Was ist der Unterschied zwischen KI-Readiness Check und vollständiger KI Beratung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der KI-Readiness Check ist die kostenlose Erstanalyse in 5 Minuten. Die vollständige KI Beratung umfasst tiefgehende Prozessanalyse, individuelle KI-Strategie, Tool-Auswahl, Pilotprojekte und operative Begleitung.",
        },
      },
      {
        "@type": "Question",
        name: "Wer sieht meine Daten aus dem KI-Check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Wir verwenden sie ausschließlich zur Erstellung Ihres persönlichen KI-Reifegrad-Ergebnisses.",
        },
      },
      {
        "@type": "Question",
        name: "Wie wird der KI-Reifegrad berechnet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der KI-Reifegrad basiert auf einem gewichteten Scoring-Modell über sechs Kernkategorien: KI-Einsatz, Prozessautomatisierung, Daten-Infrastruktur, digitale Sichtbarkeit, Mitarbeiterkompetenzen und Budget-Bereitschaft.",
        },
      },
      {
        "@type": "Question",
        name: "Was passiert nach dem KI-Readiness Check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sie erhalten sofort Ihren KI-Reifegrad-Score (0–100), Kategorieauswertung, geschätztes Einsparpotenzial und konkrete Handlungsempfehlungen. Optional können Sie ein kostenloses Strategiegespräch buchen.",
        },
      },
      {
        "@type": "Question",
        name: "Wie kann ich als kleines Unternehmen mit KI starten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der erste Schritt ist eine Bestandsaufnahme mit unserem KI-Readiness Check. Danach empfehlen wir ein klar abgegrenztes Pilotprojekt: z. B. Prozessautomatisierung, KI-Chatbot oder KI-gestützte Content-Erstellung.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie auch KI Beratung vor Ort an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, neben der digitalen Erstanalyse bieten wir auch persönliche KI Beratung an — remote per Videocall oder vor Ort. Unser Standort ist Berlin, wir beraten aber bundesweit.",
        },
      },
    ],
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${openSans.variable} font-body antialiased bg-page-bg text-brand-black`}>
        {children}
      </body>
    </html>
  );
}
