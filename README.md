# ETNAir Project

Welcome to the **ETNAir** project! This platform provides a seamless experience for both tenants and hosts. Tenants can browse and book properties, while hosts can list and manage their properties. The project consists of a back-end built with **Node.js** and **PostgreSQL**, and a front-end developed using **React**, **Redux**, and **Vite** for a fast, responsive user interface.

---

## 📝 Table of Contents
- [🌟 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [⚙️ Front-End](#-front-end)
- [🔧 Back-End](#-back-end)
- [🚀 Installation](#-installation)
- [📚 Documentation](#-documentation)
- [🤝 Team Members](#-team-members)
- [📜 License](#-license)

---

## 🌟 Project Overview

ETNAir is a full-stack application designed to connect tenants and property hosts. The platform provides intuitive user interfaces and efficient backend services to facilitate property search, booking, and listing management. The system supports real-time data interaction between the front-end and back-end.

### 🎯 Objectives
- **Responsive design** for tenants and hosts across all devices.
- **State management** using Redux for front-end data management.
- **Seamless integration** between the front-end and the back-end.
- **Optimized performance** with Vite for fast build and development.

---

## ✨ Key Features

### 👥 User-Facing Features
- 🔍 **Search** and filter properties (location, price, amenities).
- 🏠 **Publish listings** as a host.
- 📅 **Book properties** with an easy-to-use checkout process.
- 🏞️ **Property details page** for tenants to view detailed property information.

### 📊 State Management
- ⚙️ **Redux Toolkit** for managing state across the front-end.
- 🌍 **React Router** for smooth page navigation.

### 🛠️ Technical Stack
- 🖥️ **React** for front-end development.
- 🛠️ **Vite** for build tools and development server.
- 🌐 **React-Redux** for global state management.
- ✨ **Styled Components** for styling React components.
- 🗄️ **Node.js** and **PostgreSQL** for the back-end, handling the application logic and database interactions.
- 📡 **Express** for building the API endpoints.
  
---

## ⚙️ Front-End

The front-end of ETNAir is built using **React** and **Redux** for state management, along with **Vite** as the build tool. This part of the project is responsible for displaying data, managing user interactions, and handling page navigation.

### Key Technologies
- **React**: Used for building the user interface.
- **Redux**: Manages the global state of the application.
- **Vite**: Optimized build tool for fast development and production builds.
- **React Router**: For handling client-side routing and navigation.

For more detailed information on the front-end setup and installation, please refer to the [front-end README](./client/README.md).

---

## 🔧 Back-End

The back-end of ETNAir is built with **Node.js**, **Express**, and **PostgreSQL**. It handles the API, manages database interactions, and serves the data to the front-end. The back-end is designed to be scalable, with a focus on performance and ease of use.

### Key Technologies
- **Node.js**: JavaScript runtime used for building the server-side logic.
- **Express**: Web framework for building the API endpoints.
- **PostgreSQL**: Relational database to store and manage property, user, and booking data.
- **Sequelize**: ORM for managing database interactions.

For more detailed information on the back-end setup and installation, please refer to the [back-end README](./api/README.md).

---

## 🚀 Installation

### General Setup
To set up the full project, you'll need to install and configure both the front-end and back-end.

1. **Clone the repository**:
```bash
   git clone https://github.com/your-repo/etnair.git
   cd etnair
```
2. **Set up the back-end**:

- Navigate to the api/ directory.
```bash
    cd api
```
- Install dependencies:
```bash
    npm install
```
- Configure your database (see the back-end documentation for more details).
- Run the back-end server:
```bash
    npm run dev
```
4. **Set up the front-end**:

- Navigate to the client/ directory.
```bash
    cd client
```
- Install dependencies:
```bash
npm install
```
- Run the development server:
```bash
npm run dev
```
The front-end will be available at http://localhost:3000, and the back-end API at http://localhost:5000.

## 📚 Documentation
For detailed documentation, please refer to the individual README files for both the front-end and back-end:

- Front-End Documentation
- Back-End Documentation

## 🤝 Team Members
A special thanks to the talented team behind this project 🎉:

- Eliot Modeste
- Maël Aguessy
- Fatima-Zora Ayad
- Joey Bervin

## 📜 License
⚠️ This project is not currently licensed. For sharing or modifying the code, please contact the team to clarify usage rights.

✨ Thank you for exploring ETNAir. We hope this project offers both a great user experience and a valuable learning opportunity! 💻```