var theMessage = prompt('Enter message','<table border="1"><tr><td>Jello</td></tr></table>');
var encodedMessage = encodeURIComponent(theMessage);

document.write('   Original: ' + theMessage + '<br>');
document.write('URI Encoded: ' + encodedMessage + '<br>');

var decodedMessage = decodeURIComponent(encodedMessage);
document.write('URI Decoded: ' + decodedMessage + '<br>');