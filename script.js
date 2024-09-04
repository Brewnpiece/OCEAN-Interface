let incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
//console.log(incrementButton);
//console.log(decrementButton);
for (var i = 0; i < incrementButton.length; i++) {
  var button = incrementButton[i];
  button.addEventListener('click', function() {

    var buttonClicked = event.target;
    //console.log(buttonClicked);
    var input = buttonClicked.parentElement.children[1]
    //console.log(input)
    var inputValue = input.value;
    //console.log(inputValue);
    var newValue = parseInt(inputValue) + 1;
    //console.log(newValue);
    input.value = newValue;
  })
}

for (var i = 0; i < decrementButton.length; i++) {
  var button = decrementButton[i];
  button.addEventListener('click', function() {

    var buttonClicked = event.target;
    //console.log(buttonClicked);
    var input = buttonClicked.parentElement.children[1]
    //console.log(input)
    var inputValue = input.value;
    //console.log(inputValue);
    var newValue = parseInt(inputValue) - 1;
    //console.log(newValue);
    input.value = newValue;
    if (newValue >= 0) {
      input.Value = newValue;
    }
    else {
      input.value = 0;
    }
  })
}

function myFunction() {
  // Get all input elements with the class 'counter-display'
  const inputs = document.querySelectorAll('.counter-display');
  const scouterName = document.getElementById('scouter-name').value;
  const robotSide = document.querySelector('#robot-side').value;
  const comments = document.getElementById('comments').value;
  const teamNumber = document.getElementById('team-number').value;
  const checkbox = document.getElementById('leave');
  const parked = document.getElementById('parked');
  const stage = document.getElementById('stage');
  const none = document.getElementById('none');
  const matchNumber = document.getElementById('match-number').value;
  let output = 'The values are: ';
  output += `${scouterName}~${matchNumber}~${robotSide}~${teamNumber}~${checkbox.checked}~${parked.checked}~${stage.checked}~${none.checked}~`;
  
  inputs.forEach(input => {
    output += `${input.value}~`;
  });
  output += `${comments}`;

  // Display the output in a paragraph element (you'll need to add this to your HTML)
  document.getElementById('output').innerHTML = output;
}

var slide = 0;

function swipePage(increment) {
  if (i > 0) {
    slides = document.getElementById("pages").children
    if (slide + increment < slides.length && slide + increment >= 0) {
      slides[slide].style.display = "none";
      slide += increment;
      window.scrollTo(0, 0);
      slides[slide].style.display = "block";
    }
  }
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName(checkbox.name)
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
  })
}

function Disable() {
  document.getElementById("submit").disabled = true
}

