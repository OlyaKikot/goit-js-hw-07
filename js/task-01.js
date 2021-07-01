const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);

const result = [...categoriesEl.children].map(element => {
  return [element.children[0].textContent, element.children[1].children.length];
});

result.forEach(element => {
  console.log(`- Категория: ${element[0]}`);
  console.log(`- Количество элементов: ${element[1]}`);
});
