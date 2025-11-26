# Prompting Hand-out voor Advocaten - React App

Een moderne, gebruiksvriendelijke React-applicatie voor de prompting handleiding voor advocaten. Gebouwd met React, TypeScript, Vite en Tailwind CSS (met shadcn/ui design system).

## 🚀 Snelle Start

### Optie 1: Direct Gebruik (Aanbevolen)

Open het standalone bestand direct in je browser:

```bash
open prompting-app-standalone.html
```

Dit bestand werkt zonder installatie of build process en bevat alle functionaliteit.

### Optie 2: Development Mode (Vereist Node.js 20.19+ of 22.12+)

Als je de React-ontwikkelversie wilt draaien:

```bash
cd prompting-app
npm install
npm run dev
```

**Let op:** De huidige Node.js versie (20.5.1) is te oud voor de nieuwste Vite. Update Node.js of gebruik de standalone versie.

## ✨ Functies

- **Elegante UI**: Moderne interface met shadcn/ui design patterns
- **Zoekfunctionaliteit**: Snel zoeken door alle technieken en frameworks
- **Responsief Design**: Werkt perfect op desktop, tablet en mobiel
- **Print-vriendelijk**: Optimaal voor het printen of opslaan als PDF
- **Use Case Index**: Vind snel de juiste techniek voor jouw situatie
- **Interactieve Navigatie**: Smooth scrolling en duidelijke structuur

## 📁 Project Structuur

```
prompting-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Introduction.tsx
│   │   ├── WarningBox.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── UseCaseIndex.tsx
│   │   └── BestPractices.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.ts
```

## 🎨 Design System

Het project gebruikt:
- **Tailwind CSS**: Voor utility-first styling
- **shadcn/ui**: Voor consistente en mooie UI componenten
- **Lucide Icons**: Voor moderne iconografie
- **Responsive Grid Layouts**: Voor optimale weergave op alle schermformaten

## 🛠️ Technische Details

- **Framework**: React 18 met TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3 met @tailwindcss/postcss
- **Component Library**: shadcn/ui (headless components)
- **Icons**: Lucide React

## 📝 Gebruik

1. **Zoeken**: Gebruik de zoekbalk bovenaan om snel technieken te vinden
2. **Navigatie**: Klik op items in de inhoudsopgave voor directe navigatie
3. **Use Cases**: Bekijk de use case index om te zien welke technieken bij jouw situatie passen
4. **Printen**: Klik op "Print / Opslaan als PDF" om een printbare versie te maken
5. **Downloaden**: Klik op "Download HTML" om het bestand lokaal op te slaan

## 🎯 Use Cases

De applicatie bevat gedetailleerde informatie voor:
- 📄 Contractanalyse
- ⚖️ Processtukken
- 💼 Cliëntcommunicatie
- 🔍 Juridische analyse
- 🎯 Risicoanalyse
- 💡 Strategische verkenning
- 📋 Documentverwerking
- ✍️ Schrijfopdrachten

## 🚧 Troubleshooting

### Node.js Versie Te Oud

Als je een error krijgt over Node.js versie:
- **Oplossing 1**: Gebruik de `prompting-app-standalone.html` file
- **Oplossing 2**: Update Node.js naar versie 20.19+ of 22.12+

### Build Errors

Als npm build faalt:
```bash
npm clean-install
npm run build
```

## 📄 Licentie

© 2025 - Prompting hand-out voor advocaten
