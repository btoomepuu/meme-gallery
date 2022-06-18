var $gallery = document.querySelector('main');

var imageUrls = [];
imageUrls = [
  'https://i.pinimg.com/564x/a1/8f/14/a18f148929a9ad61efe2830e0d06b8dc.jpg',
  'https://i.pinimg.com/564x/22/eb/52/22eb526c867aff1b3f5c4b5ce63262cf.jpg',
  'https://i.pinimg.com/474x/26/8c/04/268c046a16f8ae9749436b274358124d.jpg'
];

var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', () => {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
