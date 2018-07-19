function idCard() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;

  var postFullName = firstName + " " + lastName;
  document.getElementById('postFullName').innerHTML = postFullName;

  var postAddress = address;
  document.getElementById('postAddress').innerHTML = postAddress;

  var age = parseInt(document.getElementById('age').value);
  var postAge = age;
  
  var phoneNumber = parseInt(document.getElementById('phoneNumber').value);
  var postPhoneNumber = phoneNumber;

  var numberArray = [];
  numberArray.push(age, phoneNumber);

  for(var i = 0; i <= numberArray.length; i++) {
    if(numberArray[i] <= 100) {
    document.getElementById('postAge').innerHTML = "Age: " + postAge;
  } else if (numberArray[i] > 100) {
      document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + postPhoneNumber;
    }
  }
}
