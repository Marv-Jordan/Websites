
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formNote').textContent = 'Vielen Dank! Ihre Anfrage wurde vorgemerkt. Bitte verbinden Sie dieses Formular mit einem E-Mail- oder Formularservice.';
  this.reset();
});
