# 🚀 React Learning from Scratch

Welcome to my personal React learning repository!  
This repo documents my journey as I learn React step by step — practicing core concepts, building mini projects, and understanding the fundamentals deeply.

---

## 📁 Folder Structure

### `01-Basics/`
In this folder, I practiced:

-  **Conditional Rendering** – using `if`/`else`, logical operators and ternary operators to display different UI.
-  **Props** – passing, destructuring and using props to build reusable components.
-  **Event Handlers** – handling events like `onClick`, `onMouseMove`, `onCopy`, and understanding why we use callback functions in JSX.

Each file contains simple, focused examples to reinforce the concepts.

---

### `02-State_and_hooks/`
This folder focuses on:

-  **State Management with `useState`** – learning how to declare, update, and use state in functional components.
-  **Controlled Inputs** – binding input values to state and handling user input changes.
-  **useEffect Hook** – Use `useEffect` with an empty dependency array (`[]`) to perform actions like fetching API data only once when the component loads.
-  **Mini Projects** – like a simple name input app that remembers user input even after a page refresh!

These examples helped me understand how React handles data internally and reactively updates the UI.

---

### `03-portal_and_key/`
This folder includes:

- **React Portals** – rendering child components outside the main DOM hierarchy while preserving React's event system. Used in scenarios like modals and tooltips.
- **Keys in Lists** – learning why keys are essential for list rendering performance and how to use them effectively to prevent unwanted re-renders.

These concepts are critical for building scalable and efficient UIs.


---

### `04-PropDrilling_and_ContextAPI/`
This folder covers:

- **Prop Drilling** – understanding the limitations of passing props through multiple component layers and how it can make the code harder to manage.
- **Context API** – using `createContext` and `useContext` to share state globally without prop drilling.
- **Global State Management** – creating a `UserContext` with `useState` and sharing both data and update functions across components.

This was a major step forward in understanding how to manage shared state in larger React applications more effectively.

---

### `05-useReducer/`
This folder cover:

- **useReducer Hook** – using `useReducer` to manage complex state changes and side effects
- **Action Types and Reducers** – defining action types and reducers to handle state updates in
a predictable way

---

### `06-CustomHooks/`
This folder includes:

- **Creating Reusable Hooks** – Learned to extract repeated logic from components into custom hooks for better code organization.
- **useFetch Hook** – Abstracted data-fetching logic using `useEffect` and `useState`, returning loading, error, and data states for flexible API consumption.

Making custom hooks made my components cleaner and taught me how to write logic that's portable and scalable across projects.

---

### `07-projects/`
This folder contains mini projects built using the concepts learned:

#### 📌 `01-counter/`
- A simple counter app using `useState`
- Includes buttons to increase and decrease count
- Great for understanding how React state updates work in real-time

#### 📌 `02-todo-basic/`
- A basic todo list without localStorage
- Add and remove tasks
- Reinforces array state manipulation and rendering lists using `.map()`

#### 📌 `03-meals-api/`
- Fetches and displays meals from an external API using `useEffect`
- Showcases use of API calls, loading data on component mount, and dynamic list rendering with images

#### 📌 `04-Calculator/`
- A modern calculator built with `useState`
- Supports basic arithmetic operations (+, -, ×, ÷)
- Great for practicing input handling, dynamic UI updates, and evaluating expressions

#### 📌 `04-ToggleBgColor/`
- A simple background color toggle component using `useState`
- Switches between light and dark modes (background, text, and button color)
- Great for understanding state toggling, inline styling, and event handling in React

---

## 💡 Why This Repo?

- To track my daily progress and learning.
- To revisit examples and concepts later.
- To build a solid foundation before diving into advanced topics.

---


## 📌 Stay Tuned!

If you're also learning React, feel free to fork this repo or use it as a reference.  
Let’s build in public and grow together! 🚀

---

### 📬 Connect with me

- Twitter: [@simranncodes](https://x.com/simranncodes)
- LinkedIn: [@simran](https://www.linkedin.com/in/simran-ba0595315/)

---

**Thanks for visiting! 🙌**
