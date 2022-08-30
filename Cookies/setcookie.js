var cookieName = 'clientname';
var cookieEmail = 'clientemail';
var currentDate = new Date();
var futureDate = new Date(currentDate.getFullYear()+1,currentDate.getMonth(),currentDate.getDate());

function setNameCookie() {
    var nameValue = document.getElementById(cookieName).value;
    var setCookie = cookieName + '=' + nameValue;
    setCookie += ';expires=' + futureDate.toUTCString();
    alert('Set to: ' + setCookie);
    document.cookie = setCookie;
}
function setEmailCookie() {
    var emailValue = document.getElementById(cookieEmail).value;
    var setCookie = cookieEmail + '=' + emailValue;
    setCookie += ';expires=' + futureDate.toUTCString();
    alert('Set to: ' + setCookie);
    document.cookie = setCookie;
}