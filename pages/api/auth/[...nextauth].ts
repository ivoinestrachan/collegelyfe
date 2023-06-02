import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || "",
        auth: {
          user: process.env.EMAIL_SERVER_USER || "", 
          pass: process.env.EMAIL_SERVER_PASSWORD || "",
        },
      },
      from: process.env.EMAIL_FROM || "", 
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET || "", 
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
