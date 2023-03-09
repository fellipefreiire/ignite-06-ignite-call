import { Adapter } from 'next-auth/adapters'
import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {},
    async getUser(id) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByEmail(email) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByAccount(providerAccountId) {},
    async updateUser() {},
    async deleteUser(userId) {},
    async linkAccount(account) {},
    async unlinkAccount(providerAccountId) {},
    async createSession(session) {},
    async getSessionAndUser(sessionToken) {},
    async updateSession(session) {},
    async deleteSession(sessionToken) {},
    async createVerificationToken(verificationToken) {},
    async useVerificationToken(params) {},
  }
}
