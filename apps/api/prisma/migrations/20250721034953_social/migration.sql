/*
  Warnings:

  - You are about to alter the column `content` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - Made the column `content` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ProviderType" AS ENUM ('CREDENTIALS', 'GOOGLE', 'GITHUB');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refreshToken" VARCHAR(1000),
ALTER COLUMN "password" DROP NOT NULL;

-- CreateTable
CREATE TABLE "SocialTokens" (
    "providerUserId" TEXT NOT NULL,
    "providerType" "ProviderType" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SocialTokens_pkey" PRIMARY KEY ("providerUserId","providerType")
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialTokens_providerUserId_key" ON "SocialTokens"("providerUserId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialTokens_userId_key" ON "SocialTokens"("userId");

-- CreateIndex
CREATE INDEX "SocialTokens_userId_idx" ON "SocialTokens"("userId");

-- AddForeignKey
ALTER TABLE "SocialTokens" ADD CONSTRAINT "SocialTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
