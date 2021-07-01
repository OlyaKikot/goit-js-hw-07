let counterValue = 0;

const refs = {
  decrement: document.querySelector('#counter button[data-action="decrement"]'),
  increment: document.querySelector('#counter button[data-action="increment"]'),
  span: document.querySelector('#value'),
};

function onDecrement() {
  counterValue -= 1;
  setValue();
}

function onIncrement() {
  counterValue += 1;
  setValue();
}

function setValue() {
  refs.span.textContent = counterValue;
}

refs.decrement.addEventListener('click', onDecrement);
refs.increment.addEventListener('click', onIncrement);
