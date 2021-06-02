function copy() {

   document.getElementById('email-view').select();
   document.execCommand('copy')

   Modal.close()
   copiedAlert()
}