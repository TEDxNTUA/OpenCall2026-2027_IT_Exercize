/* ---------- Φόρμα επικοινωνίας ---------- */
const form = document.getElementById('contact-form');

if (form) {
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Η φόρμα συμπληρώθηκε σωστά!!! (Η αποστολή email δεν είναι ενεργοποιημένη ακόμη)';
    formMessage.className = 'form-status success';
    formMessage.hidden = false;
  });
}

