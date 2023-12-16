
// Get the input field
let inputCountryField = document.querySelector("#countryInput");

// Execute a function when the user press a key on the keyboard
inputCountryField.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault(); // Cancel the default action, if needed
    document.getElementById("btnAddCountry").click();// Trigger the button element with a click
  }
});


function addCountry() {
  //get the country value
  let countryName = document.querySelector("#countryInput").value;
  //console.log(countryName);

  if (countryName)
  {
    //create a list item for each country
    let listItem = document.createElement("li");

    //create a span for each country
    let countrySpan = document.createElement("span");
    countrySpan.textContent = countryName;

    //create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btnDeleteCountry";

    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    //create a update button
    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.className = "btnUpdateCountry";

    updateButton.onclick = function () {
      let updatedCountryName = prompt("Enter Updated Country Name", countryName);

      if (updatedCountryName != null && updatedCountryName.trim()!="") {
        countrySpan.textContent = updatedCountryName;
        alert("Country Updated");
      }
    };
    

    //append country name 
    listItem.appendChild(countrySpan);
    listItem.appendChild(deleteButton);
    listItem.appendChild(updateButton);

    //append the list of countries
    document.querySelector("#countryList").appendChild(listItem);

    //clear the field
    document.querySelector("#countryInput").value = "";
  }
}




// const userText = document.querySelector("#userText");
// const getTextBtn = document.querySelector("#getTextbtn");

// getTextBtn.addEventListener("click", function () {
  
//   let newCountryName = userText.value;
//   console.log(newCountryName);

//   const li = document.createElement("li");
//   const ul = document.querySelector("ul");

//   ul.append(li);

//   li.appendChild(document.createTextNode(newCountryName));
//   li.setAttribute("class", "country");
//   ul.appendChild(li);

// });


// const listItems = document.querySelectorAll('#myCountryList li');

// getCountryRemvbtn.addEventListener("click", function () {
//   let countryNameToRemove = cntyRmvText.value;
  
//   console.log(countryNameToRemove);
//   console.log(listItems);
  
//   Array.from(listItems).forEach(listItem => {
//      if(countryNameToRemove.includes(listItem.textContent.toLowerCase())){
//         listItem.parentNode.removeChild(listItem);
//      }
//   });
// });

