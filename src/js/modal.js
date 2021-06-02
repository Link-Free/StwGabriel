const modal = document.querySelector('#modal');

const Modal = {
   
   open() {

      modal.classList.add('overlay--active')
   },
   close() {
      modal.classList.remove('overlay--active')
   }
};