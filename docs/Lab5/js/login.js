/**
 * login.js
 * @author Hridaya Kandel
 * @since 09-11-2022 

 */

"use strict;"
window.onload = function () {

    const loginForm = document.getElementById('nameform');

    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const websiteURL = document.getElementById("websiteURL");
        const checkbox = document.getElementById("checkbox");

        console.log(checkbox);
        console.log(`Email : ${email.value}`);
        console.log(`Password : ${password.value}`);
        console.log(`Website URL : ${websiteURL.value}`);
        console.log(`Checkbox : ${checkbox.value}`);

        document.getElementById("displayEmail").innerText = `Email : ${email.value}`;
        document.getElementById("displayEmail").style.color = "blue";
        document.getElementById("displayPaswd").innerText = `Password : ${password.value}`;
        document.getElementById("displayPaswd").className = 'pasWord';
        document.getElementById("displayURL").innerText = `Website URL : ${websiteURL.value}`;
        const displayURL = document.getElementById('displayURL');
        displayURL.innerText =

            email.value = "";
        password.value = "";
        websiteURL.value = "";
        checkbox.value = "";
    }

}
