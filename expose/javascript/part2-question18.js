function displayTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// You have to terminate by using the respective "kill"
// key combo of your console
// Ex: ctrl + C in git bash
const timeInterval = setInterval(displayTime, 1000);
