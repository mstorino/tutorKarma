var selectedValue;
var tutorModal = $('#myModal');
var tutorModalBody = $('.modal-body');

$(document).ready(function() {
  
  $('#sel1').on("change", handleTutorFormSubmit);
 
  $('.closeBtn').on("click", resetState);

  function handleTutorFormSubmit(event) {
    event.preventDefault();
  
    var selectBox = document.getElementById("sel1");
    selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (!selectedValue) {
      return;
    } else {
      parseTutorData(allTutors);

    }
  
  
  };

function parseTutorData (data) {
    console.log(selectedValue);
    for (var i = 0; i < allTutors.length; i++) {
      if (selectedValue == parseInt(allTutors[i].id)) {
        $('#myModalLabel').html("<h4>" + allTutors[i].firstName + "</h4>");
        showModal();
 
       }    

      console.log(allTutors[i].id);
    }
}

function showModal(){
    tutorModal.modal('show');
    // resetState();
    
  }

function resetState(){
  selectedValue = 0;
  $('#myModal').empty();
  $('.modal-body').empty();
}

// ************* Subject Button

$('#sel2').on("change", handleSubjectFormSubmit);

function handleSubjectFormSubmit(event) {
    event.preventDefault();
    console.log(allSubjects);

}

}); 
