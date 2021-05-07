const modal = document.querySelector('#modal');

const Modal = {
   open() {

      modal.classList.add('active')
   },
   close() {
      modal.classList.remove('active')
   }
};