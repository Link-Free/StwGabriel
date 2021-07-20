const  allImages = document.querySelectorAll('img');

for (let image of allImages) {

	image.setAttribute('draggable', 'false');
}