const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.element.email.value.trim();
    const password = form.element.password.value.trim();

    if (email === "" || pasword === "") {
        alert("All form fields must be filled in");
        return;
    }
    
    const formData = {
        email,
        password,
    };

    console.log(formData);
    form.reset();
});

