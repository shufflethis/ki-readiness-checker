export const siteConfig = {
  domain: "unternehmenki.de",
  siteName: "KI-Readiness Check",
  tagline:
    "Finden Sie in 5 Minuten heraus, wo Ihr Unternehmen beim Einsatz von KI steht.",
  description:
    "Kostenloser KI-Readiness-Check für Unternehmen. Erfahren Sie Ihren KI-Reifegrad und entdecken Sie sofort nutzbare Potenziale.",
  niche: "general",
  nicheLabel: "Unternehmen",
  nicheDescription: "Entscheider, Geschäftsführer und Abteilungsleiter",
  seo: {
    title: "KI-Readiness Check | Wo steht Ihr Unternehmen?",
    description:
      "Kostenloser KI-Analyse-Fragebogen für Entscheider. In 5 Minuten erfahren Sie Ihren KI-Reifegrad und erhalten konkrete Handlungsempfehlungen.",
    keywords: [
      "KI Readiness",
      "KI Check Unternehmen",
      "KI Reifegrad",
      "KI Potenzialanalyse",
      "KI Beratung",
      "Prozessoptimierung KI",
    ],
  },
  colors: {
    primary: "#0D0D0D",
    accent: "#bbd8a7",
    iris: "#a387c1",
  },
  legal: {
    companyName: "track by track GmbH",
    street: "Schliemannstraße 23",
    zip: "10437",
    city: "Berlin",
    country: "Deutschland",
    phone: "+49 30 403 6654 30",
    email: "info@trackbytrack.de",
    managingDirector: "Gorden Allgemein",
    registerCourt: "Amtsgericht Berlin-Charlottenburg",
    registerNumber: "HRB XXXXX",
    vatId: "DE XXXXXXXXX",
    responsibleContent: "Gorden Allgemein",
  },
  scoring: {
    maturityLevels: [
      { min: 0, max: 20, label: "KI-Einsteiger", emoji: "🌱", level: 1 },
      { min: 21, max: 40, label: "KI-Experimentierer", emoji: "🔬", level: 2 },
      { min: 41, max: 60, label: "KI-Nutzer", emoji: "⚙️", level: 3 },
      { min: 61, max: 80, label: "KI-Integriert", emoji: "🚀", level: 4 },
      { min: 81, max: 100, label: "KI-First", emoji: "🏆", level: 5 },
    ],
  },
  cta: {
    primary: "Jetzt KI-Check starten",
    calendly: "https://calendly.com/trackbytrack/ki-beratung",
  },
};
