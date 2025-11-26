export type Language = 'nl' | 'en'

export type TranslationKey = string

export const translations = {
    nl: {
        common: {
            title: 'Prompting gids',
            subtitle: 'Voor juristen',
            print: 'Print',
            footer: '© 2025',
            attachmentRequired: 'Bijlage vereist',
            attachmentTip: 'Voeg het document toe aan je prompt.',
            dos: "Do's",
            donts: "Don'ts",
            when: 'Wanneer',
            why: 'Waarom',
            example: 'Voorbeeld',
            tip: 'Tip',
            useCases: 'Juridische Use Cases',
            fundamentals: 'De Fundamenten',
            suchAs: 'zoals',
            or: 'of',
        },
        sidebar: {
            overview: 'Overzicht',
            techniques: 'Technieken',
            intro: 'Introductie',
            bestPractices: 'Best Practices',
            fundamentals: 'De Fundamenten',
            contractDrafting: 'Contracten & Documenten',
            legalResearch: 'Juridisch Onderzoek',
            litigation: 'Processtukken',
            clientCommunication: 'Cliëntcommunicatie',
            strategy: 'Strategie',
        },
        intro: {
            title: 'Prompting gids voor juristen',
            p1: 'Deze prompting gids biedt een overzicht van de belangrijkste promptingtechnieken specifiek voor juridisch werk. Prompting is de kunst van het formuleren van effectieve vragen en opdrachten aan AI-tools. Hoe beter je prompt, hoe relevanter en bruikbaarder de output.',
            p2: 'Effectief prompting verhoogt de kwaliteit van juridische analyses, bespaart tijd bij documentverwerking en helpt bij het structureren van complexe rechtsvragen. De technieken variëren van eenvoudige instructies tot geavanceerde (conversationele) methoden.',
            howTo: 'Hoe gebruik je deze gids?',
            p3: 'Begin met de basistechnieken, experimenteer met verschillende tactieken en doe geleidelijk ervaring op. De voorbeelden zijn direct toepasbaar in je dagelijkse praktijk.',
        },
        warning: {
            title: 'Belangrijke waarschuwing: juridisch onderzoek en hallucinaties',
            p1: 'AI-tools zoals ChatGPT, Claude en Gemini zijn niet gemaakt voor juridisch onderzoek. Zij hebben namelijk geen toegang tot rechtsbronnen (zoals actuele Nederlandse wet- en regelgeving of jurisprudentie). Bij vragen over specifieke wetsartikelen, uitspraken of regelgeving bestaat een groot risico op hallucinaties: de AI verzint dan overtuigend klinkende maar feitelijk onjuiste informatie.',
            optionsTitle: 'Voor betrouwbaar juridisch onderzoek heb je twee opties:',
            option1: 'Voeg zelf de relevante wetteksten, jurisprudentie of andere juridische bronnen als bijlage toe aan je prompt, zodat de AI alleen kan putten uit betrouwbaar materiaal',
            option2: 'Gebruik een gespecialiseerde juridische AI-tool die toegang heeft tot actuele juridische databases',
            conclusion: 'Vertrouw nooit blind op AI-output bij juridische vragen zonder deze te verifiëren met betrouwbare bronnen.',
        },
        bestPractices: {
            title: 'Best practices & praktische tips',
            generalTitle: 'Algemene principes voor effectief prompting',
            items: [
                { title: 'Wees specifiek en duidelijk', desc: 'Vage opdrachten leveren vage resultaten. Benoem precies wat je verwacht.' },
                { title: 'Geef context', desc: 'Leg uit waarom je iets vraagt en voor wie de output bedoeld is.' },
                { title: 'Begin breed, verfijn daarna', desc: 'Start met een algemene vraag en zoom in op basis van het antwoord.' },
                { title: 'Test en itereer', desc: 'Probeer verschillende formuleringen en leer wat het beste werkt.' },
                { title: 'Gebruik voorbeelden', desc: 'Laat zien hoe je het wilt in plaats van alleen te vertellen.' },
                { title: 'Stel grenzen', desc: 'Beperk lengte, structuur of focus als dat helpt.' },
                { title: 'Valideer de output', desc: 'Controleer altijd juridische analyses en bronnen.' },
            ],
            proTip: { title: 'Pro tip:', desc: 'Bewaar succesvolle prompts en bouw je eigen bibliotheek op. Wat vandaag werkt, kun je morgen hergebruiken en aanpassen.' },
            legalContext: { title: 'Juridische context:', desc: 'AI-tools zijn geen vervanging voor juridische expertise. Gebruik ze als assistent bij research, structurering en eerste analyses, maar vertrouw niet blind op de output. Controleer altijd bronnen en conclusies.' },
            iterativeWork: { title: 'Iteratief werken:', desc: 'Zie prompting als een gesprek, niet als een eenmalige opdracht. Stel vervolgvragen, vraag om verduidelijking en verfijn stapsgewijs naar het gewenste resultaat.' },
        },
        fundamentals: {
            title: 'De Fundamenten',
            desc: 'Deze vijf basistechnieken vormen de bouwstenen voor elke goede prompt. Beheers deze voordat je aan de slag gaat met complexere use cases.',
            techniques: [
                {
                    title: 'Single shot prompting',
                    desc: 'Wanneer te gebruiken: voor eenvoudige, directe vragen zonder voorbeelden. Effectief voor taken die duidelijk zijn en weinig context vereisen.',
                    example: 'Vat deze huurovereenkomst samen in 3 hoofdpunten.',
                    dos: ['Wees specifiek over wat je wilt', 'Geef duidelijke output-verwachtingen', 'Gebruik voor eenvoudige, duidelijke taken'],
                    donts: ['Geen vage of brede vragen', 'Niet voor complexe analyses gebruiken', 'Geen inconsistente format verwachten']
                },
                {
                    title: 'Few shot prompting',
                    desc: 'Wanneer te gebruiken: als je specifieke voorbeelden wilt geven van hoe de output eruit moet zien. Verhoogt de consistentie en kwaliteit aanzienlijk.',
                    example: `Hier zie je hoe ik bepalingen uit een arbeidsovereenkomst samenvat:

1. Proeftijd: maximaal 1 maand, conform art. 7:652 lid 4 BW
2. Concurrentiebeding: geldig voor 12 maanden na einde dienstverband, geografisch beperkt tot Nederland

Vat nu de volgende bepaling op dezelfde manier samen: ....`,
                    dos: ['Geef 2-5 concrete voorbeelden', 'Zorg voor consistentie in voorbeelden', 'Laat het gewenste format zien'],
                    donts: ['Geen tegenstrijdige voorbeelden', 'Niet te veel voorbeelden (>5)', 'Geen voorbeelden van slechte kwaliteit']
                },
                {
                    title: 'Chained prompts / Multi-step',
                    desc: 'Wanneer te gebruiken: voor complexe taken die meerdere stappen vereisen. Deel het probleem op in beheersbare delen.',
                    example: `Analyseer deze huurovereenkomst.
Identificeer risico's voor verhuurder.
Controleer op ongebruikelijke clausules.
Geef concrete implementatie-aanbevelingen.`,
                    dos: ['Splits complexe taken op', 'Logische volgorde aanhouden', 'Elke stap duidelijk formuleren'],
                    donts: ['Geen onlogische stappen-volgorde', 'Niet te veel stappen (max 5-6)', 'Geen afhankelijkheden overslaan']
                },
                {
                    title: 'Chain of thought prompting',
                    desc: 'Wanneer te gebruiken: voor complexe juridische analyses waarbij stapsgewijze redenering vereist is. Verbetert de kwaliteit van juridische conclusies.',
                    example: `Analyseer dit ontslagdossier stap voor stap:

1. Identificeer eerst de juridische vraag.
2. Bepaal welke artikelen uit het BW van toepassing zijn.
3. Beoordeel of de procedure correct is gevolgd.
4. Pas de regels toe op de specifieke feiten.
5. Evalueer de kansen van beide partijen.
6. Trek een gemotiveerde conclusie.`,
                    dos: ['Vraag expliciet om stapsgewijze redenering', 'Laat tussenstappen zien', 'Gebruik voor juridische analyses'],
                    donts: ['Geen stappen overslaan toestaan', 'Niet voor simpele vragen gebruiken', 'Geen onduidelijke stappen-definities']
                },
                {
                    title: 'Persona prompting',
                    desc: 'Wanneer te gebruiken: om de AI een specifieke rol en expertise te geven. Beïnvloedt de toon en diepgang van het antwoord.',
                    example: 'Beantwoord mijn vragen als ervaren arbeidsrecht advocaat die deze zaak moet beoordelen. Welke aspecten vind je het meest relevant?',
                    dos: ['Kies relevante expertise', 'Wees specifiek over de rol', 'Geef context aan de persona'],
                    donts: ['Geen vage rollen ("expert")', 'Niet meerdere tegenstrijdige rollen', 'Geen irrelevante expertise vragen']
                }
            ]
        },
        useCases: {
            legalResearch: {
                title: 'Juridisch onderzoek & analyse',
                desc: 'Technieken voor het vinden, analyseren en structureren van juridische informatie. Focus op diepgang, volledigheid en het vermijden van hallucinaties.',
                irac: {
                    title: 'IRAC framework',
                    subtitle: 'De standaard voor juridische analyse',
                    example: `Analyseer deze zaak volgens het IRAC-framework:

1. Issue: Wat is de juridische vraag?
2. Rule: Welke wettelijke regels zijn van toepassing?
3. Application: Hoe passen deze regels op deze specifieke feiten?
4. Conclusion: Wat is de juridische conclusie?`,
                    why: 'Dwingt de AI om structuur aan te brengen en niet direct naar een conclusie te springen.'
                },
                stepBack: {
                    title: 'Step back prompting',
                    subtitle: 'Voor betere contextualisering',
                    example: `Voordat je deze juridische vraag beantwoordt, neem eerst een stap terug.

Welke bredere (juridische) principes zijn hier relevant?
- Wat is de maatschappelijke context van dit vraagstuk?
- Hoe past dit in de ontwikkeling van de rechtspraak?

Nu pas: geef je specifieke juridische analyse.`
                },
                fiveW: {
                    title: '5W1H - feitelijke analyse',
                    subtitle: 'Zorg dat geen enkel feit over het hoofd wordt gezien',
                    example: `Analyseer dit incident volgens het 5W1H-framework:

- Who: Wie zijn de betrokken partijen?
- What: Wat is er precies gebeurd?
- When: Wanneer vond dit plaats?
- Where: Waar heeft het plaatsgevonden?
- Why: Waarom is dit relevant/gebeurd?
- How: Hoe heeft dit zich afgespeeld?`
                },
                bias: {
                    title: 'Bias awareness & reflectie',
                    subtitle: 'Voorkom tunnelvisie in je onderzoek',
                    example: `- Welke aannames maak je over het gedrag van de ondernemer?
- Zijn die aannames eerlijk en juridisch goed onderbouwd?
- Is er ruimte voor een andere lezing?
- Waar baseer je dit advies precies op? (Rationale prompting)`
                }
            },
            contractDrafting: {
                title: 'Contracten & documenten',
                desc: 'Technieken voor het opstellen, analyseren en samenvatten van contracten en grote documenten. Focus op precisie, consistentie en het verwerken van grote hoeveelheden tekst.',
                chunking: {
                    title: 'Document chunking',
                    subtitle: 'Voor het verwerken van grote documenten',
                    example: `Deel dit document op in secties van max 20 pagina's. 
Analyseer elke sectie apart op [criterium]. 
Geef daarna een overall conclusie.`,
                    tags: ['Grote bestanden', 'Diepe analyse']
                },
                confirm: {
                    title: 'Confirm-and-continue',
                    subtitle: 'Houd controle over het proces',
                    example: `- Analyseer <bestemmingsplan.pdf> op afwijkingsmogelijkheden.
- Stop na elke relevante passage en wacht op akkoord van mij op je analyse.
- Als alles geanalyseerd is, geef een overzichtelijke samenvatting.`
                },
                mece: {
                    title: 'MECE structurering',
                    subtitle: 'Mutually Exclusive, Collectively Exhaustive',
                    example: `Analyseer dit contract volgens het MECE-principle:

Zorg dat je analyse:
- Mutually Exclusive: elke clausule valt in één categorie (geen overlap)
- Collectively Exhaustive: alle clausules zijn gedekt (volledig)

Categoriseer in: verplichtingen partijen, financieel, aansprakelijkheid, beëindiging.`
                },
                constraints: {
                    title: 'Output constraints',
                    subtitle: 'Stuur de vorm van het antwoord',
                    example: {
                        concise: { title: 'Beknopt', example: "Vat deze analyse samen in maximaal drie alinea's." },
                        direct: { title: 'Direct', example: 'Lijst de belangrijkste punten op in opsommingstekens, zonder inleiding.' }
                    }
                },
                footnotes: {
                    title: 'Voetnoten assistent',
                    subtitle: 'Voor correcte bronvermelding',
                    example: `Je bent een juridische assistent voor het maken van voetnoten. Je gebruikt de kennis in de bijgevoegde 'Leidraad voor juridische auteurs' om voetnoten voor mij te maken.

Wanneer een gebruiker aan je vraagt om een voetnoot te maken, vraag je eerste uit welke bron de gebruiker wil citeren.`,
                    attachment: "Voeg de 'Leidraad voor juridische auteurs' toe."
                }
            },
            litigation: {
                title: 'Processtukken & strategie',
                desc: 'Technieken voor het opbouwen van overtuigende argumentatie, het anticiperen op verweren en het bepalen van processtrategie.',
                sato: {
                    title: 'SATO framework',
                    subtitle: 'Voor juridische stellingname',
                    example: `Beoordeel deze zaak volgens het SATO-framework:

1. Standpunt: Wat is ons juridische standpunt?
2. Argument: Welke argumenten ondersteunen dit standpunt?
3. Tegenargument: Welke tegenargumenten zijn te verwachten?
4. Oordeel: Hoe weerleggen we de tegenargumenten en wat is de conclusie?`
                },
                devil: {
                    title: "Devil's advocate",
                    subtitle: 'Identificeer zwakke plekken',
                    example: `Bekijk dit advies voor herstructurering:

- Welke risico's zijn onderschat of te optimistisch?
- Wie zou bezwaar kunnen maken, en op welke gronden?
- Welk relevant scenario is nog niet meegenomen?`
                },
                persona: {
                    title: 'Persona prompting',
                    subtitle: 'Simuleer de tegenpartij of rechter',
                    example: {
                        judge: { title: 'De Rechter', example: 'Lees dit concept-verzoekschrift als een kritische kantonrechter. Welke onderdelen zijn niet overtuigend of missen onderbouwing?' },
                        opponent: { title: 'De Tegenpartij', example: "Reageer als een boze en zenuwachtige cliënt die de procesrisico's te laat tot zich heeft door laten dringen." }
                    }
                },
                stepByStep: {
                    title: 'Stapsgewijze analyse',
                    subtitle: 'Voor complexe dossiers',
                    example: `Prompt 1: Identificeer de kernvragen in dit huurgeschil.

Prompt 2: Welke artikelen uit boek 6 & 7 van het BW zijn hierop van toepassing?

Prompt 3: Pas deze artikelen toe op de feiten en geef een voorlopige conclusie.`
                }
            },
            clientCommunication: {
                title: 'Cliëntcommunicatie & advies',
                desc: 'Technieken voor het vertalen van complexe juridische analyses naar heldere, begrijpelijke adviezen voor cliënten.',
                audience: {
                    title: 'Audience & tone',
                    subtitle: 'Stem je boodschap af op de ontvanger',
                    example: `Publiek: Ondernemer zonder juridische achtergrond, wel commercieel ervaren.
Toon: Professioneel maar toegankelijk, zonder juridisch jargon.

Schrijf een e-mail die de cliënt informeert over de risico's zonder hem onnodig ongerust te maken.`
                },
                eli5: {
                    title: 'ELI5 framework',
                    subtitle: "Explain Like I'm 5 (maar dan professioneel)",
                    example: 'Leg het concept van aansprakelijkheid bij productdefecten uit alsof je het aan iemand uitlegt zonder juridische achtergrond. Gebruik heldere taal en concrete voorbeelden.'
                },
                pyramid: {
                    title: 'Pyramid principle',
                    subtitle: 'Start met de conclusie',
                    example: `Schrijf een advies volgens het Pyramid Principle:

1. Begin met de conclusie/advies (wat moet de cliënt doen?)
2. Geef de belangrijkste argumenten (waarom?)
3. Werk elk argument uit met onderbouwing
4. Voeg ondersteunende details toe`,
                    why: 'Cliënten willen direct het antwoord weten, niet eerst de hele analyse lezen.'
                },
                dgr: {
                    title: 'DGR framework',
                    subtitle: 'Deugdelijk, Gemotiveerd, Rechtskundig',
                    example: `Geef advies volgens het DGR-framework:

1. Deugdelijk: Wat zijn alle relevante feiten en omstandigheden?
2. Gemotiveerd: Onderbouw je advies met wetsartikelen en jurisprudentie
3. Rechtskundig: Wat is de juridisch correcte conclusie en wat raad je aan?`
                }
            },
            strategy: {
                title: 'Strategie & brainstorming',
                desc: 'Technieken voor het verkennen van opties, het genereren van ideeën en het bepalen van de juiste koers.',
                brainstorm: {
                    title: 'Brainstorming',
                    subtitle: 'Creatieve ideegeneratie',
                    example: `Brainstorm juridische mogelijkheden voor dit geschil. Denk breed en creatief, haalbaarheid komt later.

Brainstorm verschillende manieren om het team mee te krijgen in de volgende verandering: [beschrijving].`,
                    tip: 'Vraag expliciet om oordelen uit te stellen ("deferred judgment").'
                },
                questions: {
                    title: 'Questions up front',
                    subtitle: 'Laat de AI jou helpen denken',
                    example: 'Help me deze bedrijfsovername goed doordenken door me vooraf de juiste vragen te stellen. Begin met wat jij denkt dat de kernvraag is in deze deal.'
                },
                perspective: {
                    title: 'Perspectiefwisseling',
                    subtitle: 'Bekijk het van alle kanten',
                    example: `Analyseer dit conflict afzonderlijk vanuit de grootaandeelhouders, de kleinere aandeelhouders en het bestuur.

Gaat het vooral om macht en invloed, of verschillen ze echt van mening over waar het bedrijf naartoe moet? (Alternatieve interpretatie)`
                },
                meta: {
                    title: 'Meta-prompting',
                    subtitle: 'Laat de AI de perfecte prompt schrijven',
                    example: `Ik wil een grondige analyse van dit arbeidsconflict.

Voordat je de analyse maakt: schrijf eerst een gedetailleerde, gestructureerde prompt die ik zou moeten gebruiken om de beste mogelijk analyse te krijgen. Leg uit waarom deze prompt effectiever is.`
                }
            }
        }
    },
    en: {
        common: {
            title: 'Prompting Guide',
            subtitle: 'For Legal Professionals',
            print: 'Print',
            footer: '© 2025',
            attachmentRequired: 'Attachment required',
            attachmentTip: 'Attach the document to your prompt.',
            dos: "Do's",
            donts: "Don'ts",
            when: 'When',
            why: 'Why',
            example: 'Example',
            tip: 'Tip',
            useCases: 'Legal Use Cases',
            fundamentals: 'The Fundamentals',
            suchAs: 'such as',
            or: 'or',
        },
        sidebar: {
            overview: 'Overview',
            techniques: 'Techniques',
            intro: 'Introduction',
            bestPractices: 'Best Practices',
            fundamentals: 'The Fundamentals',
            contractDrafting: 'Contracts & Documents',
            legalResearch: 'Legal Research',
            litigation: 'Litigation & Strategy',
            clientCommunication: 'Client Communication',
            strategy: 'Strategy',
        },
        intro: {
            title: 'Prompting Guide for Legal Professionals',
            p1: 'This prompting guide provides an overview of key prompting techniques specifically for legal work. Prompting is the art of formulating effective questions and instructions for AI tools. The better your prompt, the more relevant and useful the output.',
            p2: 'Effective prompting increases the quality of legal analyses, saves time in document processing, and helps structure complex legal questions. Techniques range from simple instructions to advanced (conversational) methods.',
            howTo: 'How to use this guide?',
            p3: 'Start with the fundamental techniques, experiment with different tactics, and gradually gain experience. The examples are directly applicable to your daily practice.',
        },
        warning: {
            title: 'Important Warning: Legal Research and Hallucinations',
            p1: 'AI tools like ChatGPT, Claude, and Gemini are not designed for legal research. They do not have access to legal sources (such as current laws, regulations, or case law). When asking about specific articles, rulings, or regulations, there is a high risk of hallucinations: the AI invents convincingly sounding but factually incorrect information.',
            optionsTitle: 'For reliable legal research, you have two options:',
            option1: 'Attach the relevant legal texts, case law, or other legal sources to your prompt yourself, so the AI can only draw from reliable material.',
            option2: 'Use a specialized legal AI tool that has access to current legal databases',
            conclusion: 'Never blindly trust AI output for legal questions without verifying it with reliable sources.',
        },
        bestPractices: {
            title: 'Best Practices & Practical Tips',
            generalTitle: 'General Principles for Effective Prompting',
            items: [
                { title: 'Be specific and clear', desc: 'Vague instructions yield vague results. State exactly what you expect.' },
                { title: 'Provide context', desc: 'Explain why you are asking something and who the output is for.' },
                { title: 'Start broad, then refine', desc: 'Start with a general question and zoom in based on the answer.' },
                { title: 'Test and iterate', desc: 'Try different phrasings and learn what works best.' },
                { title: 'Use examples', desc: 'Show how you want it instead of just telling.' },
                { title: 'Set boundaries', desc: 'Limit length, structure, or focus if that helps.' },
                { title: 'Validate the output', desc: 'Always verify legal analyses and sources.' },
            ],
            proTip: { title: 'Pro tip:', desc: 'Save successful prompts and build your own library. What works today can be reused and adapted tomorrow.' },
            legalContext: { title: 'Legal Context:', desc: 'AI tools are not a replacement for legal expertise. Use them as an assistant for research, structuring, and initial analyses, but do not blindly trust the output. Always verify sources and conclusions.' },
            iterativeWork: { title: 'Iterative Work:', desc: 'View prompting as a conversation, not a one-off task. Ask follow-up questions, request clarification, and refine step-by-step towards the desired result.' },
        },
        fundamentals: {
            title: 'The Fundamentals',
            desc: 'These five basic techniques form the building blocks for any good prompt. Master these before moving on to more complex use cases.',
            techniques: [
                {
                    title: 'Single shot prompting',
                    desc: 'When to use: for simple, direct questions without examples. Effective for tasks that are clear and require little context.',
                    example: 'Summarize this lease agreement in 3 main points.',
                    dos: ['Be specific about what you want', 'Give clear output expectations', 'Use for simple, clear tasks'],
                    donts: ['No vague or broad questions', 'Not for complex analyses', 'Do not expect inconsistent formats']
                },
                {
                    title: 'Few shot prompting',
                    desc: 'When to use: when you want to give specific examples of what the output should look like. Significantly increases consistency and quality.',
                    example: `Here is how I summarize provisions from an employment contract:

1. Probation period: maximum 1 month, pursuant to Art. 7:652(4) Dutch Civil Code
2. Non-compete clause: valid for 12 months after termination, geographically limited to the Netherlands

Now summarize the following provision in the same way: ....`,
                    dos: ['Provide 2-5 concrete examples', 'Ensure consistency in examples', 'Show the desired format'],
                    donts: ['No contradictory examples', 'Not too many examples (>5)', 'No low-quality examples']
                },
                {
                    title: 'Chained prompts / Multi-step',
                    desc: 'When to use: for complex tasks requiring multiple steps. Break the problem down into manageable parts.',
                    example: `Analyze this lease agreement.
Identify risks for the landlord.
Check for unusual clauses.
Provide concrete implementation recommendations.`,
                    dos: ['Break down complex tasks', 'Maintain logical order', 'Formulate each step clearly'],
                    donts: ['No illogical step order', 'Not too many steps (max 5-6)', 'Do not skip dependencies']
                },
                {
                    title: 'Chain of thought prompting',
                    desc: 'When to use: for complex legal analyses requiring step-by-step reasoning. Improves the quality of legal conclusions.',
                    example: `Analyze this dismissal file step by step:

1. First identify the legal question.
2. Determine which articles of the Civil Code apply.
3. Assess whether the procedure was followed correctly.
4. Apply the rules to the specific facts.
5. Evaluate the chances of both parties.
6. Draw a motivated conclusion.`,
                    dos: ['Explicitly ask for step-by-step reasoning', 'Show intermediate steps', 'Use for legal analyses'],
                    donts: ['Do not allow skipping steps', 'Not for simple questions', 'No unclear step definitions']
                },
                {
                    title: 'Persona prompting',
                    desc: 'When to use: to give the AI a specific role and expertise. Influences the tone and depth of the answer.',
                    example: 'Answer my questions as an experienced employment lawyer assessing this case. Which aspects do you find most relevant?',
                    dos: ['Choose relevant expertise', 'Be specific about the role', 'Give context to the persona'],
                    donts: ['No vague roles ("expert")', 'No multiple contradictory roles', 'No irrelevant expertise requests']
                }
            ]
        },
        useCases: {
            legalResearch: {
                title: 'Legal Research & Analysis',
                desc: 'Techniques for finding, analyzing, and structuring legal information. Focus on depth, completeness, and avoiding hallucinations.',
                irac: {
                    title: 'IRAC Framework',
                    subtitle: 'The standard for legal analysis',
                    example: `Analyze this case according to the IRAC framework:

1. Issue: What is the legal question?
2. Rule: Which legal rules apply?
3. Application: How do these rules apply to these specific facts?
4. Conclusion: What is the legal conclusion?`,
                    why: 'Forces the AI to structure and not jump straight to a conclusion.'
                },
                stepBack: {
                    title: 'Step Back Prompting',
                    subtitle: 'For better contextualization',
                    example: `Before answering this legal question, take a step back first.

Which broader (legal) principles are relevant here?
- What is the societal context of this issue?
- How does this fit into the development of case law?

Only then: give your specific legal analysis.`
                },
                fiveW: {
                    title: '5W1H - Factual Analysis',
                    subtitle: 'Ensure no fact is overlooked',
                    example: `Analyze this incident according to the 5W1H framework:

- Who: Who are the parties involved?
- What: What exactly happened?
- When: When did this take place?
- Where: Where did it happen?
- Why: Why is this relevant/did it happen?
- How: How did this unfold?`
                },
                bias: {
                    title: 'Bias Awareness & Reflection',
                    subtitle: 'Prevent tunnel vision in your research',
                    example: `- What assumptions are you making about the entrepreneur's behavior?
- Are those assumptions fair and legally well-founded?
- Is there room for another reading?
- What exactly do you base this advice on? (Rationale prompting)`
                }
            },
            contractDrafting: {
                title: 'Contracts & Documents',
                desc: 'Techniques for drafting, analyzing, and summarizing contracts and large documents. Focus on precision, consistency, and processing large amounts of text.',
                chunking: {
                    title: 'Document Chunking',
                    subtitle: 'For processing large documents',
                    example: `Split this document into sections of max 20 pages.
Analyze each section separately on [criterion].
Then provide an overall conclusion.`,
                    tags: ['Large files', 'Deep analysis']
                },
                confirm: {
                    title: 'Confirm-and-Continue',
                    subtitle: 'Keep control of the process',
                    example: `- Analyze <zoning_plan.pdf> for deviation possibilities.
- Stop after each relevant passage and wait for my approval on your analysis.
- When everything is analyzed, provide a clear summary.`
                },
                mece: {
                    title: 'MECE Structuring',
                    subtitle: 'Mutually Exclusive, Collectively Exhaustive',
                    example: `Analyze this contract according to the MECE principle:

Ensure your analysis is:
- Mutually Exclusive: each clause falls into one category (no overlap)
- Collectively Exhaustive: all clauses are covered (complete)

Categorize into: party obligations, financial, liability, termination.`
                },
                constraints: {
                    title: 'Output Constraints',
                    subtitle: 'Direct the form of the answer',
                    concise: { title: 'Concise', example: 'Summarize this analysis in at most three paragraphs.' },
                    direct: { title: 'Direct', example: 'List the main points in bullet points, without introduction.' }
                },
                footnotes: {
                    title: 'Footnotes Assistant',
                    subtitle: 'For correct citation',
                    example: `You are a legal assistant for creating footnotes. You use the knowledge in the attached 'Guide for Legal Authors' to create footnotes for me.

When a user asks you to create a footnote, first ask which source the user wants to cite from.`,
                    attachment: "Attach the 'Guide for Legal Authors'."
                }
            },
            litigation: {
                title: 'Litigation & Strategy',
                desc: 'Techniques for building persuasive argumentation, anticipating defenses, and determining litigation strategy.',
                sato: {
                    title: 'SATO Framework',
                    subtitle: 'For legal positioning',
                    example: `Assess this case according to the SATO framework:

1. Standpoint: What is our legal standpoint?
2. Argument: Which arguments support this standpoint?
3. Counterargument: Which counterarguments can be expected?
4. Opinion: How do we refute the counterarguments and what is the conclusion?`
                },
                devil: {
                    title: "Devil's Advocate",
                    subtitle: 'Identify weak spots',
                    example: `Review this restructuring advice:

- Which risks are underestimated or too optimistic?
- Who might object, and on what grounds?
- Which relevant scenario has not yet been included?`
                },
                persona: {
                    title: 'Persona Prompting',
                    subtitle: 'Simulate the opposing party or judge',
                    judge: { title: 'The Judge', example: 'Read this draft petition as a critical subdistrict court judge. Which parts are not convincing or lack substantiation?' },
                    opponent: { title: 'The Opposing Party', example: 'React as an angry and nervous client who realized the litigation risks too late.' }
                },
                stepByStep: {
                    title: 'Step-by-Step Analysis',
                    subtitle: 'For complex files',
                    example: `Prompt 1: Identify the core questions in this lease dispute.

Prompt 2: Which articles from Books 6 & 7 of the Civil Code apply to this?

Prompt 3: Apply these articles to the facts and provide a preliminary conclusion.`
                }
            },
            clientCommunication: {
                title: 'Client Communication & Advice',
                desc: 'Techniques for translating complex legal analyses into clear, understandable advice for clients.',
                audience: {
                    title: 'Audience & Tone',
                    subtitle: 'Tailor your message to the recipient',
                    example: `Audience: Entrepreneur without a legal background, but commercially experienced.
Tone: Professional but accessible, without legal jargon.

Write an email informing the client about the risks without making them unnecessarily anxious.`
                },
                eli5: {
                    title: 'ELI5 Framework',
                    subtitle: "Explain Like I'm 5 (but professional)",
                    example: 'Explain the concept of liability for product defects as if you are explaining it to someone without a legal background. Use clear language and concrete examples.'
                },
                pyramid: {
                    title: 'Pyramid Principle',
                    subtitle: 'Start with the conclusion',
                    example: `Write advice according to the Pyramid Principle:

1. Start with the conclusion/advice (what should the client do?)
2. Give the main arguments (why?)
3. Elaborate on each argument with substantiation
4. Add supporting details`,
                    why: 'Clients want to know the answer immediately, not read the entire analysis first.'
                },
                dgr: {
                    title: 'DGR Framework',
                    subtitle: 'Sound, Motivated, Legally Correct (Deugdelijk, Gemotiveerd, Rechtskundig)',
                    example: `Give advice according to the DGR framework:

1. Sound: What are all relevant facts and circumstances?
2. Motivated: Substantiate your advice with legal articles and case law
3. Legally Correct: What is the legally correct conclusion and what do you recommend?`
                }
            },
            strategy: {
                title: 'Strategy & Brainstorming',
                desc: 'Techniques for exploring options, generating ideas, and determining the right course.',
                brainstorm: {
                    title: 'Brainstorming',
                    subtitle: 'Creative idea generation',
                    example: `Brainstorm legal possibilities for this dispute. Think broadly and creatively, feasibility comes later.

Brainstorm different ways to get the team on board with the following change: [description].`,
                    tip: 'Explicitly ask to defer judgment.'
                },
                questions: {
                    title: 'Questions Up Front',
                    subtitle: 'Let the AI help you think',
                    example: 'Help me think through this company acquisition properly by asking me the right questions beforehand. Start with what you think is the core question in this deal.'
                },
                perspective: {
                    title: 'Perspective Switching',
                    subtitle: 'View it from all sides',
                    example: `Analyze this conflict separately from the perspective of the major shareholders, the minor shareholders, and the board.

Is it mainly about power and influence, or do they really differ in opinion about where the company should go? (Alternative interpretation)`
                },
                meta: {
                    title: 'Meta-prompting',
                    subtitle: 'Let the AI write the perfect prompt',
                    example: `I want a thorough analysis of this labor dispute.

Before you make the analysis: first write a detailed, structured prompt that I should use to get the best possible analysis. Explain why this prompt is more effective.`
                }
            }
        }
    }
}
