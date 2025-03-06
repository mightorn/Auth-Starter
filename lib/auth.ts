import { betterAuth, BetterAuthOptions } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/server'; // your drizzle instance
import { sendEmail } from '@/server/actions/email';
import { openAPI } from "better-auth/plugins"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg', // or "mysql", "sqlite"
  }),
  plugins: [openAPI()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({user, url, token}, request) => {
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ( { user, url, token }, request) => {
        await sendEmail({
          to: user.email,
          subject: "Verify your email address",
          text: `Click the link to verify your email: ${url}`,
        });
      },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // redirectURI: process.env.BASE_URL + '/api/auth/callback/google',
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 * 7, // 7 days (every 7 days the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // Cache duration in seconds
    }
  },
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;