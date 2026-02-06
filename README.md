# Prompting Hand-out for Lawyers - React App

A modern, user-friendly React application for the prompting guide for lawyers. Built with React, TypeScript, Vite, and Tailwind CSS (with shadcn/ui design system).

## 🚀 Quick Start

### Option 1: Direct Use (Recommended)

Open the standalone file directly in your browser:

```bash
open prompting-app-standalone.html
```

This file works without installation or build process and contains all functionality.

### Option 2: Development Mode (Requires Node.js 20.19+ or 22.12+)

If you want to run the React development version:

```bash
cd prompting-app
npm install
npm run dev
```

**Note:** The current Node.js version (20.5.1) is too old for the latest Vite. Update Node.js or use the standalone version.

## ✨ Features

- **Elegant UI**: Modern interface with shadcn/ui design patterns
- **Search Functionality**: Quickly search through all techniques and frameworks
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Print-Friendly**: Optimized for printing or saving as PDF
- **Use Case Index**: Quickly find the right technique for your situation
- **Interactive Navigation**: Smooth scrolling and clear structure

## 📁 Project Structure

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

The project uses:

- **Tailwind CSS**: For utility-first styling
- **shadcn/ui**: For consistent and beautiful UI components
- **Lucide Icons**: For modern iconography
- **Responsive Grid Layouts**: For optimal display on all screen sizes

## 🛠️ Technical Details

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3 with @tailwindcss/postcss
- **Component Library**: shadcn/ui (headless components)
- **Icons**: Lucide React

## 📝 Usage

1. **Search**: Use the search bar at the top to quickly find techniques
2. **Navigation**: Click on items in the table of contents for direct navigation
3. **Use Cases**: Browse the use case index to see which techniques fit your situation
4. **Print**: Click "Print / Save as PDF" to create a printable version
5. **Download**: Click "Download HTML" to save the file locally

## 🎯 Use Cases

The application contains detailed information for:

- 📄 Contract Analysis
- ⚖️ Litigation Documents
- 💼 Client Communication
- 🔍 Legal Analysis
- 🎯 Risk Analysis
- 💡 Strategic Exploration
- 📋 Document Processing
- ✍️ Writing Assignments

## 🚧 Troubleshooting

### Node.js Version Too Old

If you get an error about the Node.js version:

- **Solution 1**: Use the `prompting-app-standalone.html` file
- **Solution 2**: Update Node.js to version 20.19+ or 22.12+

### Build Errors

If npm build fails:

```bash
npm clean-install
npm run build
```
