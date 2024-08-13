function validateform() {
    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const dept = document.getElementById("dept").value;
    const agree = document.getElementById("check").checked;

    const nameError = document.getElementById("name-error");

    const regnoError = document.getElementById(
        "regno-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const mobileError = document.getElementById(
        "mobile-error"
    );
    const deptError = document.getElementById(
        "dept-error"
    );
    const agreeError = document.getElementById(
        "check-error"
    );

    nameError.textContent = "";
    regnoError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    deptError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (regno === "" || !/\d{12}/.test(regno)) {
        regnoError.textContent =
            `Please enter your valid regno.your Entered Length${regno.length}`;
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (mobile === "" || !/\d{10}/.test(mobile)) {
        mobileError.textContent =
            `Please enter a mobile with at  10 characters. But u Entered ${mobile.length}`;
        isValid = false;
    }

    if (dept === "") {
        deptError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}



// function validateForm() {
//     const name = document.getElementById("name").value;
//     const address = document.getElementById("address").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const subject = document.getElementById("subject").value;
//     const agree = document.getElementById("agree").checked;
//     const nameError = document.getElementById("name-error");
    
//     const addressError = document.getElementById(
//         "address-error"
//     );
//     const emailError = document.getElementById(
//         "email-error"
//     );
//     const passwordError = document.getElementById(
//         "password-error"
//     );
//     const subjectError = document.getElementById(
//         "subject-error"
//     );
//     const agreeError = document.getElementById(
//         "agree-error"
//     );

//     nameError.textContent = "";
//     addressError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";
//     subjectError.textContent = "";
//     agreeError.textContent = "";

//     let isValid = true;

//     if (name === "" || /\d/.test(name)) {
//         nameError.textContent =
//             "Please enter your name properly.";
//         isValid = false;
//     }

//     if (address === "") {
//         addressError.textContent =
//             "Please enter your address.";
//         isValid = false;
//     }

//     if (email === "" || !email.includes("@")) {
//         emailError.textContent =
//             "Please enter a valid email address.";
//         isValid = false;
//     }

//     if (password === "" || password.length < 6) {
//         passwordError.textContent =
//             "Please enter a password with at least 6 characters.";
//         isValid = false;
//     }

//     if (subject === "") {
//         subjectError.textContent =
//             "Please select your course.";
//         isValid = false;
//     }

//     if (!agree) {
//         agreeError.textContent =
//             "Please agree to the above information.";
//         isValid = false;
//     }

//     return isValid;
// }