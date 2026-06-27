# ✈️ Airport Runway Queue Simulator

A full-stack Java project that simulates an airport runway management system where emergency flights are given landing priority over normal flights using Java's **PriorityQueue** and **Multithreading**.

---

## 🌐 Live Demo

**Frontend:**
https://6a40434e41f513dfcb7bc85c--clinquant-biscotti-602bfa.netlify.app/

**Backend API:**
https://airport-simulator-backend-production.up.railway.app

---

## 📌 Features

* 🚀 Real-time flight simulation
* ✈️ Automatic flight generation
* 🚨 Emergency flights receive landing priority
* 🛬 Runway landing simulation
* 📊 Live dashboard with statistics
* 📋 Waiting Flights table
* ✅ Completed Flights table
* 🌙 Dark / Light mode
* 🔄 Auto-refresh dashboard
* 🌐 REST APIs built with Spring Boot
* ⚡ Multi-threaded backend

---

## 🛠 Tech Stack

### Backend

* Java 21
* Spring Boot
* REST API
* Maven
* PriorityQueue
* Multithreading
* HashMap
* ArrayList

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API

### Deployment

* Backend: Railway
* Frontend: Netlify

---

## 🏗 Project Architecture

```text
Browser (Frontend)
        │
        ▼
JavaScript Fetch API
        │
        ▼
Spring Boot REST API
        │
        ▼
AirportService
        │
 ┌───────────────┐
 │ PriorityQueue │
 │   HashMap     │
 │ ArrayList     │
 └───────────────┘
        │
        ▼
Flight Generator Thread
Runway Controller Thread
```

---

## 🧠 How It Works

1. The Flight Generator continuously creates new flights.
2. Every few seconds, an emergency flight may be generated.
3. Flights are stored inside a Java PriorityQueue.
4. Emergency flights are assigned higher priority than normal flights.
5. The Runway Controller processes the highest-priority flight first.
6. Completed flights are stored separately.
7. The frontend fetches updated data every few seconds through REST APIs.

---

## 📡 REST API Endpoints

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/waiting`   | Get all waiting flights   |
| GET    | `/completed` | Get completed flights     |
| GET    | `/stats`     | Get simulation statistics |
| POST   | `/start`     | Start simulation          |
| POST   | `/stop`      | Stop simulation           |

---

## 📂 Project Structure

```text
airport-simulator
│
├── src
│   ├── controller
│   ├── model
│   ├── service
│   ├── threads
│   └── resources
│
├── pom.xml
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/AbhisekDash01/airport-simulator-backend.git
```

### Navigate to the project

```bash
cd airport-simulator
```

### Run the application

```bash
mvn spring-boot:run
```

Open:

```
http://localhost:8080
```

---

## 📸 Screenshots

<img width="911" height="907" alt="Screenshot 2026-06-28 032036" src="https://github.com/user-attachments/assets/dd46c1c1-44be-401a-a022-8537ec01350d" />
<img width="857" height="887" alt="Screenshot 2026-06-28 032111" src="https://github.com/user-attachments/assets/1c2c6495-4200-4d13-b992-2ef55128871e" />
<img width="927" height="906" alt="Screenshot 2026-06-28 032348" src="https://github.com/user-attachments/assets/09d50263-b587-45c1-9646-f8cb226a0505" />


---
## 🎯 Future Improvements

* User authentication
* Multiple runways
* Flight scheduling by ETA
* Airport weather simulation
* Database integration (MySQL)
* Admin dashboard
* Flight history search
* Charts and analytics
* WebSocket-based real-time updates
* Docker deployment

---

## 👨‍💻 Author

**Abhisek Dash**

GitHub: https://github.com/AbhisekDash01

---

## ⭐ If you found this project helpful

Give this repository a ⭐ on GitHub.
