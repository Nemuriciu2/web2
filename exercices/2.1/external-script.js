const dateTimeNow = new Date();

function addDateTime(message){
    if(message == null){
        message = "";
    }
    return dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + message;
}

alert(addDateTime(" : This is the best moment to have a look at this website !"));

console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15