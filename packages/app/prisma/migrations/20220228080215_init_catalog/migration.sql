-- CreateTable
CREATE TABLE "Photos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "filetype" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME,
    "imported_at" DATETIME NOT NULL,
    "flag" TEXT NOT NULL,
    "trashed" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Photos_id_key" ON "Photos"("id");
