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
- [x] Create role matrix (admin, moderator, contributor, researcher, viewer)
- [x] Implement permission enforcement logic (role → action map)
- [x] Seed users with audit logs and permission tags
- [x] Add changelog logging for seed operations
- [ ] Add route guards for role-based frontend navigation
- [ ] Generate dynamic dashboard per user role

### Community & Content Features
- [ ] Implement discussion threads linked to static topics
- [ ] Allow comments and nested replies
- [ ] Introduce tagging system for posts and threads
- [ ] Create user profiles with badges and activity history
- [ ] Add moderation controls (edit/hide/flag)

---

## ⚙️ 3. Backend Project Logic

- [x] Secure password hashing with bcryptjs
- [x] Add SHA256 hash signature to seed output
- [x] Track skipped users with file-based logs
- [x] Create centralized changelog log (`changelog.log`)
- [ ] Add seed diffing and update detection (deferred)
- [ ] Enable rollback support with versioned reports

---

## 🧱 4. Infrastructure & DevOps

- [x] Write all seed operations to dated folders
- [x] Structure reports with timestamp-based naming
- [ ] Automate backup of seed-reports to cloud or remote store
- [ ] Cron job to validate SHA256 integrity
- [ ] Optional: Compress and archive logs older than 30 days

---

## 🌱 5. Future Enhancements

- [ ] Public API for cultural entries and community content
- [ ] Export bundle option (PDF, JSON)
- [ ] Offline-friendly mode with cacheable static pages
- [ ] Contributor reputation scoring and achievements

---

> _Curated with integrity, maintained with transparency._
