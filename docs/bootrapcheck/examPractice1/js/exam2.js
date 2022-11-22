/**
 * exam1.jas
 */
console.log("test");
window.onload = function () {
    const censusForm = document.getElementById("censusForm");
    censusForm.onsubmit = function (event) {
        event.preventDefault();
        const patientId = document.getElementById('patientId');
        const fName = document.getElementById('fName');
        const mName = document.getElementById('mName');
        const lName = document.getElementById('lName');
        const dob = document.getElementById('dob');
        const department = document.getElementById('department')
        const patientOut = censusForm.elements["radio"];

        const txtpatientId = patientId.value
        const txtfName = fName.value;
        const txtmName = mName.value;
        const txtlName = lName.value;
        const txtdob = dob.value;
        const txtdepartment = department.value;
        const txtpatientOut = patientOut.value;


        result = `
        Patient Id : ${txtpatientId}
        First Name : ${txtfName}
        Middle initial(s): ${txtmName}
        Last Name: ${txtlName}
        Date of Birth:${txtdob}
        Department:${txtdepartment}
        Is Patient Out: ${txtpatientOut}
        `;
        alert(result);

        patientId.value = "";
        fName.value = "";
        mName.value = "";
        lName.value = "";
        dob.value = "";
        dob.department = "";
        dob.patientOut = "";
    };
};


