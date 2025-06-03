# Next.js Internationalization Demo

A modern showcase of next-intl translation capabilities in a Next.js application, developed by Afghan Geeks. This project demonstrates how to implement internationalization (i18n) in a Next.js application using the next-intl library, including RTL (Right-to-Left) language support.

# Demo:

[Demo](https://next-intl-demo-afghangeeks.vercel.app/en)

## Features

- 🌐 Dynamic language switching
- 🎨 Modern, responsive UI
- 🔒 Type-safe translations
- 📱 Mobile-friendly design
- 🚀 Built with Next.js 14
- 💅 Styled with Tailwind CSS
- 📖 RTL language support (Farsi/Persian)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jafarimurtaza/next-intl-demo-afghangeeks.git
cd next-intl-demo-afghangeeks
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── messages/           # Translation files
│   ├── en.json        # English translations
│   ├── fa.json        # Farsi translations
│   └── ...
├── src/
│   ├── app/           # Next.js app directory
│   │   └── [locale]/  # Dynamic locale routing
│   ├── components/    # React components
│   └── i18n/         # i18n configuration
└── ...
```

## Adding New Languages

1. Create a new translation file in the `messages` directory (e.g., `fr.json`)
2. Copy the structure from `en.json` and translate the content
3. Add the new locale to the supported locales in `i18n.ts`
4. For RTL languages (like Farsi), the layout will automatically adjust

## Key Features Demonstrated

- Dynamic route-based language switching
- Type-safe translation keys
- Nested translation objects
- Language-specific formatting
- RTL language support
- Responsive design with Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## About Afghan Geeks

Afghan Geeks is a remote-first software company empowering Afghan youth through technology since 2023. We combine client projects with tech education to create real opportunities.

Visit us at [afghangeeks.com](https://afghangeeks.com)

## Acknowledgments

- [next-intl](https://next-intl-docs.vercel.app/) for the internationalization library
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling
