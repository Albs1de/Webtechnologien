"use strict";
function check_checkbox(terms) {
let elm = document.getElementById("submit_button");
elm.disabled=terms.checked ? false: true;
if (!elm.disabled) {
    elm.focus();
}
}

function validate() {

    var x = document.getElementById("passwort");
    var y = document.getElementById("re-passwort");

    if(x.value == y.value) {
        return;
    } else window.confirm("Die Passwörter sind leider nicht gleich");
}