# 🧠 Dynamic Page Title App (React + Vite)

This project demonstrates how to use **React Hooks** — specifically `useState` and `useEffect` — to dynamically update the **browser tab title** based on user input in real time.

---

## 🚀 Features

- 📝 Updates the document (tab) title as you type your name  
- 🎨 Simple and clean user interface  
- ⚡ Built with **React + Vite** for fast development  
- 🪄 Demonstrates the concept of **side effects** using `useEffect`

---

## 🧩 Project Flow / Logic

1. **Initialize State**  
   - The `name` state is declared using `useState("")`.

2. **Handle Input Changes**  
   - When the user types in the input field, `setName()` updates the `name` value.

3. **Update Page Title Dynamically**  
   - `useEffect()` listens for changes in `name` and updates the browser tab title:
     ```js
     useEffect(() => {
       document.title = name ? `Hello ${name}` : 'Please enter your name'
     }, [name])
     ```

4. **Dependency Array `[name]`**  
   - Ensures the effect runs **only** when `name` changes.

---

## 🧰 Technologies Used

- ⚛️ **React 18+**
- ⚡ **Vite**
- 💅 **CSS** for basic styling

---

## 📂 Project Setup

```bash
# Clone the repository
git clone https://github.com/<yourusername>/DynamicPageTitle.git

# Navigate to the project folder
cd DynamicPageTitle

# Install dependencies
npm install

# Start development server
npm run dev
