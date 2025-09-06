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

## 2️⃣ Server Setup

```
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# OR create .env manually with:
# PORT=3001
# NODE_ENV=development
# CLIENT_URL=http://localhost:3000

# Start the server
npm start
# OR
node server.js
```

## 3️⃣ Client Setup

```
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Start the development server
npm start
```

## 4️⃣ Verify Setup

Backend: Visit http://localhost:3001/api/test
– should return

```
{"message":"API is working!"}
```

Frontend: Visit http://localhost:3000
– should load the React application

## 🔧 Environment Variables

Create a .env file in the server directory:

```
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:3000

```

## 📋 Job Data Format

Jobs are stored with the following structure:

```
{
  "id": "unique-id-string",
  "company": "Company Name",
  "jobTitle": "Job Title",
  "status": "Applied|Interviewing|Offer|Rejected",
  "notes": "Application notes",
  "applicationDate": "MM/DD/YYYY"
}

```

## 🧪 Testing the API

Using cURL commands:

```
# Get all jobs
curl http://localhost:3001/api/jobs

# Create a new job
curl -X POST http://localhost:3001/api/jobs \
-H "Content-Type: application/json" \
-d '{"company":"Google","jobTitle":"Software Engineer","status":"Applied","notes":"Applied through careers page"}'

# Update a job
curl -X PATCH http://localhost:3001/api/jobs/JOB_ID \
-H "Content-Type: application/json" \
-d '{"status":"Interviewing"}'

# Delete a job
curl -X DELETE http://localhost:3001/api/jobs/JOB_ID
```

## 🎓 Learning Outcomes

Through building this project, I practiced:

Backend Development: Express.js server setup, RESTful API design, middleware implementation

Frontend Development: React components, state management, API integration

Code Organization: Separation of concerns, modular architecture

Error Handling: Centralized error handling, input validation

Configuration Management: Environment variables, config abstraction

Documentation: Clear project documentation and setup instructions

## 🚧 Future Enhancements

Potential improvements for future versions:

🔑 Add user authentication and authorization

🗄️ Implement database storage (PostgreSQL/MongoDB)

📎 Add file upload for resumes/cover letters

🔍 Implement advanced job search and filtering features

📧 Add email notifications for application deadlines

📊 Create a dashboard with analytics

## 📄 License

This project is for educational purposes.

```

---
```
