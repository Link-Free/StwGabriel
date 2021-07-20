const app = document.getElementById('app');
const appProfile = document.getElementById('profile');
const appOptions = document.getElementById('options');
const load = document.querySelector('.start-load')

onload = function () {

   this.setTimeout(() => {
      load.classList.remove('--active');
      load.classList.add('--inactive');
      app.classList.add('start-anim');
      appProfile.classList.add('down-anim');
      appOptions.classList.add('up-anim');
   },0)
   
};
