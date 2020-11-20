# Migration `20201120091348-initialization`

This migration has been generated by Stevemmmmmm at 11/20/2020, 1:13:49 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
"id" SERIAL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.username_unique" ON "User"("username")

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201120091348-initialization
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+generator typegraphql {
+  provider = "typegraphql-prisma"
+  output   = "../src/generated/typegraphql-prisma"
+}
+
+model User {
+  id       Int    @id @default(autoincrement())
+  username String @unique
+  email    String @unique
+  password String
+}
```

