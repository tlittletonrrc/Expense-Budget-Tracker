# Group Members - B Team
- Tarryn Bereznycky
- Thomas Littleton
- Jashandeep Kaur


# Project Overview
A website that allows you to budget and keep track of all your finances so you can save money easier.


# User Stories
- As a user I want to track my expenses so I can easily keep track of my money.
- as a user i want to set aside money for vacations and retirement
- as a user i want to see a summary of my total balance on a single dashboard so i can understand my current financial snapshot


## Sprint 2 Tasks
### Tarryn
- T.3 shared state across pages
- I.1 Allocation Page
- I.2 Allocation form
- I.3 Allocation List Item Removal/Edit

### Thomas
- T.1 Multi-Page Navigation
- T.2 Navigation Interface
- I.1 Account Overview Page
- I.2 Account Overview Form
- I.3 Account Overview Deletion

### Jashandeep 
- I.1 Piggy Bank
- I.2 Piggy Bank Form
- I.3 Piggy Bank Item Removal


## Sprint 3 Tasks
### Tarryn
- I.1 Allocation Repository Definition
- I.2 Test User Data
- I.3 Refactored Allocation Components
- I.4 Architectural Layout Doc

### Thomas
- T.1 Hook Definition
- T.4 Shared State Refactor
- I.1 Accounts Repository Definition
- I.2 Test Accounts Data
- I.3 Refactored Accounts Overview Component
- I.4 Architecture Document

### Jashandeep 
- T.2 Service Definition


## Sprint 4 Tasks
### Tarryn
- T.1: Back-End App Initialization
- T.4: Back-end CORS Configuration
- I.1: Back-end Resource Endpoint (allocation, user)
- I.2: Resource Database Schema (allocation, user)
- I.3: Front-end Repository sends requests to back-end (allocation, user)
- I.4: Application State Persistence (allocation, user)

### Thomas
- T.2: Development SQL Database
- T.3: Prisma Installation and Client Initialization
- 

### Jashandeep 



# Local Setup

## Install
1. run `npm install`

## Set up the Database
1. Create an empty PostgreSQL database and note its url. Note you can use any SQL databases but change `apps/backend/prisma/schema.prisma` provider accordingly. there is also a docker compose file in `apps/backend` that you can use for the database
   1. if you are going to use the docker compose file you first get wsl running and then open docker desktop. Once docker desktop is running you then cd into `apps/backend` and run the command docker compose up -d.

## Create Clerk account and project
1. [Create an account with Clerk](clerk.com) and a Free Project
2. In the *Dashboard* navigate to *Developers/API Keys*
3. Copy the `PUBLIC` and `SECRET_KEY` values

## Add .envs
1. Create `apps/frontend/.env` and add:
```
VITE_API_BASE_URL=http://localhost:3000

CLERK_SECRET_KEY=<clerk-secret-key>
VITE_CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>
```

ex
```
VITE_API_BASE_URL=http://localhost:3000

CLERK_SECRET_KEY=sk_test_9Hvn4s56SWEzG7Wb48HNGf3Bfn4g6sRiHRtSFRn0dr
VITE_CLERK_PUBLISHABLE_KEY=pk_test_YWR2YW5jZWQtd29sZi00My5jbGVyay5hY2NvdW50cy5kZXYk
```

2. Create `apps/backend/.env` and add:
```
FRONTEND_URL=http://localhost:<your-localhost-port>
PORT=3000
DATABASE_URL=<local-postgres-db-url>

CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>
CLERK_SECRET_KEY=<clerk-secret-key>
```

ex
```
FRONTEND_URL=http://localhost:5173
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/expense_budget_tracker

CLERK_PUBLISHABLE_KEY=pk_test_YWR2YW5jZWQtd29sZi00My5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_9Hvn4s56SWEzG7Wb48HNGf3Bfn4g6sRiHRtSFRn0dr
```

## Migrate and seed database
1. `cd apps/backend/`
2. `npx prisma migrate dev --name <Name of migration>` ex `npx prisma migrate dev --name first`
3. `npx prisma migrate dev`
3. `npx prisma generate`
5. `npx prisma db seed`

## Run the app
1. go back to the root folder. if you are still in `apps/backend` follow the next 2 steps if not go to the last step.
2. `cd ..`
3. `cd ..`
4. `npm run dev`