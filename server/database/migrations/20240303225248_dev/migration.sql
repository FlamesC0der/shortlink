/*
  Warnings:

  - The primary key for the `Link` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `url` on the `Link` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Link` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `fullurl` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shorturl` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullurl" TEXT NOT NULL,
    "shorturl" TEXT NOT NULL
);
INSERT INTO "new_Link" ("id") SELECT "id" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
