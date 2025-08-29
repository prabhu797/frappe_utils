# 🔐 checkAuth.js – User Authentication Utility for Frappe Web Pages

This utility provides a simple way to check if a user is logged in on a Frappe web page.  
If the user is a **Guest**, it shows a login prompt. Once the user logs in, the message disappears automatically.  

---

## 📦 Installation (via jsDelivr)

Instead of using raw GitHub files, we load the script from a **CDN** for better performance and correct headers.  

Add the following inside your web page (Jinja template, custom HTML field, or web form script):  

```javascript
await frappe.require(
    "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@main/validateUser/checkAuth.js",
    () => {
        validateUser = checkUserLoggedIn;
    }
);
```

---

## 🚀 Usage

Once loaded, call the function to check if a user is logged in:  

```javascript
if (!validateUser()) return;
```

- If the user is logged in → returns `true`, and your page logic continues.  
- If the user is a **Guest** → displays an alert with a **Login** button and returns `false`.  

---

## 🧑‍💻 Example: Protecting a Custom Web Page

```html
<script>
(async () => {
    // Load the script from jsDelivr
    await frappe.require(
        "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@main/validateUser/checkAuth.js",
        () => {
            validateUser = checkUserLoggedIn;
        }
    );

    // Run login check
    if (!validateUser()) return;

    // Your secure page logic here
    console.log("User is logged in, continue...");
})();
</script>
```

---

## 📖 How It Works

1. **Load script dynamically** → Using `frappe.require`, the JS file is fetched only when needed.  
2. **Expose function** → The `checkUserLoggedIn` function is assigned to a local variable `validateUser`.  
3. **Check login state**  
   - If `frappe.session.user` is `"Guest"` → shows a login dialog with redirect.  
   - If logged in → returns `true`.  
4. **Auto revert** → If the login state changes from `"Guest"` to a valid user, the alert is automatically hidden.  

---

## ⚡ Best Practices

- **Pin version instead of `main`**  
  ```javascript
  "https://cdn.jsdelivr.net/gh/prabhu797/frappe_utils@v1.0.0/validateUser/checkAuth.js"
  ```
  This ensures stability even if new changes are pushed.  

- **Global usage**  
  If you want to enforce login checks across multiple pages, consider including this script in your Frappe app’s `website_context` or base web template.  