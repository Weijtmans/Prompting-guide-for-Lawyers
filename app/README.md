# Prompting Gids voor Juridische Professionals

Een interactieve gids voor effectief AI-prompting specifiek voor juridisch werk. Deze gids biedt praktische technieken voor het werken met AI-tools zoals ChatGPT, Claude en Gemini in de juridische praktijk.

## 🎯 Over dit project

Deze gids helpt juridische professionals om effectiever te werken met AI door:
- Bewezen promptingtechnieken te demonstreren
- Praktische voorbeelden voor juridisch werk te bieden
- Best practices en waarschuwingen te delen
- Directe copy-paste prompts aan te bieden

## 🚀 Features

- **Tweetalig**: Automatische taaldetectie (Nederlands/Engels)
- **Interactief**: Direct kopieerbare prompts
- **Print-geoptimaliseerd**: Professionele print-weergave
- **Categorisering**: Georganiseerd per rechtsgebied
- **SEO-geoptimaliseerd**: Met structured data en Open Graph tags

## 📋 Technische Stack

- **Framework**: Next.js 15.2.4 (React 19)
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **3D Graphics**: Three.js met React Three Fiber
- **Icons**: Lucide React
- **Type Safety**: TypeScript 5.7.2

## 🛠️ Development

### Prerequisites

- Node.js 18.x of hoger
- Yarn package manager

### Installatie

```bash
# Installeer dependencies
yarn install

# Start development server
yarn dev

# Open http://localhost:3000
```

### Build voor productie

```bash
# Build de applicatie
yarn build

# Start productie server
yarn start
```

### Linting

```bash
yarn lint
```

## 📁 Project Structuur

```
app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout met metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── guide/             # Guide-specifieke components
│   │   ├── sections/      # Content secties
│   │   ├── translations.ts # Content in NL/EN
│   │   └── ...
│   ├── gl/                # Three.js/WebGL components
│   └── ui/                # Herbruikbare UI components
├── public/
│   ├── favicon/           # Favicon variants
│   ├── OG.png            # Open Graph image
│   └── robots.txt        # SEO robots file
└── ...
```

## 🔒 Security

Dit project implementeert verschillende security headers:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy voor camera/microphone/geolocation

## 📦 Deployment

Deze applicatie is geoptimaliseerd voor deployment op Vercel:

```bash
# Deploy naar productie
vercel --prod
```

## 🎨 Customization

### Content aanpassen

Alle content staat in `components/guide/translations.ts`. Wijzig hier de Nederlandse en Engelse teksten.

### Styling aanpassen

- Kleuren: Zie CSS variabelen in `app/globals.css`
- Components: Gebruik Tailwind classes
- Fonts: Custom font "Sentient" in `/public`

## 📊 SEO & Analytics

- Open Graph metadata voor social sharing
- Structured data (JSON-LD) voor Google
- Sitemap.xml voor search engines
- robots.txt voor crawler control

## 🤝 Contributing

1. Maak een feature branch
2. Commit je changes
3. Push naar de branch
4. Open een Pull Request

## 📄 License

© 2025 HVG. Alle rechten voorbehouden.

## 🔗 Links

- Website: [https://prompting.hvglaw.nl](https://prompting.hvglaw.nl)
- HVG: [https://hvglaw.nl](https://hvglaw.nl)

## 📞 Support

Voor vragen of problemen, neem contact op via [support@hvglaw.nl](mailto:support@hvglaw.nl)
