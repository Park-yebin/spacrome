const imgs = ["img1.PNG","img2.PNG","img3.PNG","img4.PNG","img5.PNG","img6.PNG","img7.PNG","img8.PNG"];
const chosenImg = imgs[Math.floor(Math.random()*imgs.length)];
const screenImg = document.createElement("img");

screenImg.src = `img/${chosenImg}`;
document.body.appendChild(screenImg);