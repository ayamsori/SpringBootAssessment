/*
   ProductController perform action to the products to be displayed


   (1) Display all products to be retrieved from the back-end
   (2) Add product to the product list (send the new project to the back-end)
   --- edit an existing product detail
   -- remove an existing product from the product list
*/


//development APIs
const addAPI= 'http://localhost:8080/item/add';
const displayAPI = 'http://localhost:8080/item/all';

////production APIs
//const addAPI = 'https://yukiwebdemo.azurewebsites.net/item/add';
//const displayAPI = 'https://yukiwebdemo.azurewebsites.net/item/all';

let productController = [];

function displayItem()
{
      //fetch data from database using the REST API endpoint from Spring Boot
      fetch(displayAPI)
          .then((resp) => resp.json())
          .then(function(data) {
              console.log("2. receive data")
             // console.log(data);


              data.forEach(function (item) {
                  const itemObj = {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      date: item.date
                 };

                  productController.push(itemObj);
            });


           //Display all the objects from the productController array
            renderProductPage();
          })
          .catch(function(error) {
              console.log(error);
          });
}


//(3)  Display all products when user launch the product.html page
function renderProductPage() {


   let display = "";


   for (let i = 0; i < productController.length; i++ ) {


       display += `
          <tr>
               <td>${productController[i].title}</td>
               <td>${productController[i].description}</td>
               <td>${productController[i].date}</td>
          </tr>
       `
   }


   document.querySelector("#table").innerHTML= display;


} //End of renderProductPage function

function addProduct(title, description, date)
{
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('date', date);


 fetch(addAPI, {
       method: 'POST',
       body: formData
       })
       .then(function(response) {
           console.log(response.status); // Will show you the status
           if (response.ok) {
               alert("Successfully Added Task!")
           }
           else {
              alert("Something went wrong. Please try again")
           }
       })
       .catch((error) => {
           console.error('Error:', error);
           alert("Error adding task to To-Do List")
       });
}








