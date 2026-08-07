# Proof of Concept (PoC) Scope & Phase Status

This document defines the original scope, success criteria, and current status of the Proof of Concept and Production implementation phase.

---

## 1. Objective

Validate and deliver the core capabilities of the MTC Staff Management System:
- LINE LIFF Web App integration
- Mor.Nor. x Pastoral Team Serving Roster arrangement engine (4 Conditional Arrangement Rules)
- Equipment catalog QR Code scanning & Base64 digital signature handover/return
- Repair Ticket lifecycle tracking & SLA monitoring cron
- Production fullstack deployment on Vercel Cloud and Supabase PostgreSQL

---

## 2. In Scope & Implementation Status

| Capability / Module | PoC Requirement | Status | Verification & API Implementation |
|---|---|---|---|
| **LINE LIFF Gateway** | Open web app from LINE without login re-prompt | 🟢 Completed | `@line/liff` SDK integrated into Next.js App Router |
| **Database Connectivity** | Prisma ORM connected to Supabase PostgreSQL | 🟢 Completed | Prisma Client querying models (`Staff`, `Serving_Roster`, `Equipment`, `Equipment_Booking`, `Repair_Ticket`) |
| **Equipment & QR Code API** | Catalog management, bulk import, QR scanning | 🟢 Completed | `/api/equipment` & `/api/equipment/bulk` endpoints |
| **Digital Handover Signatures** | Base64 canvas signature capture on borrow/return | 🟢 Completed | `/api/bookings/equipment/handover` & `/return` endpoints |
| **Repair Ticket & SLA Engine** | Ticket creation, SLA calculation, cron check | 🟢 Completed | `/api/tickets`, `/api/tickets/stats`, & `/api/cron/sla-check` endpoints |
| **Serving Roster Engine** | Mor.Nor. x Pastoral rules & substitute finder | 🟢 Completed | `/api/roster` supporting 4 rules, status responses, and auto-substitutes |
| **LINE Bot Notifications** | Webhook verification & push notifications | 🟢 Completed | `@line/bot-sdk` signature verification & push notification dispatcher |

---

## 3. Success Criteria & Verification Summary

All PoC success criteria have been fully met and verified:

- ✅ **LIFF Gateway Integration:** Web app loads smoothly inside LINE application.
- ✅ **Database & API Logic:** Frontend seamlessly executes REST API calls backed by Supabase PostgreSQL.
- ✅ **Digital Audit Trail:** Equipment handovers record digital signatures with timestamps in PostgreSQL.
- ✅ **Scheduler Engine:** Roster logic correctly evaluates location priorities (Main/Lower Sanctuary ➔ Entrance ➔ Timothy Room), department mappings, 2-week quota limits, and conflict checks.
- ✅ **CI/CD Cloud Deployment:** Vercel Cloud automatically builds and deploys updates from GitHub main branch.

---

## 4. Key Deliverables Produced

- **GitHub Repository:** `salmon76/MTC-Staff-Management-v1`
- **Live Vercel Production Environment:** `https://mtc-staff-management-v1.vercel.app`
- **Documentation Suite (README/):**
  - `kickoff_summary.html` (Executive Deck & Blueprint)
  - `presentation_kickoff_deck.md` (Slide outline)
  - `ARCHITECTURE.md` (System Architecture & Component Diagram)
  - `DECISION.md` (Technical Decision Record & Rationale)
  - `ENV.example` (Environment Blueprint)
  - `PoC_Scope.md` (PoC Scope & Implementation Matrix)

---

## 5. Next Steps & Roadmap

1. **Pilot Testing:** Run trial roster generation with pastoral leadership and committee members.
2. **LINE Bot Notification Timeline:** Finalize scheduled push reminders (2 weeks, 1 week, 1 day prior to service).
3. **Staff Onboarding & Training:** Conduct brief hands-on training sessions for church deacons and maintenance staff.
