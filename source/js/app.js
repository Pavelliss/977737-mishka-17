var navButton = document.querySelector('.nav__button');
var nav = document.querySelector('.nav');
var orderButton = document.querySelector('.offer__button');
var modal = document.querySelector('.modal-wraper');
var modalButton = document.querySelector('.modal__button');
var catalogButton = document.querySelectorAll('.catalog__basket');


//nav
nav.classList.remove("nav--nojs");
navButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  nav.classList.toggle('nav--closed');
});

//modal
if (orderButton) {
  orderButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-wraper--open');
  });
}

if (modal) {
  modalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-wraper--open');
  });
}

if (catalogButton) {
  for (var i = 0; i < catalogButton.length; i++) {
    catalogButton[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.add('modal-wraper--open');
    });
  }
}
