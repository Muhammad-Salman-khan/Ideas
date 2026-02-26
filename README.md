# 💡 Ideas - Modern Idea Management Platform

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Express](https://img.shields.io/badge/Express-4-black?logo=express)
![Firebase Admin](https://img.shields.io/badge/Firebase%20Admin-SDK-orange?logo=firebase)
![TanStack](https://img.shields.io/badge/TanStack-Router%20%26%20Query-red)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)

A high-performance, feature-rich web application for capturing, organizing, and sharing innovative ideas. Built with a modern **Express** backend and a cutting-edge frontend stack focusing on developer experience, scalability, and seamless user interactions.

---

## ✨ Key Features

- 🔐 **Secure Authentication**: Integrated Firebase Auth with **Firebase Admin SDK** for robust server-side validation and management.
- 🚀 **Full Idea Lifecycle**: Complete CRUD operations (Create, Read, Update, Delete) for managing your thoughts via a custom **Express API**.
- 🔍 **Global Search**: Command-box style search (`cmdk`) for lightning-fast navigation and discovery.
- 🎨 **Responsive Design**: Modern, mobile-first UI built with **Tailwind CSS 4** and **Shadcn UI**.
- 🌓 **Dynamic Theming**: Smooth Dark/Light mode transitions with persistent user preferences.
- ⚡ **Optimized Data Fetching**: Advanced caching and synchronization powered by **TanStack Query**.
- 🗺️ **Type-Safe Routing**: File-based routing with full TypeScript support via **TanStack Router**.
- 📝 **Robust Forms**: Type-safe form validation using **TanStack Form** and **Zod**.
- 🎬 **Fluid Animations**: Polished user experience with **Framer Motion** and **AnimeJS**.
- 📤 **File Integration**: Built-in support for file uploads and media handling.

---

## 🛠️ Tech Stack

### Frontend Core

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **State Management**: [TanStack Query](https://tanstack.com/query) & [TanStack Store](https://tanstack.com/store)

### UI & Styling

- **CSS Framework**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/) & [AnimeJS](https://animejs.com/)

### Backend & Services
- **Framework**: [Express.js](https://expressjs.com/) (Node.js)
- **BaaS**: [Firebase](https://firebase.google.com/) (Authentication & Firestore)
- **Firebase SDK**: [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- **API Client**: [Axios](https://axios-http.com/)

---

## 📂 Project Structure

```text
src/
├── Api/              # Data fetching utilities
├── components/       # Reusable UI components (Shadcn + Custom)
├── Contexts/         # React Contexts (Auth, Firebase, Theme)
├── hooks/            # Custom React hooks
├── integrations/     # Third-party service configurations
├── lib/              # Utility functions and shared logic
├── queryOptions/     # TanStack Query configurations
├── routes/           # TanStack File-based routes
├── schemas/          # Zod validation schemas
└── styles.css        # Global styles and Tailwind directives
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm (Recommended)

### 1. Installation

```bash
git clone https://github.com/your-username/ideas.git
cd ideas
pnpm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory and add your Firebase credentials:

```env
VITE_FIRE_BASE_API_KEY=your_api_key
VITE_FIRE_BASE_AUTH_DOMAIN=your_auth_domain
VITE_FIRE_BASE_PROJECT_ID=your_project_id
VITE_FIRE_BASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIRE_BASE_MESSAGING_SENDERID=your_sender_id
VITE_FIRE_BASE_APP_ID=your_app_id
VITE_FIRE_BASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Running Locally

Start the development server:

```bash
pnpm dev
```

(Optional) Run the mock API server:

```bash
pnpm json
```

---

## 🧪 Testing

This project uses **Vitest** for unit and integration testing.

```bash
# Run all tests
pnpm test

# Run tests in UI mode
pnpm test --ui
```

---

## 📦 Deployment

The project is configured for seamless deployment on **Vercel**.

```bash
pnpm build
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Created with ❤️ by the Ideas Team.
