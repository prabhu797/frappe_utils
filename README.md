# 🚀 frappe_utils  

A collection of small but powerful **Frappe/ERPNext utilities** that simplify everyday workflows, authentication checks, and frontend logic.  

This repo is meant to serve as a **utility library** for developers working with Frappe Framework. Instead of rewriting boilerplate code, you can reuse these snippets directly in your Frappe apps and web pages.  

---

## 📦 Installation & Usage  

You don’t need to clone this repo into your app.  
Each utility can be loaded directly in **Frappe web pages** (Desk or Website) using **jsDelivr CDN**:  

```javascript
await frappe.require(
    "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@main/<path-to-file>.js",
    () => {
        // Use the exposed function
    }
);
```

> ⚡ **Tip:** For production stability, always pin to a release tag instead of `main`. Example:  
> ```javascript
> "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@v1.0.0/validateUser/checkAuth.js"
> ```

---

## 🔐 Example Utility: `checkAuth.js`  

`checkAuth.js` provides a simple way to verify if a user is logged in.  
If the user is a **Guest**, it shows a login prompt with redirect.  
Once logged in, the prompt automatically disappears.  

### Usage  

```javascript
await frappe.require(
    "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@main/validateUser/checkAuth.js",
    () => {
        validateUser = checkUserLoggedIn;
    }
);

if (!validateUser()) return; // stops further logic if user is not logged in
```

### Example in a Web Page  

```html
<script>
(async () => {
    await frappe.require(
        "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@main/validateUser/checkAuth.js",
        () => {
            validateUser = checkUserLoggedIn;
        }
    );

    if (!validateUser()) return;

    console.log("✅ User is logged in, continue...");
})();
</script>
```

---

## 📖 How It Works  

1. Loads the script dynamically via `frappe.require`.  
2. Exposes `checkUserLoggedIn()` → assigned to `validateUser`.  
3. Checks login state:  
   - **Guest** → shows alert with login button.  
   - **Logged in** → returns `true`.  
4. Auto-reverts once session changes (alert disappears after login).  

---

## 📂 Repo Structure  

```
frappe_utils/
│── validateUser/
│   └── checkAuth.js      # Utility to validate if user is logged in
│── more_utils/           # Add future utilities here
│── README.md             # Documentation
```

---

## ⚡ Best Practices  

- ✅ Pin to version tags in production (`@v1.0.0`) instead of `main`.  
- ✅ Keep each utility **self-contained** for easy use.  
- ✅ Document every utility with **usage example** inside this README.  
- ✅ Organize related utilities into folders (`auth`, `forms`, `ui`, etc.).  

---

## 🛠️ Roadmap  

- [ ] Add utilities for **form validation**.  
- [ ] Add utilities for **toast/notification wrappers**.  
- [ ] Add utilities for **route guards in Desk/Web pages**.  
- [ ] Community suggestions welcome 🚀  

---

## 🤝 Contributing  

PRs are welcome! Please follow the existing folder structure and add documentation + examples in the README.  

---

## 📜 License  

MIT License – feel free to use in your Frappe/ERPNext projects.  