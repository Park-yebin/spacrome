const welcomeIn = document.querySelector("#login");
const nameInput = welcomeIn.querySelector("input");
const announce = document.querySelector("#announce");
const HIDE = "hidden";

function needLogin(event){
    event.preventDefault();
    welcomeIn.classList.add(HIDE);
    localStorage.setItem("USER", nameInput.value);
    showAnnounce(user);
}

function showAnnounce(user){
    announce.innerText = `Welcome ${user}`;
    announce.classList.remove(HIDE);
}

const saveUser = localStorage.getItem("USER");

if (saveUser === null){
    welcomeIn.classList.remove(HIDE);
    welcomeIn.addEventListener("submit", needLogin);
}else{
    showAnnounce(saveUser);
}