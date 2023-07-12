-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT,
    "amount" REAL,
    "type" TEXT,
    "date" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "accountId" INTEGER,
    "investimentId" INTEGER,
    CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Transaction_investimentId_fkey" FOREIGN KEY ("investimentId") REFERENCES "Investiment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("accountId", "amount", "date", "description", "id", "investimentId", "type") SELECT "accountId", "amount", "date", "description", "id", "investimentId", "type" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
