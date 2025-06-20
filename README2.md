# 📚 Project Roadmap

This roadmap outlines the core architecture and implementation phases for the cultural repository project, segmented into static content, dynamic features, backend logic, and operational infrastructure. Use checkboxes to track progress as development evolves.

---

## 🔸 1. Static Knowledge Repository

- [x] Define subject–page–topic hierarchy
- [x] Link topics to dynamic reference hooks
- [ ] Implement content routing (e.g., /subject/:id/page/:id/topic/:id)
- [ ] Add topic metadata (e.g., region, theme, contributor)
- [ ] Support rich formatting for static content
- [ ] Expose static topics to dynamic discussions

---

## 🔹 2. Dynamic Interaction Layer

### Users, Roles & Permissions
- [x] Role definition matrix
- [x] Seed users with audit logs and permission tags
- [x] Add changelog logging for seed operations
- [ ] Route guards for role-based frontend navigation
- [ ] Permission-aware UI components

### Community & Content Features
- [ ] User profiles with activity history and badges
- [ ] Commenting and nested replies
- [ ] Forum-like threads tied to static topics
- [ ] Post tagging and filters
- [ ] Moderation tools (flagging, visibility controls)

---

## 🧠 3. Backend Project Logic

- [x] Secure password hashing (bcryptjs)
- [x] SHA256 signature output for seed operations
- [x] Skipped user handling and reporting
- [x] Centralized changelog (`changelog.log`)
- [ ] (Optional) Seed diffing for idempotent updates
- [ ] Middleware-based audit trail across API endpoints

---

## ⚙️ 4. Infrastructure & DevOps

- [x] Dated folder structure for seed reports
- [x] Timestamped JSON reports
- [ ] Scheduled integrity checks (hash validation)
- [ ] Backup system for `seed-reports`
- [ ] Compress/archive reports older than 30 days

---

## 🌱 5. Future Enhancements

- [ ] Public API for cultural entries and threads
- [ ] Export to PDF/JSON bundles
- [ ] Offline access mode or caching
- [ ] Contributor scoring and recognition system

---

> _Curated with integrity. Engineered for community. Sustained with transparency._
