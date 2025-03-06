# Next.js Authentication Starter

A modern, full-featured authentication starter kit built with Next.js 15, TypeScript, Tailwind CSS, and Better Auth.

## Features

- 🔐 Complete authentication system
  - Email/Password authentication
  - Social login (Google)
  - Email verification
  - Password reset functionality
- 🚀 Next.js App Router
- 🔄 Middleware for protected routes
- 💾 PostgreSQL database with Drizzle ORM
- 🎨 Styled with Tailwind CSS and Radix UI components
- 📧 Email sending with Resend
- ✅ Form validation with Zod and React Hook Form
- 🌓 Dark mode support with next-themes

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (or Neon Serverless Postgres)

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
# Database
DATABASE_URL=your_postgres_connection_string

# Auth
BASE_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
```

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Generate database schema
npm run db:generate

# Push schema to database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Authentication routes
│   │   ├── sign-in/        # Sign in page
│   │   ├── sign-up/        # Sign up page
│   │   ├── reset-password/ # Password reset page
│   │   └── forget-password/# Forgot password page
│   ├── api/                # API routes
│   └── page.tsx            # Home page
├── components/             # UI components
├── lib/                    # Utility functions
│   ├── auth.ts             # Authentication configuration
│   └── zod.ts              # Zod validation schemas
├── server/                 # Server-side code
│   ├── actions/            # Server actions
│   ├── migrations/         # Drizzle migrations
│   └── schema.ts           # Database schema
└── middleware.ts           # Authentication middleware
```

## Authentication Flow

This starter uses [Better Auth](https://github.com/better-auth/better-auth) for authentication, which provides:

- Secure session management with HTTP-only cookies
- Email verification
- Password reset functionality
- Social login integration
- Protection against common security vulnerabilities

## Customization

You can customize the authentication behavior by modifying `lib/auth.ts`. The UI components can be styled by editing the components in the `components/` directory.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.dev)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
