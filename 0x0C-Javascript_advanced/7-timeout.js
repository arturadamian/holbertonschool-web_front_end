console.log('Start of the execution queue')
setTimeout(function() {
    console.log('Final code to be executed');
});
for(let i=1; i < 101; i++) console.log(i);
console.log("End of the loop printing")