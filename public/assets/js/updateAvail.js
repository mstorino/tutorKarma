
$(document).ready(function() {
  
  var userId;

  $('#sel3').on("change", handleAppointmentFormSubmit);

  function handleAppointmentFormSubmit(event) {
    event.preventDefault();
  
    var selectBox = document.getElementById("sel3");
    userId = selectBox.value;

    // if (!selectedValue) {
    //   return;
    // } else {
      console.log(userId);

    // }

    //construct updated t/f value

    var updatedUser = {
      available: 0
    }
    
    updatedUser.id = parseInt(userId);

    console.log(updatedUser);
    updateUser(updatedUser);
  };


  function updateUser(data){
         $.ajax({
          method: "PUT",
          url: "/api/users",
          data:data
         })
         .done (function(){
          window.location.href = "/student";
         });
        };
  

}); 
