// function validateForms() {
//     var zip
// //    email = document.querySelector(".email").value
//    zip = document.querySelector(".zip").value
//    if (isNaN(zip) || zip < 0 || zip > 99999) {
//        alert("invalid zipcode")
//        console.log(zip)
//        console.log(document.querySelector(".zip").value)
//    } else {
//        alert("You are registered to receive updates!")
//    }
//    console.log(zip)
// }


elementValue = document.querySelector(".email").value;
function validateZipCode(elementValue) {
  var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
  return zipCodePattern.test(elementValue);
}

str = document.querySelector(".email").value;
function is_usZipCode(str) {
  regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    str = document.querySelector(".email").value
  if (regexp.test(str)) {
      alert("yes")
      console.log(document.querySelector(".email").value)
    return true;
  } else {
    alert("no")
    console.log(str)
    return false;
  }
}

// console.log(is_usZipCode("03201-2150"));

// console.log(is_usZipCode("7892"));


function checkform() {
console.log(document.querySelector(".email").value)
}