function validateInput(element) {
    if (element.value.trim() === "") {
        element.classList.remove("valid");
        element.classList.add("invalid");
    } else {
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
}

function resetInput(element) {
    element.classList.remove("invalid", "valid");
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    
    if (name.trim() === "" || email.trim() === "" || gender.trim() === "") {
        alert("Please fill in all the fields.");
        return;
    }

    const output = document.getElementById("output");
    output.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Gender: ${gender}</p>`;
}

function resetForm() {
    const output = document.getElementById("output");
    output.innerHTML = "";
}