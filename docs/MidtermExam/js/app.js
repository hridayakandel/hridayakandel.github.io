/**
 * app.jas
 * @hridaya
 * @since 12-Nov-2022
 */
"use strict";
// console.log("test");
window.onload = function () {
    const courseRegForm = document.getElementById("courseRegForm");
    courseRegForm.onsubmit = function (event) {
        event.preventDefault();
        const fName = document.getElementById('fName');
        const mName = document.getElementById('mName');
        const lName = document.getElementById('lName');
        const address = document.getElementById('address');
        const bio = document.getElementById('bio');
        const levelStudy = courseRegForm.elements["radio"];
        const aId = document.getElementById('aId');
        const course = document.getElementById('course')


        const txtfName = fName.value;
        const txtmName = mName.value;
        const txtlName = lName.value;
        const txtaddress = address.value;
        const txtbio = bio.value;
        const txtlevelStudy = levelStudy.value;
        const txtaId = aId.value;
        const txtcourse = course.value;

        const result = `
        Level of Study : ${txtlevelStudy}
        Applicant Full Name: ${txtfName} ${txtmName} ${txtlName}
        Address:${txtaddress}
        Bio: ${txtbio}
        Applicant Id Number : ${txtaId}
        Course: ${txtcourse}
        `;
        alert(result);

        fName.value = "";
        mName.value = "";
        lName.value = "";
        address.value = "";
        bio.value = "";
        levelStudy.value = "";
        aId.value = "";
        course.value = "";
    };
};


