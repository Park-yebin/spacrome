const write = document.querySelector("#write input");
const submit = document.querySelector("#write");
const lists = document.querySelector("#lists");
let writtenList = [];
const LIST_NAME = "To do things";

function saveList(){
    localStorage.setItem(LIST_NAME, JSON.stringify(writtenList));
}

function deleteList(event){
    const list = event.target.parentElement;
    list.remove();
    writtenList = writtenList.filter((deleteId) => deleteId.id !== parseInt(list.id));
    saveList();
}

function addList(written){
    const list = document.createElement("li");
    list.id = written.id;
    const content = document.createElement("span");
    const listBtn = document.createElement("button");
    list.appendChild(content);
    list.appendChild(listBtn);
    content.innerText = "- "+written.text;
    listBtn.setAttribute("class", "fas fa-meteor fa-lg");
    listBtn.onclick = deleteList;
    lists.appendChild(list);

}

function submitList(event){
    event.preventDefault();
    const written = write.value;
    write.value = "";
    const objectList = {
        id: Date.now(),
        text: written
    };
    writtenList.push(objectList);
    addList(objectList);
    saveList();
}

submit.addEventListener("submit", submitList);

const getList = localStorage.getItem(LIST_NAME);

if(getList !== null){
    const setList = JSON.parse(getList);
    writtenList = setList;
    setList.forEach(addList);
}