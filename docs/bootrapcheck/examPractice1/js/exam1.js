/**
 * exam1.jas
 */
console.log("test");
window.onload = function () {
    const censusForm = document.getElementById("censusForm");
    censusForm.onsubmit = function (event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName');
        const cId = document.getElementById('cId');
        const ssn = document.getElementById('ssn');
        const state = document.getElementById('state');
        const radio = censusForm.elements["radio"];

        const txtFullName = fullName.value
        const txtcId = cId.value;
        const txtSsn = ssn.value;
        const txtstate = state.value;
        const txtradio = radio.value;

        result = `
        Citize Id : ${txtcId}
        SSN : ${txtSsn}
        Full Name: ${txtFullName}
        State: ${txtstate}
        Senior:${txtradio}
        `;
        alert(result);

        fullName.value = "";
        cId.value = "";
        ssn.value = "";
        state.value = "";
        radio.value = "";
    };
};