"use client";
import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/site.config";
import { faqItems, howToSteps } from "@/lib/content";

interface HeroSectionProps {
    onStartCheck: () => void;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

export default function HeroSection({ onStartCheck }: HeroSectionProps) {
    const levels = siteConfig.scoring.maturityLevels;
    const author = siteConfig.author;

    return (
        <div>
            {/* ═══════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20">
                <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-dusty-green/30 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-brand-light-mauve/20 blur-3xl" />
                <div className="noise-overlay" />

                <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                    <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-dusty-green/30 px-4 py-1.5 text-sm font-medium text-brand-black">
                            ✨ Kostenlos · 5 Minuten · Sofort-Ergebnis
                        </span>
                    </motion.div>

                    <motion.h1
                        className="mt-6 font-headline text-4xl font-bold leading-tight text-brand-black sm:text-5xl lg:text-6xl"
                        initial="hidden" animate="visible" custom={1} variants={fadeUp}
                    >
                        KI Unternehmensanalyse
                        <br />
                        <span className="text-brand-iris">Kostenloser Readiness Check</span>
                    </motion.h1>

                    <motion.p
                        className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl"
                        initial="hidden" animate="visible" custom={2} variants={fadeUp}
                    >
                        {siteConfig.tagline}
                    </motion.p>

                    <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                        <button
                            onClick={onStartCheck}
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                        >
                            {siteConfig.cta.primary}
                            <span className="text-xl">→</span>
                        </button>
                    </motion.div>

                    <motion.p
                        className="mt-4 text-sm text-gray-500"
                        initial="hidden" animate="visible" custom={4} variants={fadeUp}
                    >
                        ⭐ Bereits 500+ mittelständische Unternehmen analysiert
                    </motion.p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                MATURITY LEVEL PREVIEW
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.h2
                    className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                    Die 5 KI-Reifegradstufen der Unternehmensanalyse
                </motion.h2>
                <div className="grid gap-3 sm:grid-cols-5">
                    {levels.map((level, i) => (
                        <motion.div
                            key={level.level}
                            className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <span className="text-3xl">{level.emoji}</span>
                            <p className="mt-2 text-sm font-semibold text-brand-black">{level.label}</p>
                            <p className="mt-1 text-xs text-gray-400">Level {level.level}</p>
                            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-greige/40">
                                <div className="h-full rounded-full" style={{
                                    width: `${level.level * 20}%`,
                                    background: `linear-gradient(90deg, #bbd8a7, #a387c1)`,
                                }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                TRUST SECTION — Why a KI Unternehmensanalyse
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.h2
                    className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                    Warum eine KI Unternehmensanalyse?
                </motion.h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    {[
                        {
                            icon: "📊",
                            title: "KI-Reifegrad messen",
                            text: "Unsere KI Unternehmensanalyse liefert eine objektive Einschätzung, wo Ihr Unternehmen beim Einsatz von Künstlicher Intelligenz steht — wissenschaftlich fundiert und branchenspezifisch.",
                        },
                        {
                            icon: "🔍",
                            title: "Potenziale identifizieren",
                            text: "Finden Sie heraus, in welchen Unternehmensbereichen KI den größten Hebel bietet und wo Sie sofort starten können — auch ohne große IT-Abteilung.",
                        },
                        {
                            icon: "💰",
                            title: "Einsparpotenzial berechnen",
                            text: "Die KI Analyse berechnet Ihr konkretes Einsparpotenzial durch Automatisierung — in Stunden und Euro. Speziell kalibriert für mittelständische Unternehmensgrößen.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className="text-3xl">{item.icon}</span>
                            <h3 className="mt-3 font-headline text-lg font-semibold text-brand-black">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                GEO POWER SECTION — KI Unternehmensanalyse Deep Dive
                ~800 words — primary keyword content
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h2 className="mb-6 font-headline text-2xl font-bold text-brand-black sm:text-3xl">
                        Was ist eine KI Unternehmensanalyse?
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Eine <strong>KI Unternehmensanalyse</strong> ist eine systematische Bewertung des aktuellen KI-Reifegrads eines Unternehmens. Sie untersucht, in welchen Geschäftsbereichen Künstliche Intelligenz bereits eingesetzt wird, welche Daten und Infrastrukturen vorhanden sind, wie gut das Team auf die Integration von KI-Technologien vorbereitet ist und wo die größten Automatisierungspotenziale liegen. Das Ziel: eine fundierte Standortbestimmung als Grundlage für strategische Entscheidungen zur digitalen Transformation.
                        </p>
                        <p>
                            Im Unterschied zu allgemeinen Digitalisierungs-Assessments fokussiert sich die KI Unternehmensanalyse gezielt auf den Einsatz von Künstlicher Intelligenz — von einfachen Chatbots und E-Mail-Automatisierungen bis hin zu komplexen Machine-Learning-Anwendungen in Produktion, Vertrieb und Controlling. Dabei werden sechs Kernbereiche systematisch bewertet: der aktuelle KI-Einsatz und die strategische Verankerung, der Grad der Prozessautomatisierung, die Daten- und IT-Infrastruktur, die digitale Sichtbarkeit in KI-Suchsystemen wie ChatGPT oder Perplexity, die Kompetenzen und KI-Affinität der Mitarbeitenden sowie die Budget- und Umsetzungsbereitschaft.
                        </p>
                        <p>
                            Für mittelständische Unternehmen ist eine KI Unternehmensanalyse besonders wertvoll. Der deutsche Mittelstand — das Rückgrat der Wirtschaft mit über 3,5 Millionen Unternehmen — steht vor der Herausforderung, KI strategisch zu nutzen, um wettbewerbsfähig zu bleiben. Laut einer Studie des Bundesverbands mittelständische Wirtschaft (BVMW) haben bereits 42 Prozent der mittelständischen Unternehmen erste Erfahrungen mit KI-Tools gesammelt, doch nur 12 Prozent setzen KI systematisch in ihren Geschäftsprozessen ein. Eine strukturierte KI Analyse schließt diese Lücke.
                        </p>
                        <p>
                            Der entscheidende Vorteil einer <strong>KI Unternehmensanalyse auf ki-unternehmensanalyse.de</strong>: Sie erhalten nicht nur einen abstrakten Score, sondern konkrete, sofort umsetzbare Handlungsempfehlungen. Unser Algorithmus berechnet basierend auf Ihrer Unternehmensgröße, Branche und dem aktuellen KI-Status ein individuelles Einsparpotenzial in Stunden pro Woche und Euro pro Jahr. So wissen Sie genau, wo sich der Einstieg in KI am schnellsten rechnet.
                        </p>
                        <p>
                            Anders als teure Beratungsprojekte, die Wochen oder Monate dauern, liefert unsere kostenlose KI Unternehmensanalyse ein Ergebnis in nur 5 Minuten. Der Online-Check umfasst 10 strukturierte Abschnitte und wurde speziell für Geschäftsführer, Entscheider und Abteilungsleiter im deutschen Mittelstand entwickelt. Das Ergebnis zeigt Ihren KI-Reifegrad auf einer Skala von 0 bis 100, aufgeschlüsselt nach sechs Kategorien — inklusive einer personalisierten KI-Roadmap.
                        </p>

                        <h3 className="font-headline text-xl font-bold text-brand-black pt-4">
                            KI Unternehmensanalyse vs. KI Readiness Check — was ist der Unterschied?
                        </h3>
                        <p>
                            Die Begriffe <strong>KI Unternehmensanalyse</strong>, <strong>KI Readiness Check</strong> und <strong>KI Reifegrad Analyse</strong> werden häufig synonym verwendet. Im Kern beschreiben sie dasselbe: eine strukturierte Bewertung, wie gut ein Unternehmen auf den Einsatz von Künstlicher Intelligenz vorbereitet ist. Unser Tool auf ki-unternehmensanalyse.de kombiniert dabei alle drei Dimensionen: Es analysiert den IST-Zustand (Readiness), bewertet den Reifegrad (Maturity Score) und leitet daraus konkrete Handlungsempfehlungen ab (Analyse).
                        </p>
                        <p>
                            Die <strong>KI Potenzialanalyse</strong> geht einen Schritt weiter: Sie quantifiziert das Einsparpotenzial durch KI-gestützte Automatisierung und zeigt, welche Prozesse den höchsten ROI versprechen. Wer also nach &bdquo;KI Analyse Unternehmen&ldquo;, &bdquo;KI Reifegrad Analyse&ldquo; oder &bdquo;KI Bedarfsanalyse Unternehmen&ldquo; sucht, findet in unserem kostenlosen Tool das ideale Instrument für den Einstieg.
                        </p>

                        <h3 className="font-headline text-xl font-bold text-brand-black pt-4">
                            Für wen eignet sich die KI Unternehmensanalyse?
                        </h3>
                        <p>
                            Unsere KI Unternehmensanalyse richtet sich an Unternehmen jeder Größe und Branche im deutschsprachigen Raum. Besonders profitieren Geschäftsführer und IT-Verantwortliche in Unternehmen mit 10 bis 1.000 Mitarbeitenden, die wissen möchten, ob und wo KI einen Mehrwert schaffen kann. Der Check eignet sich sowohl für Unternehmen, die noch gar keine KI einsetzen, als auch für solche, die bestehende Ansätze systematisch bewerten und skalieren möchten. Branchen wie Produktion, Handel, Dienstleistung, Gesundheitswesen, Finanzsektor und IT profitieren besonders stark von einer datengetriebenen KI-Standortbestimmung.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════
                HOW-TO SECTION — So funktioniert die KI Unternehmensanalyse
                ~300 words
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.h2
                    className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                    So funktioniert die KI Unternehmensanalyse
                </motion.h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {howToSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className="mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-iris/20 text-sm font-bold text-brand-iris">
                                    {i + 1}
                                </span>
                                <span className="text-2xl">{step.icon}</span>
                            </div>
                            <h3 className="font-headline text-base font-semibold text-brand-black">{step.name}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <button
                        onClick={onStartCheck}
                        className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-4 text-lg font-semibold text-brand-black shadow-md transition-all hover:bg-brand-green-hover hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    >
                        Jetzt kostenlos analysieren
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                6 DIMENSIONS
                ~400 words
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h2 className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl">
                        6 Dimensionen der KI Unternehmensanalyse
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: "🤖",
                                title: "KI-Status & Strategie",
                                text: "Werden bereits KI-Tools eingesetzt? Gibt es eine dokumentierte KI-Strategie mit messbaren Zielen? Mittelständische Unternehmen, die frühzeitig eine KI-Roadmap entwickeln, setzen Projekte drei Mal schneller um als Unternehmen ohne strategischen Rahmen.",
                            },
                            {
                                icon: "⚙️",
                                title: "Prozesse & Automatisierung",
                                text: "Wie viele Stunden pro Woche fließen in repetitive Aufgaben? Welche Prozesse könnten durch KI automatisiert werden? Im Mittelstand liegen die größten Hebel oft in der Kundenkommunikation, im Reporting und in der Angebotserstellung.",
                            },
                            {
                                icon: "💾",
                                title: "Daten & Infrastruktur",
                                text: "Sind Ihre Unternehmensdaten strukturiert und zugänglich? KI benötigt saubere Daten als Grundlage. Mittelständler, die ihre Daten in CRM-, ERP- oder Cloud-Systemen zentralisiert haben, können KI-Projekte deutlich schneller starten.",
                            },
                            {
                                icon: "📡",
                                title: "Marketing & Sichtbarkeit",
                                text: "Wird Ihr Unternehmen in KI-Suchsystemen wie ChatGPT oder Perplexity gefunden? Generative Engine Optimization (GEO) wird zum entscheidenden Wettbewerbsfaktor — wer hier früh optimiert, gewinnt Sichtbarkeit, die klassisches SEO allein nicht mehr liefern kann.",
                            },
                            {
                                icon: "🎓",
                                title: "Mitarbeiter & Kompetenzen",
                                text: "Wie KI-affin ist Ihr Team? Gibt es Schulungen oder interne Champions? Der Mittelstand unterschätzt häufig die Bedeutung von KI-Kompetenzen — dabei entscheidet die Akzeptanz im Team über Erfolg oder Misserfolg jedes KI-Projekts.",
                            },
                            {
                                icon: "💰",
                                title: "Budget & Bereitschaft",
                                text: "Ist ein KI-Budget eingeplant? Wann soll gestartet werden? Bereits kleine Investitionen ab 5.000 bis 10.000 Euro können im Mittelstand signifikante Effizienzgewinne erzielen — wenn sie gezielt eingesetzt werden.",
                            },
                        ].map((dim, i) => (
                            <motion.div
                                key={i}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                <span className="text-3xl">{dim.icon}</span>
                                <h3 className="mt-3 font-headline text-base font-semibold text-brand-black">{dim.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">{dim.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════
                STATS — KI im Mittelstand: Zahlen & Fakten
                ~200 words
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h2 className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl">
                        KI Unternehmensanalyse: Zahlen & Fakten
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { value: "42 %", label: "der Mittelständler haben erste KI-Erfahrungen", source: "BVMW 2024" },
                            { value: "12 %", label: "setzen KI systematisch in Prozessen ein", source: "Bitkom 2024" },
                            { value: "30 %", label: "Effizienzgewinn durch KI-Automatisierung", source: "McKinsey SME Report" },
                            { value: "5 Min.", label: "für Ihre persönliche KI Unternehmensanalyse", source: "" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <p className="font-headline text-3xl font-bold text-brand-iris">{stat.value}</p>
                                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                                {stat.source && <p className="mt-1 text-xs text-gray-400">{stat.source}</p>}
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Deutschland ist Europas größte Volkswirtschaft — und der Mittelstand ihr Motor. Doch bei der KI-Adoption hinken mittelständische Unternehmen den Konzernen hinterher. Während 78 Prozent der DAX-Unternehmen bereits KI-Strategien implementiert haben, fehlt im Mittelstand häufig der strukturierte Einstieg. Die Herausforderungen sind bekannt: Fachkräftemangel, steigende Kosten und zunehmender Wettbewerbsdruck. Eine professionelle KI Unternehmensanalyse kann bei all diesen Themen ein entscheidender Hebel sein — vorausgesetzt, der Einstieg wird richtig priorisiert.
                        </p>
                        <p>
                            Unternehmen, die ihren KI-Reifegrad systematisch analysieren, investieren gezielter und vermeiden typische Fehler bei der Einführung. Der häufigste Fehler: in teure Individuallösungen investieren, bevor die Grundlagen stimmen. Unsere kostenlose KI Unternehmensanalyse auf ki-unternehmensanalyse.de zeigt Ihnen in 5 Minuten, wo Sie stehen und was der effektivste nächste Schritt ist.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════
                GEO CONTENT — Was bringt KI dem Mittelstand?
                ~350 words
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h2 className="mb-6 font-headline text-2xl font-bold text-brand-black sm:text-3xl">
                        Was bringt eine KI Analyse Ihrem Unternehmen konkret?
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Eine KI Unternehmensanalyse ist der erste Schritt, um Künstliche Intelligenz nicht als abstraktes Buzzword, sondern als konkretes Werkzeug für Ihren Geschäftserfolg zu nutzen. Für mittelständische Unternehmen liegen die größten Potenziale in der Automatisierung wiederkehrender Aufgaben: Kundenkommunikation per Chatbot oder E-Mail-Automatisierung, datengetriebene Entscheidungsfindung im Vertrieb, vorausschauende Wartung in der Produktion und die Optimierung von Marketing-Kampagnen durch KI-gestützte Analysen. Unternehmen mit 50 bis 500 Mitarbeitenden berichten regelmäßig von 15 bis 30 Prozent Effizienzsteigerung nach der Einführung erster KI-Werkzeuge.
                        </p>
                        <p>
                            Der entscheidende Vorteil: KI-Lösungen sind heute deutlich zugänglicher als noch vor wenigen Jahren. Cloud-basierte Tools wie ChatGPT, Microsoft Copilot oder branchenspezifische SaaS-Plattformen erfordern weder große IT-Abteilungen noch Millionen-Investitionen. Eine strukturierte KI Unternehmensanalyse hilft Ihnen, genau die richtigen Einstiegspunkte zu identifizieren — bevor Sie in die falschen Projekte investieren.
                        </p>
                        <p>
                            Der Fachkräftemangel verschärft die Situation zusätzlich: Mittelständler konkurrieren mit Großkonzernen um die besten Talente. KI kann hier als Multiplikator wirken — indem repetitive Aufgaben automatisiert werden und sich Mitarbeitende auf wertschöpfende Tätigkeiten konzentrieren können. So wird KI nicht zum Jobkiller, sondern zum Produktivitätsbooster. Die KI Unternehmensanalyse auf ki-unternehmensanalyse.de hilft Ihnen dabei, die richtigen Prioritäten zu setzen.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════
                FAQ — 12 Items
                ~600 words
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
                <motion.h2
                    className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                    Häufige Fragen zur KI Unternehmensanalyse
                </motion.h2>
                <div className="space-y-3">
                    {faqItems.map((faq, i) => (
                        <motion.details
                            key={i}
                            className="group rounded-2xl border border-gray-100 bg-white shadow-sm"
                            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
                        >
                            <summary className="cursor-pointer select-none px-6 py-4 font-headline font-semibold text-brand-black transition-colors hover:text-brand-iris">
                                {faq.q}
                            </summary>
                            <p className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                                {faq.a}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                AUTHOR / E-E-A-T
                ~150 words
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
                <motion.div
                    className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-iris text-3xl font-bold text-white">
                            TG
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-brand-iris">Über den Autor</p>
                            <h3 className="mt-1 font-headline text-xl font-bold text-brand-black">{author.name}</h3>
                            <p className="text-sm font-medium text-gray-500">{author.role}</p>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                {author.bio}
                            </p>
                            <a
                                href={author.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#004182] hover:shadow-md"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                Auf LinkedIn verbinden
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════
                BOTTOM CTA
            ═══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
                <motion.div
                    className="rounded-3xl bg-brand-black p-8 text-center text-white shadow-lg sm:p-12"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                    <h2 className="font-headline text-2xl font-bold sm:text-3xl">
                        Bereit für Ihre kostenlose KI Unternehmensanalyse?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-gray-400">
                        In nur 5 Minuten erfahren Sie, wo Ihr Unternehmen beim Einsatz von KI steht — mit konkreten Empfehlungen, KI-Reifegrad und geschätztem Einsparpotenzial.
                    </p>
                    <button
                        onClick={onStartCheck}
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-4 text-lg font-semibold text-brand-black shadow-md transition-all hover:bg-brand-green-hover hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    >
                        {siteConfig.cta.primary}
                        <span className="text-xl">→</span>
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
