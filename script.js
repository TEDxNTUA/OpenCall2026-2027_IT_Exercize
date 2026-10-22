/* ---------- Αντίστροφη μέτρηση ---------- */
const testDate = new Date("2027-05-09")

/* ---------- Φίλτρο ομιλητών ---------- */
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.speaker-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    cards.forEach((card) => {
      if (card.dataset.category === btn.dataset.filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ---------- Φόρμα επικοινωνίας ---------- */
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('e-mail').value;

  if (name.length === 0) {
    formMessage.textContent = 'Παρακαλούμε συμπληρώστε το όνομά σας.';
    formMessage.className = 'error';
    return;
  }

  if (!email.includes('@')) {
    formMessage.textContent = 'Το email δεν είναι έγκυρο.';
    formMessage.className = 'error';
    return;
  }

  formMessage.textContent = 'Ευχαριστούμε! Το μήνυμά σας εστάλη.';
  formMessage.className = 'success';
});