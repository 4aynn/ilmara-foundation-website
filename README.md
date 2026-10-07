# Ilmara Foundation — Official Website

**Empowering futures through education.**

[Website](https://ilmara.org) · [GitHub Repository](https://github.com/4aynn/ilmara-foundation-website)

## Overview

Ilmara Foundation is an education-focused initiative dedicated to expanding access to educational opportunities for underserved children in Pakistan.

This repository contains the source code for the foundation's official website, designed to communicate our mission, introduce our team, showcase our initiatives, and connect supporters with opportunities to contribute.

The project combines modern web technologies with a clean, responsive interface to create an accessible and engaging digital presence for the organization.

## Features

- **Responsive Design:** A modern interface designed for desktop and mobile devices.
- **Foundation Information:** Dedicated content introducing Ilmara's mission, vision, and objectives.
- **Team Profiles:** Information about the individuals behind the initiative.
- **Donation Experience:** Donation campaign integration designed to direct supporters to an external fundraising platform.
- **Supporter Engagement:** Email collection functionality designed to help keep interested supporters informed.
- **Reusable Components:** Modular UI architecture supporting consistent styling and future development.

*Some integrations require external services and configuration before they can be used in production.*

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, TypeScript |
| Framework | Next.js-compatible Vinext |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui, Radix UI |
| Backend | Server-side TypeScript, API routes |
| Tooling | Vite, pnpm |
| Deployment Tooling | Cloudflare Workers, Wrangler |
| Version Control | Git, GitHub |

## Project Structure

```text
ilmara-foundation-website/
├── project/
│   ├── app/              # Application routes and styles
│   ├── components/       # Reusable UI components
│   ├── lib/              # Shared utilities
│   ├── public/           # Static assets
│   ├── scripts/          # Development scripts
│   └── package.json      # Dependencies and scripts
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 22.13 or newer
- pnpm 11.25.0

### Installation

Clone the repository:

```bash
git clone https://github.com/4aynn/ilmara-foundation-website.git
```

Navigate to the application directory:

```bash
cd ilmara-foundation-website/project
```

Install dependencies:

```bash
corepack enable
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Follow the terminal output to open the local development URL.

**Note:** Some application functionality may require environment variables, database configuration, or external service credentials.

## Security

Sensitive environment variables, API credentials, and generated build artifacts should not be committed to this repository.

The project uses `.gitignore` rules to exclude local environment files and unnecessary generated assets. Secrets should be configured securely through the appropriate deployment environment.

## Future Improvements

- [ ] Complete and validate external fundraising integration
- [ ] Improve donor engagement and update workflows
- [ ] Expand accessibility and performance testing
- [ ] Add automated tests and continuous integration
- [ ] Improve project documentation and deployment instructions

## About Ilmara Foundation

Ilmara Foundation aims to help children access educational opportunities regardless of their financial circumstances.

Our mission is to create meaningful, sustainable educational impact by connecting supporters with children and communities in need.

Learn more at [ilmara.org](https://ilmara.org).

## Project Maintainer

**Aayan Moazzam**  
Founder & President, Ilmara Foundation

[GitHub](https://github.com/4aynn)

---

*Built with purpose. Driven by education.*
