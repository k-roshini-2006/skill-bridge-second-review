# SkillBridge AI

**Micro-Credential Curriculum Generation Platform Driven by Real-Time Global Job Market Skill Demands**

> College Capstone Project — Full-Stack Web Application

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+  
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Fill in your Supabase credentials (optional — app runs in demo mode without them)

# Start development server
npm run dev
```

App runs at **http://localhost:5173**

---

## 🔑 Demo Mode

If Supabase is not configured, the app runs in **Demo Mode** automatically.

**Demo credentials:**
- Email: `demo@skillbridge.ai`
- Password: `demo1234`

All data in demo mode is clearly labeled as illustrative.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| AI | Google Gemini API (Phase 5) |

---

## 📋 Development Phases

| Phase | Scope | Status |
|---|---|---|
| **Phase 1** | Landing page, design system, routing, dashboard layout | ✅ Complete |
| Phase 2 | Supabase schema, Auth, Row Level Security | ⬜ Next |
| Phase 3 | Student profile, resume upload, skills | ⬜ Pending |
| Phase 4 | Job market dashboard, data integration | ⬜ Pending |
| Phase 5 | Skill gap analysis, AI curriculum generation | ⬜ Pending |
| Phase 6 | Roadmap, assessments, certificates | ⬜ Pending |
| Phase 7 | Admin dashboard, testing, deployment | ⬜ Pending |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Button, Card, Input, Progress, Badge, PlaceholderPage
│   ├── layout/      # AppLayout, Sidebar, Topbar, ProtectedRoute
│   └── landing/     # LandingNav, LandingSections
├── pages/
│   ├── Landing.tsx
│   ├── auth/        # Login, Register
│   └── dashboard/   # StudentDashboard
├── context/         # AuthContext (Supabase Auth + demo mode)
├── lib/             # supabase.ts, utils.ts, constants.ts
└── types/           # TypeScript interfaces for all data models
```

---

## 🔒 Security Notes

- Supabase Row Level Security (Phase 2+)
- API keys stored server-side in Edge Functions only
- Protected routes redirect unauthenticated users
- File uploads validated by type and size (Phase 3+)

---

## 🌐 Environment Variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous/public key |

See `.env.example` for the template.

---

*Built with React 18, Vite, Tailwind CSS, Supabase, and Google Gemini AI.*
