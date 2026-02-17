# GMG Technology Website

Official website for GMG Technology - Parent Company.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Deployment

This project is configured for deployment on Vercel.

### Setting up Vercel

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Domain Configuration

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update your DNS records:
   - Add an A record pointing to Vercel's IP addresses, OR
   - Add a CNAME record pointing to your Vercel deployment URL
4. Vercel will automatically provision SSL certificates

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
├── public/          # Static assets
└── lib/             # Utility functions
```

