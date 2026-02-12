# System Architecture

This document describes the high-level and logical architecture of the system.

---

## 1. Overview

The system is a Fullstack Web Application integrated with LINE platform.  
It consists of a web frontend (LIFF), backend APIs, database, and LINE Messaging API.

The architecture is designed to support:
- Rapid Proof of Concept (PoC)
- Scalability to production
- Maintainability and extensibility

---

## 2. High-Level Architecture

Components:

- Client
  - LINE LIFF Web App
  - Web Browser (for admin or backoffice if needed)

- Frontend
  - Next.js (App Router)
  - Tailwind CSS

- Backend
  - Next.js API Routes (Node.js runtime)

- Database
  - Supabase (PostgreSQL)

- External Integration
  - LINE Messaging API (Webhook, Push Message)

- Deployment
  - Vercel
  - GitHub Integration (CI/CD)

High-level flow:

User  
→ LINE App (LIFF)  
→ Next.js Frontend  
→ Next.js API Routes  
→ Supabase (PostgreSQL)  
→ LINE Messaging API (for notifications)

---

## 3. Logical Architecture

### 3.1 Frontend Layer
Responsibilities:
- Render UI via LIFF
- Handle user interactions
- Call backend APIs
- Manage client-side state

### 3.2 Backend Layer
Responsibilities:
- Expose REST APIs
- Handle business logic
- Integrate with LINE Webhook
- Validate requests and security
- Communicate with Supabase

### 3.3 Data Layer
Responsibilities:
- Store master data and transactional data
- Enforce data integrity (constraints, relations)
- Support future analytics and reporting

---

## 4. Deployment Architecture

- Frontend and Backend deployed as a single Next.js application on Vercel
- Environment separation:
  - Development
  - Staging
  - Production
- Supabase project separated per environment (if required)

---

## 5. Security Considerations

- LINE Webhook signature verification
- API authentication and authorization
- Environment variables for secrets (LINE Channel Secret, Access Token, Supabase Key)
- HTTPS enforced by Vercel
- Basic rate limiting for APIs (future)

---

## 6. Non-Functional Requirements

- Scalability: Horizontal scaling via Vercel serverless functions
- Availability: Managed hosting on Vercel and Supabase
- Maintainability: Modular architecture, typed codebase (TypeScript recommended)
- Observability: Logging and error monitoring (e.g., Sentry – optional)

---

## 7. Future Enhancements

- Background jobs / queue (for notifications)
- Caching layer (Redis or Edge caching)
- Admin dashboard for operations
- Analytics and reporting
