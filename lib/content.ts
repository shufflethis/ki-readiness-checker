// Shared FAQ and HowTo data — used by both layout.tsx (JSON-LD) and HeroSection.tsx (UI)

export const faqItems = [
    {
        q: "Was ist eine KI Beratung KMU?",
        a: "Eine KI Beratung KMU ist eine systematische Bewertung des KI-Reifegrads eines Unternehmens. Sie untersucht in sechs Dimensionen, wie gut ein Unternehmen auf den Einsatz von Künstlicher Intelligenz vorbereitet ist — von der strategischen Verankerung über die Dateninfrastruktur bis hin zu Mitarbeiterkompetenzen und Budget. Das Ergebnis ist ein Score von 0 bis 100 mit konkreten Handlungsempfehlungen.",
    },
    {
        q: "Was bringt eine KI Beratung KMU meinem Unternehmen?",
        a: "Die KI Beratung KMU zeigt Ihnen objektiv, wo Ihr Unternehmen beim Einsatz von KI steht, welche Automatisierungspotenziale bestehen und wie hoch Ihr Einsparpotenzial durch KI ist. Sie erhalten konkrete, sofort umsetzbare Empfehlungen — priorisiert nach Wirkung und Aufwand. So vermeiden Sie teure Fehlinvestitionen und starten gezielt mit den richtigen KI-Projekten.",
    },
    {
        q: "Was ist der Unterschied zwischen KI Beratung KMU und KI Readiness Check?",
        a: "Die Begriffe KI Beratung KMU, KI Readiness Check und KI Reifegrad Analyse werden häufig synonym verwendet. Alle beschreiben eine strukturierte Bewertung der KI-Reife eines Unternehmens. Unser Tool auf ki-beratung-kmu.de kombiniert alle drei Dimensionen: IST-Zustand-Analyse (Readiness), Reifegrad-Bewertung (Maturity Score) und konkrete Handlungsempfehlungen (Analyse).",
    },
    {
        q: "Was bringt KI dem Mittelstand konkret?",
        a: "KI kann mittelständischen Unternehmen helfen, repetitive Aufgaben zu automatisieren, Kosten zu senken und datenbasierte Entscheidungen zu treffen. Typische Anwendungsbereiche sind Kundenkommunikation, Marketing-Automatisierung, Datenanalyse und Prozessoptimierung. Unternehmen mit 50 bis 500 Mitarbeitenden berichten von 15–30 % Effizienzgewinnen nach der Einführung erster KI-Tools.",
    },
    {
        q: "Wie lange dauert die KI Beratung KMU?",
        a: "Der gesamte Fragebogen umfasst 10 Abschnitte und dauert in der Regel etwa 5 Minuten. Sie erhalten sofort nach Abschluss Ihr Ergebnis mit KI-Reifegrad, Kategorie-Breakdown, Einsparpotenzial und individuellen Empfehlungen — ohne Wartezeit.",
    },
    {
        q: "Ist die KI Beratung KMU wirklich kostenlos?",
        a: "Ja, die KI Beratung KMU auf ki-beratung-kmu.de ist zu 100 % kostenlos und unverbindlich. Sie können Ihre Ergebnisse sofort einsehen. Es entstehen keine versteckten Kosten. Optional können Sie ein kostenloses Beratungsgespräch buchen, um die Ergebnisse persönlich zu besprechen.",
    },
    {
        q: "Für welche Unternehmen eignet sich die KI Analyse?",
        a: "Die KI Beratung KMU richtet sich an Unternehmen aller Branchen und Größen im deutschsprachigen Raum — von Produktion und Handel über Dienstleistungen bis hin zu IT und Gesundheit. Besonders geeignet für Unternehmen mit 10 bis 1.000 Mitarbeitenden, die ihre KI-Strategie aufbauen oder bestehende Ansätze systematisch bewerten möchten.",
    },
    {
        q: "Was kostet die Einführung von KI im Mittelstand?",
        a: "Die Kosten variieren stark je nach Umfang und Branche. Erste KI-Tools (ChatGPT, Copilot) können bereits ab wenigen hundert Euro pro Monat eingesetzt werden. Strategische KI-Projekte mit individueller Anpassung liegen typischerweise zwischen 10.000 und 100.000 Euro. Unsere KI Beratung KMU hilft Ihnen, die richtigen Prioritäten zu setzen, bevor Sie investieren.",
    },
    {
        q: "Wer sieht meine Daten aus dem Fragebogen?",
        a: "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Der Score wird direkt in Ihrem Browser berechnet. Wenn Sie eine persönliche Analyse wünschen, werden Ihre Kontaktdaten ausschließlich von unserem Beratungsteam der track by track GmbH verwendet.",
    },
    {
        q: "Was passiert nach der KI Beratung KMU?",
        a: "Nach Abschluss erhalten Sie sofort Ihren KI-Reifegrad-Score, eine Detailanalyse nach sechs Kategorien, Ihr geschätztes Einsparpotenzial in Stunden und Euro sowie individuelle Handlungsempfehlungen. Optional können Sie ein kostenloses 30-Minuten-Strategiegespräch mit unseren KI-Experten buchen.",
    },
    {
        q: "Wie unterscheidet sich diese KI Analyse von anderen Assessments?",
        a: "Unsere KI Beratung KMU wurde speziell für den deutschen Mittelstand entwickelt. Sie berücksichtigt branchenspezifische Anforderungen, die typische Unternehmensstruktur von KMU und berechnet ein individuelles Einsparpotenzial. Anders als allgemeine Assessments liefert sie sofortige, konkrete Empfehlungen — ohne wochenlange Beratungsprojekte.",
    },
    {
        q: "Kann KI auch ohne große IT-Abteilung eingesetzt werden?",
        a: "Ja, absolut. Viele moderne KI-Tools sind als SaaS-Lösungen verfügbar und erfordern keine eigene IT-Infrastruktur. ChatGPT, Microsoft Copilot oder Marketing-Automation-Tools können von jedem Mitarbeitenden genutzt werden. Eine kleine IT-Abteilung oder ein externer KI-Berater reichen aus, um die strategische Implementierung zu begleiten.",
    },
];

export const howToSteps = [
    {
        name: "Fragebogen ausfüllen",
        text: "Beantworten Sie 10 kurze Abschnitte zu Ihrem Unternehmen, KI-Status, Prozessen, Daten, Marketing, Mitarbeiterkompetenzen und Budget. Die KI Beratung KMU dauert etwa 5 Minuten.",
        icon: "📋",
    },
    {
        name: "KI-Reifegrad erhalten",
        text: "Unser Algorithmus berechnet sofort Ihren KI-Reifegrad auf einer Skala von 0 bis 100 — aufgeschlüsselt nach sechs Kernkategorien mit individuellen Bewertungen pro Dimension.",
        icon: "📊",
    },
    {
        name: "Einsparpotenzial sehen",
        text: "Basierend auf Unternehmensgröße, Branche und dem Umfang repetitiver Aufgaben erhalten Sie eine Schätzung Ihres Einsparpotenzials in Stunden pro Woche und Euro pro Jahr.",
        icon: "💰",
    },
    {
        name: "Kostenlose Beratung buchen",
        text: "Optional buchen Sie ein kostenloses 30-Minuten-Strategiegespräch mit unseren KI-Experten, um Ihre Ergebnisse zu besprechen und konkrete Maßnahmen zu planen.",
        icon: "📅",
    },
];
