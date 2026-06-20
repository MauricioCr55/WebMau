/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');
const message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === '' ||
    contactMessage.value === ''
  ) {
    message.textContent = 'Por favor, completa todos los campos.';
    message.classList.remove('color-first');
    message.classList.add('color-red');

    setTimeout(() => {
      message.textContent = '';
      message.classList.remove('color-red');
    }, 3000);
  } else {
    const templateParams = {
      from_name: contactName.value,
      reply_to: contactEmail.value,
      subject: contactSubject.value,
      message: contactMessage.value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then((response) => {
        message.textContent = '¡Mensaje enviado correctamente!';
        message.classList.remove('color-red');
        contactForm.reset();
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        message.textContent = 'Algo salió mal. Inténtalo de nuevo.';
        message.classList.add('color-red');
        console.log('FAILED...', error);
      });
  }
};

contactForm.addEventListener('submit', sendEmail);
