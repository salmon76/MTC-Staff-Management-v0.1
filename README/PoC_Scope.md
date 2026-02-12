# Proof of Concept (PoC) Scope

This document defines the scope and success criteria of the Proof of Concept phase.

---

## 1. Objective

Validate the feasibility of:
- LINE LIFF integration
- Fullstack communication between Frontend, Backend, and Database
- LINE Bot messaging capability
- End-to-end user flow

---

## 2. In Scope

### 2.1 Functional Scope

- LIFF
  - User can open LIFF Web App from LINE
  - Display basic UI (e.g., Welcome page with user info)

- Frontend
  - Call backend API
  - Display response from API

- Backend
  - Expose at least 1–2 API endpoints
  - Handle request from frontend
  - Integrate with LINE Webhook

- Database (Supabase)
  - Create basic table (e.g., users, sessions, logs)
  - Insert and query data from API

- LINE Bot
  - Receive webhook event (e.g., message or follow event)
  - Send a reply or push message back to user

---

## 3. Out of Scope (for PoC)

- Production-grade security hardening
- Complex business logic
- Performance optimization
- Full UX/UI design
- Role-based access control (RBAC)

---

## 4. Success Criteria

The PoC is considered successful if:

- LIFF Web App opens successfully inside LINE  
- Frontend can call backend API without errors  
- Backend can read/write data to Supabase  
- LINE Bot can receive events and respond to users  
- Basic end-to-end flow works without manual intervention

---

## 5. Deliverables

- GitHub repository with initial project structure  
- Working demo environment deployed on Vercel  
- Basic README for setup and running the project  
- This PoC scope document committed to repo

---

## 6. Next Steps After PoC

- Review PoC results and technical risks  
- Finalize production architecture  
- Define feature backlog and roadmap  
- Prepare production environment and security baseline
