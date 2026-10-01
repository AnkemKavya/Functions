// Function that manages the array and returns an inner function (closure)
function createArrayBinder() {
  const namesList = [];

  // The inner function that gets returned to process and display the content
  return function(newName) {
    if (newName.trim() !== "") {
      namesList.push(newName.trim());
    }

    // Format array items as HTML list items
    let listItems = "";
    for (let i = 0; i < namesList.length; i++) {
      listItems += `<li>${namesList[i]}</li>`;
    }

    return `<ul>${listItems}</ul>`;
  };
}

// Initialize the binder function
const bindArrayToDOM = createArrayBinder();

// Function called by the HTML button onclick event
function onClickContentBinding() {
  const inputElement = document.getElementById("txtName");
  const resultDiv = document.getElementById("divResult");
  const inputValue = inputElement.value;

  // Call the returned binder function and render the output in the DOM
  resultDiv.innerHTML = bindArrayToDOM(inputValue);

  // Clear the input field
  inputElement.value = "";
}