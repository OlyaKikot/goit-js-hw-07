
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.querySelector('#ingredients');
  const listEl =(ingredients.map(element =>{
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = `${element}`;
   return ingredientsItemEl;
  }));

  ingredientsEl.append(...listEl);
