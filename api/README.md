# 🏡 ETNAir API

Welcome to **ETNAir**, an ambitious project that brings you into the creation of an online rental platform. Inspired by major successes like Airbnb, ETNAir aims to revolutionize the short- and medium-term rental market. 🚀

## 📝 Table of Contents
- [🌟 Introduction](#-introduction)
- [✨ Key Features](#-key-features)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🔧 Configuration](#-configuration)
- [📚 Documentation and API](#-documentation-and-api)
- [🤝 Team Members](#-team-members)
- [📜 License](#-license)

---

## 🌟 Introduction

ETNAir is a **fictional startup** born from an ETNA hackathon. The goal is to develop a **modern, intuitive, and scalable platform** for short- and medium-term housing rentals.

### 🎯 Objectives
- Develop a **robust API** using Node.js and PostgreSQL.
- Build a **scalable infrastructure** with Docker/Kubernetes.
- Offer an intuitive interface for **tenants** and **hosts**.

### 🚀 Challenge
This team-based project focuses on collaboration, technical quality, and meeting deadlines to deliver a functional prototype in just **5 weeks**.

---

## ✨ Key Features

### 👥 User-Facing
- 🔍 Search and book housing as a tenant.
- 🏠 Publish rental listings as a host.

### 📊 Management
- 🔧 Manage users and reservations (feature coming soon).

### 🛠️ Technical
- 🌐 **API** in Node.js for managing interactions with the database.
- 🗄️ **PostgreSQL Database** for efficient data storage.
- 📦 **Docker/Kubernetes Infrastructure** for portability and scalability.

---

## 🏗️ Project Architecture

### Directory Structure
Below is a clear overview of the project's directory structure:

```plaintext
    / ETNAir
    ├── /api
    │   ├── /prisma
    │   │   └── /schema
    │   ├── /src
    │   │   ├── /configs         # Global configurations (database, environments)
    │   │   ├── /controllers     # Contains the business logic for API endpoints
    │   │   ├── /helpers         # Utility functions to simplify and enhance code reusability
    │   │   ├── /interfaces      # TypeScript interfaces for type safety
    │   │   ├── /routes          # Defines the API routes
    │   │   ├── /models          # Data modeling with Sequelize
    │   │   ├── /middlewares     # Middlewares for request validation and security
    │   │   ├── /services        # Application services for handling complex logic
    │   │   ├── /utils           # Utility scripts for general purpose
    │   │   ├── /validators      # Input validation logic
    │   │   └── index.js         # Main entry point of the backend
    │   ├── /tests               # Unit and integration tests
    │   └── .env                 # Environment variables file
    ├── /shared
    │   └── /types               # Shared types and definitions
    └── /client                  # Frontend

```

### Base de Données
We use PostgreSQL for efficient data storage and management. The structure is designed to support scalability with key relationships between the main entities:

- Users: Handles both tenants and hosts.
- Listings: Records the properties listed for rent.
- Bookings: Tracks reservations made by tenants.

---

## ⚙️ Installation

### Prerequisites
- **Node.js** (version 16 or higher)
- **PostgreSQL**
- **Docker** (optional)

### Installation Steps
1. Clone the repository:
```bash
    git clone https://github.com/your-repo/etnair.git
    cd etnair/api
    npm install
    npm run dev
```

2. Start the PostgreSQL database:
   - Locally: Ensure PostgreSQL is running and create a database for ETNAir.
   - With Docker: Use the provided `docker-compose.yml` file to spin up a database container:
```bash
     docker-compose up -d
```

3. Configure the `.env` file:
   - Copy the `.env.example` to `.env` and adjust the values to match your setup:
```bash
     cp .env.example .env
```

4. Run database migrations:
```bash
   npm run migrate
```

5. (Optional) Seed the database with initial data:
```bash
   npm run seed:prod
```

---

## 🚀 Usage
### Development Mode
Run the development server (Hot Reload) with nodemon:
```bash
    npm run dev
```
- Production Mode:
Build and start the application:

```bash
    npm run build
    npm start
```

---

## 🔧 Configuration
Customize the application with these environment settings.
### Environment Variables
Here is an overview of the required environment variables in the .env file:

```bash
   API_PORT=3000              # Port used by the API
   DATABASE_URL=             # PostgreSQL connection string
   NODE_ENV=development       # Environment mode (development or production)
   CLIENT_URL=http://localhost:5000  # URL for the client application
```
---

## 📚 API Documentation
Access the API documentation (powered by Swagger) at:
```bash
   http://localhost:$3000/api-doc
```

---

## 🤝 Team Members
A special thanks to the talented team behind this project 🎉:

- Eliot Modeste
- Maël Aguessy
- Fatima-Zora Ayad
- Joey Bervin

--- 

## 📜 License
⚠️ This project is not currently licensed. For sharing or modifying the code, please contact the team to clarify usage rights.

---

✨ Thank you for exploring ETNAir. We hope this project inspires and offers a great learning opportunity! 💻