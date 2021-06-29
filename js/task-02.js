
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.querySelector('#ingredients');
//   const ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.textContent = `ингридиент ${ingredients[0]}`;
//   console.log(ingredientsItemEl);

const elements = ingredients.map(makeItemElement);

