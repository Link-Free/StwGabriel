function createDefaultOption(name, link, imageUrl) {

   const li = document.createElement('li');
   const anchor = document.createElement('a');
   const buttonIcon = document.createElement('img');
   const buttonName = document.createElement('span');

   li.setAttribute('tittle', `${name}`);
   li.setAttribute('class', `link-option option--${name}`);

   anchor.setAttribute('class', 'option__anchor');
   anchor.setAttribute('href', `${link}`);

   buttonIcon.setAttribute('src', `${imageUrl}`);
   buttonIcon.setAttribute('alt', `${name}-icon`);

   buttonName.innerText = name;

   anchor.appendChild(buttonIcon);
   anchor.appendChild(buttonName);
   li.appendChild(anchor);

   console.log(li);
   return li;
}
