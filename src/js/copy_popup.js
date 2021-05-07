//
function copyPopup() {

   const copyPopup = document.getElementById('copy__popup-alert');

   copyPopup.classList.remove('offScreen');
   copyPopup.classList.add('onScreen');

   setTimeout(() => {

      copyPopup.classList.remove('onScreen');
      copyPopup.classList.add('offScreen');

   }, 2000);
};