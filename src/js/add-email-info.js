const options = document.querySelectorAll('.tree-option');

for (let option of options) {

   if (option.classList.contains('option--email')) {
      addMailInfo(option);
   }
};

function addMailInfo(option) {

   const button = document.createElement('button');
   const image = document.createElement('img');

   button.setAttribute('title', 'click for information if you do not have an email client installed');
   // button.setAttribute('onclick', 'Modal.open()');
   button.setAttribute('class','info-bubble');

   image.setAttribute('src', 'src/assets/info.svg')

   button.appendChild(image);
   option.appendChild(button);
};
