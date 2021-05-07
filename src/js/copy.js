function copy() {

   document.getElementById('copyInp').select();
   document.execCommand('copy')

   Modal.close()
   copyPopup()
}