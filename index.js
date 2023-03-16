// Get the button element
const myButton = document.querySelector('#my-button');

// Define the event listener function
function handleClick() {
  console.log('Button clicked!');
}

// Bind the event listener to the button element
myButton.addEventListener('click', handleClick);