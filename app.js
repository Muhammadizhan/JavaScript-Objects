document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    // Create an object with form values
    var userObject = {
      name: name,
      email: email,
      age: age,
      city: city,
    };

    console.log(userObject);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
  });
