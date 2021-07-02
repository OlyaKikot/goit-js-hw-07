const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('#gallery');
// const listGalleryEl = images.reduce((acc, image) => {
//   const imagesItemEl = document.createElement('li');
//   imagesItemEl.classList.add('item');
//   const imagesGalleryEl = document.createElement('img');
//   imagesGalleryEl.classList.add('img');
//   imagesGalleryEl.setAttribute('src', image.url);
//   imagesGalleryEl.setAttribute('alt', image.alt);

//   imagesItemEl.append(imagesGalleryEl);

//   return (acc += imagesItemEl.outerHTML);
// }, '');

// galleryEl.insertAdjacentHTML('beforeend', listGalleryEl);


const galleryEl = document.querySelector('#gallery');
const listGalleryEl = images.reduce((acc, {url, alt}) => {


  return  acc+
  `<li class='item'><img class='img' src=${url} alt=${alt}></img> </li>`;
}, '');

galleryEl.insertAdjacentHTML('beforeend', listGalleryEl);


