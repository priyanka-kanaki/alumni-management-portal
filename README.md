<h1>Alumni Management System Project - Website</h1>
# 🎓 Alumni Management Portal

A web-based platform to connect alumni and current students, enabling mentorship, event sharing, job/internship opportunities, and networking.

---

## 📌 Features

- 👤 Role-based login and registration (Student & Alumni) using Firebase Auth
- 🧑‍🎓 Personalized dashboards for Students and Alumni
- 🔍 Explore mentors & job/internship opportunities
- 📢 Post and manage alumni events
- 📝 View and edit user profiles
- ☁️ Firebase Firestore for data storage and real-time updates

---

## 🖼️ Screenshots


### 🏠 Home Page  
![Home Page](https://github.com/priyanka-kanaki/alumni-management-portal/blob/master/screenshots/Home%20Page.png)

## ℹ️ About Us
![About us Page](https://github.com/priyanka-kanaki/alumni-management-portal/blob/master/screenshots/About%20us.png)

## 🔑 Forgot Password
![Forgot Password Page](https://github.com/priyanka-kanaki/alumni-management-portal/blob/master/screenshots/forgetpassword.png)

## 📝 Registration / Login 
![Registration Page](https://github.com/priyanka-kanaki/alumni-management-portal/blob/master/screenshots/registrationLogin.png)

### 🧑‍🎓 Student Dashboard  
![Student Dashboard](https://github.com/priyanka-kanaki/alumni-management-portal/blob/master/screenshots/students%20Dashboard.png)

### 🎓 Alumni Dashboard  
![Alumni Dashboard](https://github.com/priyanka-kanaki/alumni-management-portal/blob/master/screenshots/alumni%20Dashboard.png)

---


## 🔧 Firebase Setup Instructions

### 1️⃣ Create a Firebase Project
- Visit [Firebase Console](https://console.firebase.google.com/)
- Click **"Add project"**, name it (e.g., `Alumni Portal`)
- Complete setup (you can skip Google Analytics)

### 2️⃣ Enable Authentication
- Go to **Authentication** → **Sign-in method**
- Enable **Email/Password**

### 3️⃣ Add a Web App
- Click the `</>` (Web) icon
- Register your app and copy the `firebaseConfig` snippet
- Paste this in your `.html` files where Firebase is initialized

### 4️⃣ Set Up Firestore
- Go to **Firestore Database** → Click **Create database**
- Select **Start in test mode** → Choose location → Create

### 5️⃣ (Optional) Create Collections
- `students`, `alumni`, `mentorship_requests`, `jobs`, `events`

### 6️⃣ Replace the firebaseConfig in all HTML files:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
---

##  Folder Structure

alumni-management-portal/
├── css-files/
├── javascript-file/
├── photos/
├── index.html
├── login.html
├── studentDashboard.html
├── alumniDashboard.html
├── README.md
└── .gitignore

## 🛠️ How to Clone and Run the Project

### 🔁 1. Clone the repository

```bash
git clone https://github.com/priyanka-kanaki/alumni-management-portal.git
cd alumni-management-portal
