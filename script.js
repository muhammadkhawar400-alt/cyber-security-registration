const form = document.getElementById("registrationForm");

// Yahan baad mein Google Apps Script ka Web App URL paste hoga
const scriptURL = "PASTE_YOUR_WEB_APP_URL_HERE";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        education: document.getElementById("education").value,
        course: document.getElementById("course").value
    };

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("✅ Registration Successful!");
            form.reset();
        } else {
            alert("❌ Something went wrong.");
        }

    } catch (error) {
        alert("❌ Network Error");
    }
});