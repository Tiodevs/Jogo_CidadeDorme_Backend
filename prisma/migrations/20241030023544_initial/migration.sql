/*
  Warnings:

  - You are about to drop the `Attendance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PresenceDay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_userId_fkey";

-- DropForeignKey
ALTER TABLE "PresenceDay" DROP CONSTRAINT "PresenceDay_userId_fkey";

-- DropTable
DROP TABLE "Attendance";

-- DropTable
DROP TABLE "PresenceDay";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "CountPerson" INTEGER NOT NULL,
    "CountPolice" INTEGER NOT NULL,
    "CountKiller" INTEGER NOT NULL,
    "CountHealer" INTEGER NOT NULL,
    "Day" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Sem classe',
    "life" INTEGER NOT NULL DEFAULT 1,
    "Active" BOOLEAN NOT NULL DEFAULT true,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Votes" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "roomId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "history" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
