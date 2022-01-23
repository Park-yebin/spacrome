const title = document.querySelector("h1");
const welcomeIn = document.querySelector("#login");
const nameInput = welcomeIn.querySelector("input");
const announce = document.querySelector("#announce");
const topLine = document.querySelector(".top");
const main = document.querySelector(".main");
const topGeo = document.querySelector(".geo-zone");
const loginEmoji = document.querySelector(".login-emoji");
const HIDE = "hidden";

function showAnnounce(user){
    topLine.classList.add("top-bar");
    topLine.classList.remove("top");
    announce.innerText = `Hello ${user}`;
    const topEmoji = document.createElement("div");
    announce.appendChild(topEmoji);
    topEmoji.setAttribute("class","fas fa-rocket");
    announce.classList.remove(HIDE);
    main.classList.remove(HIDE);
    topGeo.classList.remove(HIDE);

}

function needLogin(event){
    event.preventDefault();
    title.classList.add(HIDE);
    welcomeIn.classList.add(HIDE);
    loginEmoji.classList.add(HIDE);
    localStorage.setItem("USER", nameInput.value);
    showAnnounce(nameInput.value);
}

const saveUser = localStorage.getItem("USER");

if (saveUser === null){
    welcomeIn.classList.remove(HIDE);
    title.classList.remove(HIDE);
    loginEmoji.classList.remove(HIDE);
    welcomeIn.addEventListener("submit", needLogin);
}else{
    showAnnounce(saveUser);
}