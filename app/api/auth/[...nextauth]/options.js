// import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const options = {
  Providers: [
    // GitHubProvider({
    //   profile(profile) {
    //     console.log("Profile Github: ", profile);

    //     let userRole = "Github User"
    //     if (profile?.email === "unimat@unimat.hu"){
    //       userRole = "admin"
    //     }

    //     return {
    //       ...profile,
    //       role: userRole
    //     }
    //   },
    //   clientId: ProcessingInstruction.env.GITHUB_ID,
    //   clientSecret: ProcessingInstruction.env.GITHUB_SECRET
    // }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        return {
          ...profile,
          id: profile.sub,
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
        return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
        return session
    }
  }
}