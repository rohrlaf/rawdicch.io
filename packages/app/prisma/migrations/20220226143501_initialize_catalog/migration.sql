-- CreateTable
CREATE TABLE "Catalog" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "dateCreated" DATETIME,
    "dateModified" DATETIME
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "thumbnailOriginal" TEXT,
    "thumbnailCurrent" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Photo_id_key" ON "Photo"("id");
