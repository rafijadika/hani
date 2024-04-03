const showImageBtn = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');
const image = document.getElementById('image');
const description = document.getElementById('description');

showImageBtn.addEventListener('click', function() {
  // Ganti sumber gambar dan deskripsi di sini
  image.src = 'hani.jpg';
  description.textContent = 'Maafin aku yaa yang suka kurang ngertiin kamu, mungkin aku orangnya terkesan cuek, ga peka, ga ngertiin kamu, tapi aku bakal coba perbaiki itu semua demi kamu sayang, karena aku sayang sama kamu. jangan nyerah sama aku ya sayang. love you';
  imageContainer.classList.remove('hidden');
});
