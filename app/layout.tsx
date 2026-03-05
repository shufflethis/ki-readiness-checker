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
    name: "KI Unternehmensanalyse — Kostenloser KI-Readiness Check",
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
      "KI Unternehmensanalyse",
      "KI Beratung",
      "Digitale Transformation",
      "KI Strategie",
      "Mittelstand",
      "KMU",
      "Prozessautomatisierung",
      "KI Reifegrad Analyse",
    ],
  };

  // HowTo schema — "KI Unternehmensanalyse durchführen"
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "KI Unternehmensanalyse durchführen: So ermitteln Sie Ihren KI-Reifegrad",
    description:
      "Schritt-für-Schritt-Anleitung zur kostenlosen KI Unternehmensanalyse auf ki-unternehmensanalyse.de — von der Dateneingabe bis zum personalisierten Ergebnis mit Handlungsempfehlungen.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "KI Unternehmensanalyse starten",
        text: "Öffnen Sie ki-unternehmensanalyse.de und klicken Sie auf 'Jetzt KI-Analyse starten'. Der Fragebogen umfasst 10 kurze Abschnitte zu Ihrem Unternehmen, KI-Status, Prozessen und mehr.",
        url: `https://${siteConfig.domain}`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Unternehmensdaten und KI-Status eingeben",
        text: "Geben Sie grundlegende Informationen zu Ihrem Unternehmen ein: Branche, Größe, aktueller KI-Einsatz und Automatisierungsgrad. Der Fragebogen passt sich an Ihre Antworten an.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "KI-Reifegrad und Einsparpotenzial erhalten",
        text: "Nach Abschluss berechnet der Algorithmus sofort Ihren KI-Reifegrad (0–100), aufgeschlüsselt nach sechs Kategorien, inklusive geschätztem Einsparpotenzial in Stunden und Euro.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Handlungsempfehlungen umsetzen",
        text: "Nutzen Sie die konkreten Handlungsempfehlungen als KI-Roadmap. Optional buchen Sie ein kostenloses 30-Minuten-Strategiegespräch mit unseren KI-Experten.",
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
        name: "Was ist eine KI Unternehmensanalyse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eine KI Unternehmensanalyse ist eine systematische Bewertung des KI-Reifegrads eines Unternehmens. Sie untersucht in sechs Dimensionen, wie gut ein Unternehmen auf den Einsatz von Künstlicher Intelligenz vorbereitet ist — von der strategischen Verankerung über die Dateninfrastruktur bis hin zu Mitarbeiterkompetenzen und Budget. Das Ergebnis ist ein Score von 0 bis 100 mit konkreten Handlungsempfehlungen.",
        },
      },
      {
        "@type": "Question",
        name: "Was ist der Unterschied zwischen KI Unternehmensanalyse und KI Readiness Check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Begriffe KI Unternehmensanalyse, KI Readiness Check und KI Reifegrad Analyse werden häufig synonym verwendet. Alle beschreiben eine strukturierte Bewertung der KI-Reife eines Unternehmens. Das Tool auf ki-unternehmensanalyse.de kombiniert alle drei Dimensionen: IST-Zustand-Analyse, Reifegrad-Bewertung und konkrete Handlungsempfehlungen.",
        },
      },
      {
        "@type": "Question",
        name: "Ist die KI Unternehmensanalyse kostenlos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, die KI Unternehmensanalyse auf ki-unternehmensanalyse.de ist zu 100 % kostenlos und unverbindlich. Sie erhalten eine fundierte Standortbestimmung mit KI-Reifegrad, Einsparpotenzial und Handlungsempfehlungen — ohne versteckte Kosten.",
        },
      },
      {
        "@type": "Question",
        name: "Für welche Branchen eignet sich die KI Unternehmensanalyse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die KI Unternehmensanalyse ist branchenübergreifend konzipiert und eignet sich für alle Wirtschaftszweige: Handwerk, Produktion, Handel, Dienstleistung, IT, Gesundheitswesen, Finanzwesen, Logistik und mehr. Besonders geeignet für Unternehmen mit 10 bis 1.000 Mitarbeitenden.",
        },
      },
      {
        "@type": "Question",
        name: "Wie wird der KI-Reifegrad berechnet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der KI-Reifegrad basiert auf einem gewichteten Scoring-Modell über sechs Kernkategorien: KI-Einsatz & Strategie, Prozessautomatisierung, Daten & Infrastruktur, digitale Sichtbarkeit, Mitarbeiterkompetenzen und Budget-Bereitschaft. Jede Kategorie wird einzeln bewertet und zu einem Gesamtscore aggregiert.",
        },
      },
      {
        "@type": "Question",
        name: "Was passiert nach der KI Unternehmensanalyse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sie erhalten sofort Ihren KI-Reifegrad-Score (0–100), Kategorieauswertung, geschätztes Einsparpotenzial und konkrete Handlungsempfehlungen. Optional können Sie ein kostenloses 30-Minuten-Strategiegespräch mit den KI-Experten der track by track GmbH buchen.",
        },
      },
      {
        "@type": "Question",
        name: "Wer steckt hinter ki-unternehmensanalyse.de?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die KI Unternehmensanalyse wird von der track by track GmbH (famefact) betrieben. Geschäftsführer Tobias Sander berät seit über 10 Jahren mittelständische Unternehmen bei der digitalen Transformation und KI-Einführung.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die KI Unternehmensanalyse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die gesamte KI Unternehmensanalyse umfasst 10 kurze Abschnitte und dauert in der Regel nur 5 Minuten. Sie erhalten Ihr Ergebnis mit KI-Reifegrad und Handlungsempfehlungen sofort nach Abschluss.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie auch persönliche KI Beratung an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, neben der kostenlosen digitalen KI Unternehmensanalyse bieten wir auch persönliche KI Beratung an — remote per Videocall oder vor Ort. Unser Standort ist Berlin, wir beraten aber bundesweit.",
        },
      },
      {
        "@type": "Question",
        name: "Wer sieht meine Daten aus der KI Analyse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Der Score wird direkt in Ihrem Browser berechnet. Kontaktdaten werden ausschließlich von unserem Beratungsteam verwendet.",
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
