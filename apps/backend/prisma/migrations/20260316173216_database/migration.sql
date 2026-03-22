-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allocation" (
    "userID" TEXT NOT NULL,
    "allocation_id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "amount" FLOAT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Allocation_pkey" PRIMARY KEY ("allocation_id")
);
