//RUN IT BACK

//ROBOT SIDE COLOR CHANGE
const robotSide = document.getElementById('robot-side');

robotSide.addEventListener("change", () => {

  if (robotSide.value.includes('Red')) {
    robotSide.style.backgroundColor = "rgb(235, 109, 109)";}

  else if (robotSide.value.includes("Blue")) {
    robotSide.style.backgroundColor = "rgb(109, 149, 235)";}

 });

//TOGGLE BUTTONS
const toggleState = document.querySelectorAll('.toggle');

toggleState.forEach(e => {e.addEventListener("click", () => {

  e.value = (e.value =="0") ? "1" : "0";
  e.style.backgroundColor = (e.value === "0") ? (e.style.backgroundColor = "white", e.style.borderColor = "white") : (e.style.backgroundColor = "#C38C26", e.style.borderColor = "#C38C26");
  
  }); 
});

//FUEL UPDATER
const fuelElements = document.querySelectorAll('.fuel-button');
let history = [];

fuelElements.forEach(e => {
  e.addEventListener("click", () => {

  const parent = e.closest('.fuel-split');
  const count = parent.querySelector('.fuel-counter');
  let fuelCurrentNumber = Number(count.value);

    if (e.value == "Undo"){
      if (history.length > 0){
        let lastValue = history.pop();
        fuelCurrentNumber -= lastValue;
        count.value = Math.max(0, fuelCurrentNumber);
        };
      }

    else {
      let fuelAddNumber = Number(e.value);
      fuelCurrentNumber += fuelAddNumber;
      count.value = fuelCurrentNumber;
      history.push(fuelAddNumber);
    };

  });
});

//BUTTON PARENT TEXT CHANGER
var currentButton = ""

function buttonClick(outerButton) {
 currentButton = outerButton;
};

function setParent(innerButton) {
  currentButton.innerHTML = innerButton.innerHTML;
  currentButton.style.backgroundColor = "#C38C26", currentButton.style.borderColor = "#C38C26";
};

//PAGE SWIPER
var slide = 0;
function swipePage(increment) {
  const slides = document.getElementById('pages').children;
  if (!slides || slides.length === 0) return;
  if (slide + increment < slides.length && slide + increment >= 0) {
    slides[slide].style.display = 'none';
    slide += increment;
    window.scrollTo(0, 0);
    slides[slide].style.display = 'block';
  }
}

//FORM CRUD
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwbeHxnCOE3frSO-4MMuzQMoaJa4oeDLAPbOLrVTBNzv9EQskVME0xOjzenBeDtxuxB/exec'
  const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault();
  swipePage(1); 

  const icon = document.getElementById('status-icon');
  const text = document.getElementById('status-text');
  const exitPage = document.getElementById('DataSent');
  const data = new FormData(form);

document.querySelectorAll('button[data-name]').forEach(btn => {
  let val;

  if (btn.classList.contains('toggle')) {
    val = btn.value; 
  } 

  else {
    const defaults = ["Accuracy", "Climb", "Broken", "Final Climb Status", "Defence?"];
    val = defaults.includes(btn.innerText) ? "" : btn.innerText;
  }

  data.append(btn.getAttribute('data-name'), val);
  
});


fetch(scriptURL, { method: 'POST', body: data })
  .then(() => {
    icon.className = "success-icon"; 
    text.innerText = "Data Sent!";
    document.getElementById('DataSent').className = "Bubbles"; 
    setTimeout(() => location.reload(), 6000);
  })
  .catch(err => {
    icon.className = "error-icon";
    text.innerText = "Upload Failed";
    document.getElementById('retry-btn').style.display = "block";
    console.error(err);
  });
});

function resetAfterError() {
  const slides = document.getElementById('pages').children;
  
  slide = slides.length - 2; 

  document.getElementById('DataSent').style.display = 'none';
  slides[slide].style.display = 'block';

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = false;
  
  const icon = document.getElementById('status-icon');
  icon.className = "loading-circle";
  document.getElementById('status-text').innerText = "Sending Data...";
  document.getElementById('retry-btn').style.display = "none";
};