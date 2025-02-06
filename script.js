//GOD HAVE MERCY

//INCREMENT BUTTON
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

  // Display the output in a paragraph element (you'll need to add this to your HTML)
  document.getElementById('output').innerHTML = output;
  console.log(output)
}


//PAGE SWIPER
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


//CHECKBOXES
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName(checkbox.name)
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
  })
}

//LX ADDER
document.querySelectorAll('.update').forEach(button => {
  button.addEventListener('click', function(event) {
    // Get the button that was clicked
    let buttonClicked = event.target;
    // Get the group ID from the button
    let groupId = buttonClicked.dataset.group;
    // Find the input with matching ID
    let input = document.getElementById(groupId);
    // Append the button's title to the input value with a slash
    if (input.value) {
      input.value += ` / ${buttonClicked.title}`;
    } else {
      input.value = buttonClicked.title; // No slash for the first value
    }
  });
});

//LX REMOVER
document.querySelectorAll('.remove').forEach(button => {
  button.addEventListener('click', function(event) {
    // Get the button that was clicked
    let buttonClicked = event.target;
    // Get the group ID from the button
    let groupId = buttonClicked.dataset.group;
    // Find the input with matching ID
    let input = document.getElementById(groupId);
    // Split the input value into an array of strings
    let inputValues = input.value.split(' / ');
    // Remove the last element of the array
    inputValues.pop();
    // Join the array back into a string
    input.value = inputValues.join(' / ');
  });
});

//FORM CRUD
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnSy8T4z5g1M99gHYRTkfo3P9cg_8gvy23i5B7zJoXfUALuyis74UvGATnkDLeRxCsg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

