# System Architecture (Updated August 2026)

This document describes the high-level and logical architecture of the MTC Staff Management System.

---

## 1. Overview

The system is a Fullstack Web Application integrated with the LINE platform for Maitrichit Church (MTC).  
It consists of a Next.js 15 App Router web frontend (LIFF Gateway), serverless backend APIs, Supabase PostgreSQL database, and LINE Messaging API bot notifications.

The architecture supports:
- **Single Source of Truth** for church staff, deacons (มัคนายก), pastors (ศิษยาภิบาล), equipment catalog, and repair tickets.
- **Mor.Nor. x Pastoral Team Scheduler Engine:** Auto-arrangement of serving rosters following 4 Conditional Arrangement Rules and automated substitute finding.
- **Digital Handover & Audit Trail:** QR Code scanning with Base64 digital canvas signatures for equipment borrow/return.
- **SLA Tracking & Maintenance:** Automatic SLA deadline calculation and repair ticket lifecycle management.
- **Scalable Production Deployment:** Hosted on Vercel Serverless with GitHub CI/CD auto-deployment.

---

## 2. High-Level System Components

```
User (LINE App / Web Browser)  
  ↓ (LIFF SDK / HTTPS)  
Next.js 15 App Router (Vercel Serverless Cloud)  
  ├── Frontend UI (Tailwind CSS, Canvas Signature Pad, QR Scanner)  
  └── Backend REST API Routes  
        ├── /api/roster (Mor.Nor. x Pastoral Scheduler Engine & Auto-Substitute)  
        ├── /api/equipment & /api/equipment/bulk (QR Code Catalog)  
        ├── /api/bookings/equipment/handover & /return (Digital Signature API)  
        └── /api/tickets & /api/cron/sla-check (Repair Tickets & SLA Engine)  
  ↓ (Prisma ORM / Connection Pooling)  
Supabase PostgreSQL Database  
  ↓ (Webhook Event / Push Message API)  
LINE Messaging API Bot → User LINE Application
```

---

## 3. Core Modules & Logical Architecture

### 3.1 Mor.Nor. x Pastoral Team Scheduler Engine (`/api/roster`)
- **Main Logic 1 (Special Day Department Mapping):** Auto-assigns Deacons to serve on their department's annual special service (e.g., New Year ➔ President, Child Dedication ➔ Christian Education, Youth Sunday ➔ Youth Dept).
- **Main Logic 2 (Location Priority Order):** Priority 1 (Main Sanctuary / Lower Sanctuary) ➔ Priority 2 (Church Entrance) ➔ Priority 3 (Timothy Youth Room).
- **Main Logic 3 (Serving Quota):** Enforces max 2 serving weeks per month per Deacon to balance workload.
- **Minor Logic (Conflict Prevention):** Validates no Deacon is double-booked or assigned while on leave.
- **Automated Substitute Finder & Workflow:** Handles response actions (`confirm`, `swap_request`, `emergency_change`) by querying available Deacons and re-assigning substitute staff.

### 3.2 Equipment & Digital Handover Engine (`/api/bookings/equipment/*`)
- Master equipment catalog with unique QR Code identification.
- Handover and return confirmation featuring **Base64 Digital Signature capture** stored directly in Supabase.
- Status state transitions: `pending_handover` ➔ `active` ➔ `returned`.

### 3.3 Repair Tickets & SLA Engine (`/api/tickets`, `/api/cron/sla-check`)
- Auto-calculates `slaDeadline` based on priority level (`low`: 72h, `medium`: 48h, `high`: 24h, `critical`: 4h).
- Tracks `respondedAt` (technician response time) and `resolvedAt` (completion time).
- Cron route `/api/cron/sla-check` monitors overdue tickets and triggers notifications.

---

## 4. Deployment Architecture & Environments

- **Application Hosting:** Single Next.js Fullstack application on Vercel Serverless Functions.
- **Database:** Managed Supabase PostgreSQL database.
- **CI/CD Pipeline:** GitHub repository `salmon76/MTC-Staff-Management-v1` triggers auto-deployment on push to `main`.
- **Environment Isolation:** Secrets separated via `.env` / Vercel Environment Variables.

---

## 5. Security & Compliance Baseline

- **LINE Webhook Signature Verification (`x-line-signature`):** Ensures inbound webhooks originate strictly from LINE platform servers.
- **HTTPS Enforcement:** Enforced across all Vercel edge endpoints.
- **Data Privacy & PDPA Compliance:** Restricted data access via Prisma queries and role-based data filtering.
- **Digital Audit Trail:** Base64 signature timestamps and signer identity recording.

---

## 6. Non-Functional Requirements

- **Scalability:** Horizontal serverless function scaling on Vercel.
- **Availability:** 99.9% uptime SLA via managed Vercel and Supabase cloud infrastructure.
- **Maintainability:** Standardized TypeScript codebase with Prisma ORM type safety.
