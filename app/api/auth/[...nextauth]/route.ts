import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptionst: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
