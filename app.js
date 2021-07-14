

// refs for inputs
let phoneForm = document.getElementById("form");
let phone = document.getElementById("phone");
let firstName = document.getElementById("firstName");

handler_input = (e) => {
  console.log(e.target.value)
}

phone.addEventListener('change', handler_input);
firstName.addEventListener('change', handler_input);



let myArray = [
  {
    _id:"01",
    firstName: "Henry",
    lastName: "Winkler",
    phone:"202-555-1212",
    isOn: false
  },
  {
    _id:"02",
    firstName: "James",
    lastName: "Brown",
    phone:"212-555-1212",
    isOn: false
  },
  {
    _id:"03",
    firstName: "Chuck",
    lastName: "Norris",
    phone:"303-555-1212",
    isOn: false
  },
  {
    _id:"04",
    firstName: "Charles",
    lastName: "Bronsen",
    phone:"310-555-1212",
    isOn: false
  }
]
// ----------------------create data rows for data 

drawTable = () => {
  myArray.forEach((contact)=> {
        // ref for table displaying
      let phoneTable = document.getElementById("phoneTable");

      // create tr with td's
      let phoneRow = document.createElement("tr")

      // 1st column
      let col1Input = document.createElement("input")
      col1Input.setAttribute("type", "checkbox")
      let col_01 = document.createElement("td")

      col_01.appendChild(col1Input)

      // 2nd column
      let col_02 = document.createElement("td")
      col_02.innerHTML = contact.firstName;

      // 3rd column
      let col_03 = document.createElement("td")
      col_03.innerHTML = contact.lastName;

      // 4th column
      let col_04 = document.createElement("td")
      col_04.innerHTML = contact.phone;

      // 5h column delete button
      let col_05 = document.createElement("button")
      col_05.innerHTML = "x"
      col_05.addEventListener("click",()=>removeItem(contact._id))


      //add it to tbody

      phoneTable.appendChild(phoneRow)
      phoneRow.append(col_01, col_02, col_03, col_04, col_05);
  })

}







removeItem = (itemID) => {
  let newArray = myArray.filter(item => item._id != itemID)
  myArray = newArray;
  //console.log("the new array: " ,newArray);
  //drawTable();

}

toggleOn = () => {
  console.log("hello toggle")
}

//removeItem("02")
drawTable()

