
//Global variable - to store the image object
let storeImage = ""


//When user clicks on 'Save Item':
//1) store all the inputs into variables
//2) do validation
//3) calls a function from the productController.js to access the API to add items to the database


//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {


  // Prevent default action of the Form submission
  event.preventDefault();


  //1) Select the inputs
  const title = document.querySelector('#newItemTitleInput').value;
  const description = document.querySelector('#newItemDescription').value;
  const date = document.querySelector('#newItemDate').value;

  /* 2)
      Do the Validation code here
  */


  // 3)  calls a function from the productController.js to access the API to add items to the database
  addProduct(title, description, date);  //arguments

});