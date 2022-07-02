const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
// ///add

// closedFace.addEventListener('click', () => {
//   if (opendFace.classList.contains('open')) {
//     opendFace.classList.add('active');
//     closedFace.classList.remove('active');
//   }
// });

// closedFace.addEventListener('click', () => {
//   if (opendFace.classList.contains('closed')) {
//     opendFace.classList.add('active');
//     closedFace.classList.remove('active');
//   }
// });

// const closedFace = document.querySelector('.closed');
// const openFace = document.querySelector('.open');

// Add event listener
closedFace.addEventListener('click', () => {
  openFace.classList.add('active');
  closedFace.classList.remove('active');
});

openFace.addEventListener('click', () => {
  closedFace.classList.add('active');
  openFace.classList.remove('active');
});
