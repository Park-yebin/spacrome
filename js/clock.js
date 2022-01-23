const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function getTime(){
    const today = new Date();
    const months = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2, "0");

    clock.innerText = `${hour}:${minute}`;
    date.innerText = `${month}. ${day}, ${year}`;
}
getTime();
setInterval(getTime,1000);


