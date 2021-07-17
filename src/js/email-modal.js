const modal = document.querySelector('.email-modal-overlay');

const Modal = {

   open() {

      modal.classList.add('modal--active')
   },
   
   close() {
      modal.classList.remove('modal--active')
   }
};