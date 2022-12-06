const liItem = document.querySelectorAll ('.item');
console.log (liItem)
console.log ('Number of categories:', liItem.length);
const ulEl = document.querySelector ('#categories');
console.log ('Category:', ulEl.children[0].firstElementChild.textContent);
console.log ('Elements:', ulEl.children[0].lastElementChild.children.length);
console.log ('Category:', ulEl.children[1].firstElementChild.textContent);
console.log ('Elements:', ulEl.children[1].lastElementChild.children.length);
console.log ('Category:', ulEl.children[2].firstElementChild.textContent);
console.log ('Elements:', ulEl.children[2].lastElementChild.children.length);
