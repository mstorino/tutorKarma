$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var firstNameInput = $("#first-name").val().trim();
  var lastNameInput = $("#last-name").val().trim();
  var emailInput = $("#email").val().trim();
  var aboutInput = $("#about").val().trim();
  var subjectInput = $("#sel2").val().trim();
  
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#user-form", handleUserFormSubmit);
  

  // A function to handle what happens when the form is submitted to create a new Author
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!firstNameInput || lastNameInput || emailInput || aboutInput || subjectInput) {
      return;
    }
    // Calling the insertUser function and passing in the value of the name input
    insertUser({
      firstName: firstNameInput,
      lastName: lastNameInput,
      about: aboutInput,
      email: emailInput,
      SubjectId: subjectInput        
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function insertUser(userData) {
    $.post("/api/tutors", userData)
      //.then(getAuthors);
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  

  

  
});
