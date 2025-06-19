# AI Interview Practice App

An AI-powered interview practice application built with Next.js, featuring interactive interviews with Tavus AI video generation.

## Features

- 🎯 **Targeted Practice** - Practice for specific job positions with tailored questions
- ⏱️ **Flexible Duration** - Choose from 1, 3, or 5-minute practice sessions
- 🤖 **AI-Powered Interviews** - Realistic interview experience with Tavus AI
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful interface with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Tavus API key (get one at [tavus.io](https://tavus.io))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tavus-interview-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Tavus API key to `.env.local`:
```
NEXT_PUBLIC_TAVUS_API_KEY=your_actual_tavus_api_key
TAVUS_API_KEY=your_actual_tavus_api_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_TAVUS_API_KEY` - Your Tavus API key for client-side usage
- `TAVUS_API_KEY` - Your Tavus API key for server-side usage

See `.env.example` for the complete list of required environment variables.

## Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── form/              # Interview setup form
│   ├── interview/         # Interview practice page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── public/                # Static assets
└── ...config files
```

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI Video**: Tavus API
- **TypeScript**: Full type safety

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.