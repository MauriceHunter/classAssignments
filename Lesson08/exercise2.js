const div = document.querySelector('ul#list');
console.log(div)
const div2 = document.querySelectorAll('li');
console.log(div2);
const name = div2[1];
name.textContent = 'Fair Trade Coffee';
console.log(name);
const rmv = div2[3].remove();
const cheeWhiz = document.createElement('li');
cheeWhiz.textContent = "Cheese Whiz";
const addCw = div.appendChild(cheeWhiz);
console.log(addCw);
while (div.hasChildNodes()){
    div.removeChild(div.lastChild);
}
var newList = ['protein powder', 'muscle milk', 'power bars'];
newList.forEach(function(text){
    let newElement = document.createElement('li');
    newElement.textContent = text;
    if (text == 'muscle milk') {
        newElement.className = 'important';
    }
    div.appendChild(newElement);
})