const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
// const elements = ingredients
//   .map((ingredient) => '<li class="item">${ingredient}</li>')
//   .join("");

const elements = ingredients.map (option => {
  const liEl = document.createElement('li');
  liEl.textContent = option;
  liEl.classList.add ('item');
 
  return liEl;
})

console.log (elements); 

ingredientsEl.append(...elements)
