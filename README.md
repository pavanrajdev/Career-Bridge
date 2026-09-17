# Career Bridge

Career Bridge is a job portal web application built with React.js. It helps job seekers explore job opportunities by category, search through available jobs, view job details, apply for jobs, and manage their candidate profile.

The project uses React Context API for application state management and localStorage for client-side persistence of user and application data.

## 🚀 Features

* Job search by category
* Browse all available jobs
* View detailed job information
* Featured jobs section
* Top companies section
* Job categories
* Job recommendations
* Apply for jobs
* Applied jobs management
* Candidate profile
* Resume upload/management
* Job-seeker and recruiter role selection during signup
* Client-side authentication flow
* Local data persistence using localStorage
* Global state management using React Context API
* Client-side navigation using React Router
* Reusable React components

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Language:** JavaScript
* **Styling:** Tailwind CSS
* **Routing:** React Router
* **State Management:** React Context API
* **Build Tool:** Vite
* **Storage:** Browser localStorage

## 📂 Project Structure

```text
Career-Bridge/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── data/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run Career Bridge locally.

### 1. Clone the Repository

```bash
git clone https://github.com/pavanrajdev/Career-Bridge.git
```

### 2. Navigate to the Project Directory

```bash
cd Career-Bridge
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server provided by Vite.

## 🔄 Application Workflow

### For Job Seekers

1. Create an account as a job seeker.
2. Complete the candidate profile.
3. Browse available jobs.
4. Search for jobs by category.
5. View detailed job information.
6. Apply for suitable jobs.
7. Track applied jobs through the application flow.
8. Explore recommended opportunities.

### Job Discovery

Users can explore jobs through:

* Featured jobs
* Top companies
* Job categories
* All jobs
* Individual job detail pages

## 🧠 Key Concepts Used

### React Context API

React Context API is used to manage shared application state across components.

For example, the application uses context to manage applied jobs and the job application flow.

### React Router

React Router is used for client-side navigation between different sections of the application.

Example routes include:

```text
/job/:id
/all
/topcompany
/category/:category
```

### localStorage

Browser localStorage is used to persist client-side information such as user profile and signup/sign-in data.

### Reusable Components

The application is structured using reusable React components to improve code organization and maintainability.

## 📋 Job Data

Jobs are currently managed using local application data containing information such as:

* Job title
* Company
* Location
* Salary
* Experience
* Job type
* Required skills
* Job status
* Featured status
* Posting date
* Company logo

## 🔗 Links

* **GitHub Repository:** https://github.com/pavanrajdev/Career-Bridge
* **Live Demo:** https://career-bridge-opal.vercel.app/

## 🔮 Future Enhancements

* Spring Boot backend integration
* Database integration
* Real user authentication and authorization
* Recruiter dashboard
* Recruiter profile
* Job posting functionality
* Candidate search for recruiters
* Employee/candidate details management
* Application tracking system
* Backend-based job recommendations
* Persistent user and job data

## 📌 Project Status

**Completed — September 2026**

The current version focuses on the frontend job-search experience using React.js, React Context API, React Router, and localStorage.

Backend integration and advanced recruiter functionality are planned as future enhancements.

## 👨‍💻 Author

**Pavan Raj**

GitHub: https://github.com/pavanrajdev
