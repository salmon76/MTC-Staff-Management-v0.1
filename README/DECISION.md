# Technical Decision Record (DECISION.md)

This document records key technical decisions for the MTC Staff Management project.  
The purpose is to provide context and rationale for the chosen architecture, data models, and technology stack for onboarding developers and future maintainers.

---

## 1. Objective

The objective of this project is to develop a fullstack web application integrated with the LINE platform for Maitrichit Church (MTC), focusing on:

- Providing an accessible web interface via LINE LIFF for all church staff, deacons (มัคนายก), and pastors (ศิษยาภิบาล).
- Supporting LINE Messaging API for automated notifications, roster reminders, and equipment ticket updates.
- Automated serving roster arrangement (Mor.Nor. x Pastoral Team Scheduler) matching church business rules.
- Equipment borrow/return digital handover with Base64 signature verification.
- SLA-based repair ticket management for church facilities and equipment.
- Supporting scalable production deployment on Vercel Cloud and Supabase PostgreSQL.

---

## 2. Architecture & Tech Stack Summary

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS, Canvas Signature Pad, HTML5 QR Scanner
- **Backend:** Next.js API Routes (Node.js runtime), Prisma ORM
- **Database:** Supabase PostgreSQL Database
- **Messaging Integration:** `@line/bot-sdk` for Webhooks & Push Notifications, `@line/liff` for LINE Web App Gateway
- **Deployment & CI/CD:** Vercel Cloud Platform with GitHub Auto-Deployment (`salmon76/MTC-Staff-Management-v1`)

---

## 3. Key Technical Decisions & Rationale

### 3.1 Use Next.js 15 (App Router) for Fullstack Architecture
**Decision:**  
Use Next.js 15 for both frontend rendering and backend API routes in a single repository.

**Rationale:**  
- Eliminates frontend-backend decoupling overhead for a small/medium dev team.
- Built-in API Routes seamlessly deploy as Vercel Serverless Functions.
- Provides server-side rendering (SSR) and client components where dynamic interaction is required (e.g. signature pad, QR scanner).

---

### 3.2 Database Choice: Supabase PostgreSQL with Prisma ORM
**Decision:**  
Use Supabase PostgreSQL as managed cloud database, paired with Prisma ORM for schema definitions and type-safe client queries.

**Rationale:**  
- Managed cloud infrastructure removes database server maintenance overhead.
- Prisma ORM ensures compile-time type safety, migration tracking, and auto-generated TypeScript types.
- Relational integrity ensures consistent mappings between Staff, Serving Rosters, Equipment, and Repair Tickets.

---

### 3.3 Mor.Nor. x Pastoral Team Scheduler Engine Implementation
**Decision:**  
Build a multi-tiered rule engine in `/api/roster` enforcing 4 Conditional Arrangement Rules and automated substitute finding.

**Rationale:**  
- **Main Logic 1 (Special Day Department Mapping):** Guarantees deacons lead worship on their department's annual celebration day.
- **Main Logic 2 (Location Priority Order):** Priority 1 (Main/Lower Sanctuary) ➔ Priority 2 (Entrance) ➔ Priority 3 (Timothy Room).
- **Main Logic 3 (Quota Rule):** Caps serving frequency at 2 weeks/month to prevent deacon burnout.
- **Minor Logic (Conflict Prevention):** Filters out staff with approved leave or conflicting serving duties.
- **Automated Substitute Workflow:** `/api/roster` endpoint handles response actions (`confirm`, `swap_request`, `emergency_change`) by querying available unassigned staff.

---

### 3.4 Equipment Digital Handover with Base64 Canvas Signatures
**Decision:**  
Capture handovers and returns using HTML5 Canvas digital signatures stored as Base64 strings directly in PostgreSQL.

**Rationale:**  
- Provides legally non-repudiable audit trails for high-value church equipment (microphones, projectors).
- Removes physical paper sign-out logs completely.
- Status transition pipeline (`pending_handover` ➔ `active` ➔ `returned`) guarantees item tracking accountability.

---

### 3.5 SLA-Based Repair Ticket Engine with Cron Monitoring
**Decision:**  
Implement automated SLA deadline calculation on ticket creation (`low`: 72h, `medium`: 48h, `high`: 24h, `critical`: 4h) and periodic cron monitoring via `/api/cron/sla-check`.

**Rationale:**  
- Ensures technicians receive immediate SLA warnings before maintenance deadlines breach.
- Automates status progression (`open` ➔ `in_progress` ➔ `resolved` ➔ `closed`).

---

### 3.6 LINE LIFF & Messaging Bot Ecosystem
**Decision:**  
Adopt LINE LIFF for zero-install user access and LINE Messaging API for push notifications.

**Rationale:**  
- Elimination of app store installation barrier for non-technical users and elderly church members.
- Direct push notifications ensure high open-rates for 2-week, 1-week, and 1-day serving reminders.

---

## 4. Change Log

| Date       | Decision / Update                                                                                                   | Author |
|------------|---------------------------------------------------------------------------------------------------------------------|--------|
| 2026-02-11 | Initial technical decision document                                                                                | Salmon |
| 2026-08-07 | Integrated Mor.Nor. x Pastoral Scheduler Rules, Prisma ORM, Base64 Digital Signatures, and Repair SLA Cron Engine | Salmon |
