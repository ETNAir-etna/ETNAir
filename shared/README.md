# @ETNAir-etna/shared 🚀

Shared library for **API** and **Client** in the ETNAir project. This package contains reusable **types**, **DTOs**, and other utilities to maintain consistency and reduce redundancy across different parts of the project. 🎯

---

## 📦 Installation

To install the package, make sure you have access to the private GitHub registry:

```bash
    npm install @etnair-etna/shared
```

## 🔧 Usage
Import the required modules into your project:

```typescript
    // Importing a type
    import { User } from "@etnair-etna/shared/";

    // Importing a DTO
    import { CreateUserDTO } from "@etnair-etna/shared";
```
## 🛠️ Development Workflow
1. Install Dependencies
Run the following command to install the necessary dependencies:

```bash
    npm install
```
2. Build the Project 🏗️
Use the build script to compile the TypeScript code:

```bash
    npm run build
```
3. Publish the Package 🌍
Ensure your **.env** file contains the required **NPM_TOKEN**. Then, publish the package using:

```bash
    npm run publish:shared
```
Note: The .npmrc file in this repository points to the private GitHub registry.

## 📂 File Structure
Here's an overview of the file structure:

```plaintext
    shared/
    ├── src/
    │   ├── dto/             # Data Transfer Objects
    │   ├── types/           # Shared types and interfaces
    │   └── index.ts         # Entry point
    ├── dist/                # Compiled output (generated)
    ├── .env                 # Environment variables
    ├── .npmrc               # Registry configuration
    └── package.json         # Project metadata
```
## 🌟 Features

**Centralized Types & DTOs:** Define all shared data structures in one place. 📋
**Consistency:** Avoid duplication between client and server. 🔄
**TypeScript Support:** Fully typed for a better developer experience. 🛡️

## 🚀 Publishing Guidelines

Ensure you are logged in to the GitHub package registry:
```bash
    npm login --registry=https://npm.pkg.github.com/
```
Update the version in package.json following semantic versioning (e.g., 1.0.1).

Publish the package:
```bash
npm run publish:shared
```
## 📜 License
This package is licensed under the ISC License.

## 🧑‍💻 Contributors
Thanks to everyone who contributes to this project! 🤝
Feel free to suggest improvements, report bugs, or create pull requests. 🚧

## ❓ Questions
If you encounter any issues or have questions, feel free to open an issue or contact the repository owner. ✉️
