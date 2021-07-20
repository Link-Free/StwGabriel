const modalOverlay = document.querySelector('.email-modal-overlay');
const optionInfo = document.querySelector('.info-bubble');
const clickToExit = document.querySelector('.click-to-exit');

optionInfo.addEventListener('click', () => {

   if (modalOverlay.classList.contains('--active')) {

      Modal.close()
   }
   if (modalOverlay.classList.contains('--inactive')) {

      Modal.open()
   }
});
clickToExit.addEventListener('click', () => {

   Modal.close()
})
const Modal = {

   open() {


      modalOverlay.classList.add('--active');

      setTimeout(() => {

         modalOverlay.classList.remove('--inactive');
      }, 100);
   },

   close() {

      modalOverlay.classList.add('--inactive');

      setTimeout(() => {

         modalOverlay.classList.remove('--active');
      }, 200);
   }
};