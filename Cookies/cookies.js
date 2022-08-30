var cookiesContent = 'Start: ' + document.cookie + '<br>';
document.cookie = 'Author=George Cooke';
cookiesContent += 'After setting Author: ' + document.cookie + '<br>';
document.cookie = 'School=Broward College';
cookiesContent += 'After setting School: ' + document.cookie + '<br>';

var currentDate = new Date();
var futureDate = new Date(currentDate.getFullYear()+1,currentDate.getMonth(),currentDate.getDate());
document.cookie = 'Program=AS Software Development;expires=' + futureDate;
cookiesContent += 'After setting Program: ' + document.cookie + '<br>';

var expiredDate = new Date(currentDate.getFullYear()-1,currentDate.getMonth(),currentDate.getDate());
document.cookie = 'School=;expires=' + expiredDate;
cookiesContent += 'After deleting School: ' + document.cookie + '<br>';


document.write(cookiesContent);