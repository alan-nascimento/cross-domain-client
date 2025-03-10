# Brazil Internet History Website

## Overview

This project is a dynamic and responsive website that explores the **history and impact of the internet in Brazil**. It uses **JSON data**, **Handlebars.js**, and **Web Components** to deliver structured and accessible content.

## Features

- **Dynamic Content Rendering**: Data-driven pages using `data.json` and Handlebars templates.
- **Web Components**: Modular and reusable **custom header** for consistency.
- **Accessibility Improvements**: Enhanced contrast, keyboard navigation, and WCAG compliance.
- **Responsive Design**: Mobile-friendly layouts with flexible images and text scaling.
- **Structured Data**: Events, descriptions, media, and sources managed via JSON.

## Installation & Running the Application

Since modern browsers block `fetch()` calls to local JSON files due to CORS restrictions, you need to run a local server.

### **Option 1: Using Python (Recommended)**

1. Open a terminal in the project folder.
2. Run the following command:
   - **For Python 3:**
     ```sh
     python3 -m http.server 5500
     ```
   - **For Python 2:**
     ```sh
     python -m SimpleHTTPServer 5500
     ```
3. Open your browser and go to:
   ```
   http://localhost:5500/index.html
   ```

### **Option 2: Using Node.js (`http-server`)**

1. Install `http-server` globally:
   ```sh
   npm install -g http-server
   ```
2. Start the server in your project folder:
   ```sh
   http-server -p 5500
   ```
3. Open your browser at:
   ```
   http://localhost:5500/index.html
   ```

### **Option 3: Using VS Code Live Server**

1. Install **Live Server** extension in **VS Code**.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The browser will open at `http://127.0.0.1:5500/` and load the application.

## How It Works

1. **JSON Data Handling**: The website fetches structured content from `data.json`.
2. **Handlebars Templates**: The templates dynamically render data into HTML.
3. **Web Components**: `header.js` defines a reusable navigation bar.
4. **CSS Enhancements**: Uses CSS variables, `rem` units, and flexbox for a modern layout.

## Accessibility & Performance

- **Lighthouse-tested**: Contrast, readability, and navigation improvements.
- **Keyboard Support**: Users can navigate interactive elements via keyboard.
- **Responsive Media**: Images scale properly across devices.

## Future Improvements

- Add **search functionality** for historical events.
- Implement **animations** for better engagement.
- Expand content with **interactive elements and quizzes**.

## License

This project is licensed under the **MIT License**.

---

**Contributor:** Alan Nascimento
