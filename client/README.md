# 🏡 ETNAir Front-End

Welcome to the **ETNAir** Front-End! This is the client-side of the project, a modern, responsive interface for interacting with the ETNAir platform. The front-end allows tenants to search for properties, book them, and browse the listings, while hosts can publish and manage their rental properties.

---

## 📝 Table of Contents
- [🌟 Introduction](#-introduction)
- [✨ Key Features](#-key-features)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🔧 Configuration](#-configuration)
- [📚 Documentation](#-documentation)
- [🤝 Team Members](#-team-members)
- [📜 License](#-license)

---

## 🌟 Introduction

ETNAir Front-End is built using **React** for the user interface, **Redux** for state management, and **Vite** as the build tool. The goal is to provide an intuitive and responsive experience for both tenants and hosts interacting with the ETNAir platform.

### 🎯 Objectives
- **Responsive design** for smooth navigation across all devices.
- **Seamless integration** with the backend API to display real-time data.
- **State management** using Redux to handle application state efficiently.
- **Optimized build and development** experience with Vite.

### 🚀 Challenge
This front-end project is designed to work with the ETNAir back-end, providing users with an engaging and user-friendly interface. The challenge is to ensure smooth integration, performance, and responsiveness.

---

## ✨ Key Features

### 👥 User-Facing
- 🔍 **Search** and filter properties by various criteria (location, price, amenities).
- 🏠 **Publish listings** as a host.
- 📅 **Book properties** as a tenant with a smooth checkout process.
- 🏞️ **Property details page** for tenants to view detailed information about properties.

### 📊 State Management
- ⚙️ **Redux Toolkit** for managing state across the app.
- 🌍 **React Router** for smooth page navigation without full page reloads.

### 🛠️ Technical
- 🖥️ **React** for the user interface.
- 🛠️ **Vite** for faster builds and a modern development experience.
- 🌐 **React-Redux** for global state management.
- ✨ **Styled Components** for styling React components.

---

## ⚙️ Installation

### Prerequisites
- **Node.js** (version 16 or higher)
- **Vite** (for development server and build tools)
- **React** (and associated libraries)

### Installation Steps
1. Clone the repository:
```bash
   git clone https://github.com/your-repo/etnair-client.git
   cd client
   npm install
```
2. Run the development server:
```bash
  npm run dev
```
This will start the Vite development server and the application will be available at http://localhost:3000.

### 🚀 Usage
### Development Mode
To run the development server:

```bash
  npm run dev
```
This command will start the development server and open the application in your browser. Any changes made to the source code will automatically be reflected in the browser.

### Production Build
To build the project for production:

```bash
  npm run build
```
This will generate the production-ready files in the dist/ folder. You can preview the build using:

```bash
  npm run preview
```
## 🔧 Configuration
### Environment Variables
Here are some of the key environment variables you may need to set in your .env file:

```bash
  VITE_API_URL=http://localhost:3000/api  # URL of the back-end API
  VITE_CLIENT_URL=http://localhost:5000  # URL for the client application
```
Ensure you replace the URLs with the correct paths based on your setup, especially when moving to production.

## 📚 Documentation
For more information on how to use the ETNAir Front-End, including detailed API documentation, please refer to the back-end documentation, as the front-end interacts heavily with the ETNAir API.

## 🤝 Team Members
A special thanks to the talented team behind this project 🎉:

- Eliot Modeste
- Maël Aguessy
- Fatima-Zora Ayad
- Joey Bervin

## 📜 License
⚠️ This project is not currently licensed. For sharing or modifying the code, please contact the team to clarify usage rights.

✨ Thank you for exploring ETNAir. We hope this project inspires and offers a great learning opportunity! 💻