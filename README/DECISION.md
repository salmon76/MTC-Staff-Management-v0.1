# Technical Decision Record (decision.md)

This document records key technical decisions for the project.  
The purpose is to provide context and rationale for the chosen architecture and technology stack, especially for onboarding developers and future maintainers.

---

## 1. Objective

The objective of this project is to develop a web application integrated with LINE platform, focusing on:

- Providing a web interface via LINE LIFF
- Supporting LINE Messaging API for notifications and interactions
- Building a scalable and maintainable fullstack web application
- Supporting rapid PoC development and future extension to production

This document serves as a reference for all technical decisions made during the initial phase of the project.

---

## 2. Architecture Overview

The system follows a Fullstack JavaScript architecture using Next.js for both frontend and backend:

- Frontend: Web application built with Next.js (App Router) and Tailwind CSS  
- Backend: API implemented using Next.js API Routes (Node.js runtime)  
- Database: Supabase (PostgreSQL)  
- Integration: LINE LIFF for web entry point and LINE Messaging API for chatbot/notifications  
- Deployment: Vercel with GitHub integration for CI/CD

High-level flow:

User (LINE App / Browser)  
→ LIFF Web App (Next.js Frontend)  
→ Next.js API Routes (Backend)  
→ Supabase (PostgreSQL)  
→ LINE Bot (Messaging API for notifications and events)

---

## 3. Technology Stack

### 3.1 Frontend
- Next.js (App Router)
- Tailwind CSS

### 3.2 Backend
- Next.js API Routes (Node.js runtime)

### 3.3 API & Documentation
- Postman (API testing)
- Swagger / OpenAPI (API documentation)

### 3.4 Database
- Supabase (PostgreSQL)

### 3.5 Deployment & CI/CD
- Vercel (Hosting & Deployment)
- GitHub Integration (Auto deploy on push / PR)

### 3.6 LINE Integration
- @line/bot-sdk: LINE Messaging API (Webhook, Push message)
- @line/liff: LIFF SDK for Web App inside LINE

---

## 4. Key Decisions & Rationale

### 4.1 Use Next.js for Fullstack Development
**Decision:**  
Use Next.js for both frontend and backend (API Routes).

**Rationale:**  
- Single framework for fullstack development reduces complexity  
- Easy deployment with Vercel  
- Supports Server-side Rendering (SSR) and modern React patterns  
- Suitable for PoC and scalable for production

---

### 4.2 Use Supabase as Primary Database

**Decision:**  
Use Supabase (PostgreSQL) as the main database.

**Rationale:**  
- Managed PostgreSQL with built-in Auth and Storage  
- Easy JavaScript SDK integration  
- Supports rapid PoC and scalable to production  
- Reduces DevOps overhead

---

### 4.3 LINE Platform Integration

**Decision:**  
Integrate with LINE using LIFF for web interface and Messaging API for chatbot/notifications.

**Rationale:**  
- Enables seamless user experience inside LINE ecosystem  
- LIFF allows web app access without separate login flow  
- LINE Bot enables notifications, reminders, and user interactions

---

### 4.4 JavaScript / TypeScript as Core Language

**Decision:**  
Use JavaScript/TypeScript as the primary programming language.

**Rationale:**  
- Fullstack JS reduces context switching for developers  
- Large ecosystem and community support  
- Easy onboarding for web developers  
- TypeScript is recommended for type safety and maintainability

---

### 4.5 Deployment on Vercel with GitHub Integration

**Decision:**  
Deploy application on Vercel with GitHub integration.

**Rationale:**  
- Seamless deployment for Next.js  
- Automatic CI/CD on push or pull request  
- Easy environment separation (Dev / Staging / Production)  
- Minimal operational overhead

---

## 5. Proof of Concept (PoC) Scope

The initial PoC aims to validate the following:

- LIFF can open the web application successfully  
- Web frontend can call Next.js API Routes  
- API can read/write data from Supabase  
- LINE Bot can receive webhook events and send messages back to users  
- End-to-end flow works from LINE → Web App → Backend → Database → LINE

If PoC is successful, the project will proceed with further feature development and production hardening.

---

## 6. Future Considerations

- Authentication & Authorization (e.g., Supabase Auth with LINE Login mapping)  
- Environment separation (Dev / Staging / Production)  
- Observability (logging, monitoring)  
- Security hardening (rate limit, webhook signature verification)  
- Performance optimization and caching strategy

---

## 7. Open Questions / To Be Decided

- Final authentication strategy (LINE Login vs custom identity mapping)  
- Data retention and compliance requirements  
- Role-based access control (RBAC) model  
- Production readiness checklist

---

## 8. Change Log

| Date       | Decision / Update                  | Author |
|------------|-------------------------------------|--------|
| YYYY-MM-DD | Initial technical decision document | TBD    |
