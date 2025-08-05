# 📌 Job Tracker App

A simple **full-stack Job Tracker application** for managing job applications.  
This project serves as a **learning journey** to showcase my progression in **full-stack development** while following **best practices for version control**.

> **Note:** 🔐 **This version does not include login/signup or authentication features**.  
> The focus is on building a **clean CRUD application** with filtering functionality.

---

## 🎯 Purpose of the Project

This application was created to:

1. **Learn & Apply Full-Stack Concepts:** Build an end-to-end application using React, Node.js, Express, and SQLite.
2. **Practice Version Control Best Practices:** Improve my skills with Git & GitHub through structured commits, branches, and documentation.

---

## ✨ Features

- **Job Application Management (CRUD):**

  - ➕ Add a job _(company name, job title, application status, application date, notes)_
  - 👀 View all jobs
  - ✏️ Update or 🗑️ delete jobs

- **Filtering:**

  - 🔍 Filter jobs by application status (e.g., _Applied_, _Interviewing_, _Rejected_, _Offer_)

- **Clean UI:**

  - 🖥️ Built with React for a simple and intuitive interface

- **No Authorization:**
  - 🚫 This version intentionally omits authentication and login features

---

## 🛠 Tech Stack

**Frontend:**

- ⚛️ React (Create React App)

**Backend:**

- 🟢 Node.js
- 🚏 Express

**Database:**

- 🗂 SQLite (lightweight, file-based database)

---

## 🔗 API Endpoints

- `GET /jobs` – Fetch all jobs
- `POST /jobs` – Add a new job
- `PUT /jobs/:id` – Update a job
- `DELETE /jobs/:id` – Delete a job

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
```
