/* ---------- Αντίστροφη μέτρηση ---------- */

const targetDate = new Date(2027, 4, 9);

const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateCountdown(){

    const timeDiffernce = (targetDate.getTime() - Date.now()) / 1000; /*Πόσα δευτερόλεπτα απέχει η ημερομηνία στόχος*/
    const totalSeconds = Math.max(0, Math.floor(timeDiffernce)); /*Απαλείφω τα κλάσματα του δευτερολέπτου*/

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds =Math.floor(totalSeconds % 60);


    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;

}

updateCountdown();


const hiddenMessage1 = document.getElementById("hidden1");
const hiddenMessage2 = document.getElementById("hidden2");


const countdownTimer = setInterval(() => {
    updateCountdown();

    if (Date.now() >= targetDate.getTime()) {
        clearInterval(countdownTimer);
        hiddenMessage1.textContent = "Το event ξεκινά"/*Μήνυμα μετά τη λήξη του countdown */
        hiddenMessage2.textContent = "Enjoy your trip"
    }
}, 1000);


/* ---------- Φίλτρο ομιλητών ---------- */
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.speaker-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    /*Προσθήκη της συνθήκης btn.dataset.filter === "all" για την σωστή εμφάνιση των καρτελών των ομιλητών */
    cards.forEach((card) => {
      if (card.dataset.category === btn.dataset.filter || btn.dataset.filter === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


/*Κουμπιά "More" με πληροφορίες για τους ομιλητές*/
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const speaker1 = document.getElementById("speaker1");
const speaker2 = document.getElementById("speaker2");
const speaker3 = document.getElementById("speaker3");
const speaker4 = document.getElementById("speaker4");

const speakers = [speaker1, speaker2, speaker3, speaker4]

btn1.onclick = function(){
  speakers.forEach((speaker)=>{
    speaker.textContent = "";
  }
  );
  speaker1.textContent = "Συγγνώμη αλλά δεν υπάρχουν περισσότερες πληροφορίες για τον ομιλητή αυτή τη στιγμή.";
}

btn2.onclick = function(){
  speakers.forEach((speaker)=>{
    speaker.textContent = "";
  }
  );
  speaker2.textContent = "Συγγνώμη αλλά δεν υπάρχουν περισσότερες πληροφορίες για τον ομιλητή αυτή τη στιγμή.";
}

btn3.onclick = function(){
  speakers.forEach((speaker)=>{
    speaker.textContent = "";
  }
  );
  speaker3.textContent = "Συγγνώμη αλλά δεν υπάρχουν περισσότερες πληροφορίες για τον ομιλητή αυτή τη στιγμή.";
}

btn4.onclick = function(){
  speakers.forEach((speaker)=>{
    speaker.textContent = "";
  }
  );
  speaker4.textContent = "Συγγνώμη αλλά δεν υπάρχουν περισσότερες πληροφορίες για τον ομιλητή αυτή τη στιγμή.";
}

/* ---------- Φόρμα επικοινωνίας ---------- */
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const name = document.getElementById('name').value.trim(); /*Προσθήκε της μεθόδου trim() για την αποφυγή συμπλήρωσης με κενά string*/
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

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

  if (message.length === 0 ) {
    formMessage.textContent = 'Παρακαλούμε συμπληρώστε το μήνυμα σας.';
    formMessage.className = 'error';
    return;
  } else if (message.length < 10) {
    formMessage.textContent = 'Παρακαλούμε το μήνυμα σας πρέπει να περιέχει πάνω από 10 χαρακτήρες.';
    formMessage.className = 'error';
    return;
  }

  formMessage.textContent = 'Ευχαριστούμε! Το μήνυμά σας εστάλη.';
  formMessage.className = 'success';
});