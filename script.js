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

//SUBMIT FUNCTION
function myFunction() {
  // Get all input elements with the class 'counter-display'
  const inputs = document.querySelectorAll('input');
  const scouterName = document.getElementById('scouter-name').value;
  const robotSide = document.querySelector('#robot-side').value;
  const comments = document.getElementById('comments').value;
  const teamNumber = document.getElementById('team-number').value;
  const checkbox = document.getElementById('leave');
  const parked = document.getElementById('parked');
  const stage = document.getElementById('shallow');
  const none = document.getElementById('deep');
  const matchNumber = document.getElementById('match-number').value;
  let output = 'The values are: ';
  output += `${scouterName}~${matchNumber}~${robotSide}~${teamNumber}~${checkbox.checked}~${parked.checked}~${stage.checked}~${none.checked}~`;
  
  inputs.forEach(input => {
    output += `${input.value}~`;
  });
  output += `${comments}`;
  
  document.getElementById('output').innerHTML = output;
  console.log(output)
}

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

//CHECKBOXES
function onlyOne(checkbox) {
  var checkboxes = Array.from(document.getElementsByClassName('checkboxes'));
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

//FORM CRUD
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnSy8T4z5g1M99gHYRTkfo3P9cg_8gvy23i5B7zJoXfUALuyis74UvGATnkDLeRxCsg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
