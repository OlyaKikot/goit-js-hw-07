const refs = {
  controls: document.querySelector('#controls'),
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('#controls input'),
  buttonRender: document.querySelector(
    '#controls button[data-action="render"]'
  ),
  buttonDestroy: document.querySelector(
    '#controls button[data-action = "destroy"]'
  ),
};

function getRandomInt() {
  const red = Math.floor(Math.random() * Math.floor(255));
  const green = Math.floor(Math.random() * Math.floor(255));
  const blue = Math.floor(Math.random() * Math.floor(255));

  return `rgb(${red}, ${green}, ${blue})`;
}

function onTargetButtonRenderClick() {
  refs.boxes.append(...createBoxes(refs.input.value));
}

function onTargetButtonDestroyClick() {
  [...refs.boxes.children].forEach(elem => elem.remove());
  refs.input.value = '';
}

refs.buttonRender.addEventListener('click', onTargetButtonRenderClick);
refs.buttonDestroy.addEventListener('click', onTargetButtonDestroyClick);

function createBoxes(amount) {
  let arrBlock = [];
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    const blockEl = document.createElement('div');

    blockEl.setAttribute(
      'style',
      'background-color: ' +
        getRandomInt() +
        ';' +
        'width:' +
        width +
        'px;' +
        'height:' +
        height +
        'px;'
    );
    width += 10;
    height += 10;
    console.log();
    blockEl.classList.add('block');
    arrBlock.push(blockEl);
  }

  return arrBlock;
}
