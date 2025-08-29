function checkUserLoggedIn() {
    const currentUser = frappe.session.user;
    const currentPath = window.location.pathname.replace(/^\//, ''); // remove leading slash

    if (currentUser.toLowerCase() === "guest") {
        frappe.msgprint({
            title: __('Not Logged In'),
            indicator: 'red',
            message: __(`
                You are not logged in. Please log in to continue.
                <br><br>
                <a href="/login?redirect-to=${encodeURIComponent(currentPath)}">
                    <button class="btn btn-primary">Login</button>
                </a>`)
        });

        return false;
    }

    return true;
}
