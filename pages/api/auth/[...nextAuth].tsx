import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
