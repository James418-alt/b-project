import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          name: "email",
          type: "text",
        },
        password: { name: "password", type: "password" },
      },
      async authorize(credentials) {
        const url = "https://vaultdesk.vercel.app/api/signin";
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        const user = await res.json();

        if (user) {
          return {
            ...user,
            email: user.data.email,
            name: user.data.name,
            id: user.data._id,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async redirect() {
      return "/";
    },

    async jwt({ user, token }: any) {
      if (user) token.id = user.id;

      return token;
    },

    async session({ session, token }: any) {
      if (session) session.user.id = token.id;

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
