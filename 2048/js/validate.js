function validateToken() {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    const now = Date.now();
    // For token to be valid, it needs to match this pattern
    const expectedToken = btoa(Math.floor(now / 1000).toString()); // valid for 1 second

    if (token !== expectedToken) {
        document.body.innerHTML = "<h2>Access denied. Invalid or expired token.</h2>";
        throw new Error("Invalid token");
    }
}
