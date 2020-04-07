let globalVafiable = 'Welcome';
function outer() {
    alert(globalVafiable);
    let course = 'Holberton';
    function inner() {
        alert(globalVafiable + ' ' + course);
        let exclamation = '!';
        function inception() {
            alert(globalVafiable + ' ' + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();