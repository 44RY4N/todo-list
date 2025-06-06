# 📝 To-Do List App

A modular, scalable, and beautifully animated task management web app. Built using vanilla JavaScript with SOLID principles, this project supports persistent data storage and full edge-case handling for user interactions.

## 🚀 Features

- 📁 **Project Management**: Create, delete, and switch between multiple task projects.
- ✅ **Task Handling**: Add, complete, and remove tasks inside any project.
- 💾 **Local Storage Support**: All your projects and tasks are saved — even after a page reload.
- 🧠 **Smart Edge Case Handling**:
  - Auto-redirects when active project is deleted.
  - Prevents accidental UI state breakage.
  - Clean fallback behavior on empty states.
- 🧱 **Modular Code Architecture**:
  - Organized into multiple JS modules like `addProject.js`, `taskLogic.js`, `localStore.js`, `renderPage.js`, etc.
  - Easily extensible for features like due dates, priority tags, or calendar views.
- 🎨 **Responsive UI**:
  - Clean layout with smooth transitions.
  - Visual feedback for project switching and deletions.
- ✨ **Polished UX**:
  - Subtle animations and hover effects.
  - Clear button states and feedback.

## 🛠️ Tech Stack

- HTML5, CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Local Storage API
- CSS Transitions & Animations

## 🔩 Code Highlights

- SOLID principles followed across modules.
- Clean state management using project arrays.
- Resilient against corner cases like:
  - Deleting the only project
  - Reloading with corrupted/empty storage
- Thoughtfully separated UI and logic layers.

## 🧪 Live Preview

👉 [Try it live!](https://44RY4N.github.io/todo-list/)


## 📌 Notable Design Decisions

- Used single source of truth for active project.
- DOM updates dynamically on any state change.
- Module imports used for clean functionality flow.


## 👨‍💻 Author

- **Aaryan** ([@44RY4N](https://github.com/44RY4N))
- B.Tech CSE, IIITG  
- Skilled in HTML, CSS, JS, Algorithms, DOM, Git, and Web UI/UX

---



