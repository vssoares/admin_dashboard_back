-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Investiment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "description" TEXT,
    "amount" REAL,
    "date" DATETIME NOT NULL,
    "accountId" INTEGER NOT NULL,
    CONSTRAINT "Investiment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Investiment" ("accountId", "amount", "date", "description", "id", "name") SELECT "accountId", "amount", "date", "description", "id", "name" FROM "Investiment";
DROP TABLE "Investiment";
ALTER TABLE "new_Investiment" RENAME TO "Investiment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
