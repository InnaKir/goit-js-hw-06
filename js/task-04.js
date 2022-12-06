// Создай переменную counterValue в которой будет храниться текущее 
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const counter = document.querySelector('#value')

const incrementButton = document.querySelector ('button[data-action="increment"]');
const decrementButton = document.querySelector ('button[data-action="decrement"]');
incrementButton.addEventListener("click", onIncrementButtonClick);
decrementButton.addEventListener("click",  onDecrementButtonClick)

function onIncrementButtonClick (){
    counterValue +=1;
    counter.textContent = counterValue;
};

function onDecrementButtonClick (){
    counterValue -=1;
    counter.textContent = counterValue;
};



