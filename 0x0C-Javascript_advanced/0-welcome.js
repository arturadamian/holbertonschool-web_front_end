function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    function displayFullName() {
       return alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}


