document.title = "DOM DOM 🏎️";

document.getElementById("header").style.border = "1px solid red";

const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";

const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = "#bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "10px";
addButon.style.padding = "0.6rem";

addButon.value = "SAVE";

const h1 = document.getElementById("heading1");
console.log(h1);

h1.textContent = "DOM Introduction";

console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

const myInputs = document.getElementsByTagName("input");
console.log(myInputs);

console.log("Size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

console.log(myInputs.item(1));

const myLists = document.getElementsByTagName("li");
const myListsArr = [...myLists];
console.log(myListsArr);

myListsArr.forEach((li) => (li.style.color = "red"));

const myListsArr1 = Array.from(myLists);
console.log(myListsArr1);
myListsArr1.map((li) => (li.style.listStyleType = "none"));

const lists = document.getElementsByClassName("list");

const listArr = [...lists];
listArr.forEach((li) => console.log(li));

lists[2].innerHTML = "Javascript language";
lists[2].innerHTML = `<h1>Javascript</h1>`;
lists[3].innerText = `<h1>React</h1>`;
lists[4].textContent = `<h1>VUE</h1>`;
