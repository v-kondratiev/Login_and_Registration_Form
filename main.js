
let pwShowHide = document.querySelectorAll(".showHidePw");
let pwFields = document.querySelectorAll(".password");

///////Show/Hide password and change icon/////

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(eyeIcon => {
                    pwShowHide.classList.replace("uil-eye-slash", "uil uil-eye");
                })

            } else {
                pwField.type = "password";
            }

        })

    })

})
