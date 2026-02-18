# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, designed for software engineer students seeking opportunities.

## Features

- **Modern Design**: Clean and professional UI with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Sections**:
  - Hero section with introduction
  - About section with personal background
  - Projects showcase with links
  - Skills organized by category
  - Experience timeline
  - Contact form with social links
- **Smooth Navigation**: Interactive navbar with smooth scrolling
- **Built with**:
  - Next.js 16 (App Router)
  - TypeScript
  - Tailwind CSS
  - React 19

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## Customization

### Personalize Your Portfolio

Update the following files with your information:

1. **Hero Section** ([src/components/Hero.tsx](src/components/Hero.tsx)):
   - Replace `[Your Name]` with your actual name
   - Update the description

2. **About Section** ([src/components/About.tsx](src/components/About.tsx)):
   - Write your personal story and background

3. **Projects** ([src/components/Projects.tsx](src/components/Projects.tsx)):
   - Add your actual projects
   - Update titles, descriptions, technologies, and links

4. **Skills** ([src/components/Skills.tsx](src/components/Skills.tsx)):
   - Add or modify skill categories
   - Update technologies you know

5. **Experience** ([src/components/Experience.tsx](src/components/Experience.tsx)):
   - Add your work experience, internships, or research
   - Update company names, roles, and descriptions

6. **Contact** ([src/components/Contact.tsx](src/components/Contact.tsx)):
   - Update social media links
   - Add your email address
   - Configure form submission (currently logs to console)

7. **Footer** ([src/components/Footer.tsx](src/components/Footer.tsx)):
   - Update copyright name

8. **Metadata** ([src/app/layout.tsx](src/app/layout.tsx)):
   - Update page title and description

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/
│       ├── Navbar.tsx       # Navigation bar
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx       # Skills display
│       ├── Experience.tsx   # Experience timeline
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer
├── public/                  # Static files
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## License

This project is open source and available for personal use.

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to other platforms that support Next.js applications.
