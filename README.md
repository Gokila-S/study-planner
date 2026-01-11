# Study Planner 📚

A professional, feature-rich study management application designed to help students and learners organize their academic tasks, track progress, and achieve their learning goals with ease.

## 🚀 Features

- **User Authentication:** Secure registration and login system.
- **Study Session Management:** Add and track study tasks with subject, topic, and duration.
- **Priority Labeling:** Organize tasks by priority (High, Medium, Low).
- **Session Persistence:** Automatically saves your study data to local storage.
- **Responsive UI:** Modern, clean, and fully responsive design built with Tailwind CSS.
- **Interactive Feedback:** Visual notifications for actions like login and task creation using SweetAlert2.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vite.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **State Management:** React Context API
- **Popups:** [SweetAlert2](https://sweetalert2.github.io/)

## 📁 Project Structure

```text
src/
├── components/   # Reusable UI components (Card, Header, Footer)
├── context/      # Context providers for Auth and Todo state
├── pages/        # Main application views (Login, Register, Dashboard)
├── services/     # Logic for authentication and data storage
├── layouts/      # Layout wrappers for consistent page structure
└── routes/       # Application routing and route protection
```

## 🚥 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mini-project-01
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
