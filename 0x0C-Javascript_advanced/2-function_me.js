function welcomeMessage(fullName) {
    return function() { alert('Welcome ' + fullName); }
}
var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('alex');
var fred = welcomeMessage('fred');