var cookiesContent = 'Start: ' + document.cookie + '<br>';

document.write(cookiesContent);
var cookieDetails = '<table><tr><th>Name</th><th>Value</th></tr>';
var cookieNames = ['clientemail', 'clientname'];
var allCookies = document.cookie;
var cookieArray = allCookies.split('; ');
for (let cookieCount = 0; cookieCount < cookieArray.length; cookieCount++) {
    let theCookie = cookieArray[cookieCount];
    let cookieInfo = theCookie.split('=');
    let foundCookie = false;
    for (let cookieCounter = 0; cookieCounter < cookieNames.length; cookieCounter++) {
        if (cookieInfo[0] == cookieNames[cookieCounter]) {
            foundCookie = true;
        }
    }
    if (foundCookie) {
        cookieDetails += '<tr><td>' + cookieInfo[0] + '</td><td>' + cookieInfo[1] + '</td></tr>';
    }
}

cookieDetails += '</table>'
document.write(cookieDetails);