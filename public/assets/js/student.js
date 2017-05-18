var selectedValue;
var tutorModal = $('#myModal');
var tutorModalBody = $('.modal-body');

$(document).ready(function() {
  
  $('#sel1').on("change", handleTutorFormSubmit);
 
  // $('.closeBtn').on("click", resetState);
  $('#sel2').on("change", handleSubjectFormSubmit);

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

      // console.log(allTutors[i].id);
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

var selectedValue2;
var userIdSubjTutor = [];
var tutorRow = "";

function resetTutorsBySubject(){
  selectedValue2 = 0;
  userIdSubjTutor = [];
  tutorRow = "";
}

function handleSubjectFormSubmit(event) {
    event.preventDefault();
    // console.log(allSubjects);
    var selectBox2 = document.getElementById("sel2");
    selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;

    if (!selectedValue2) {
      return;
    }
    
    parseTutorBySubject(allTutors)
    resetTutorsBySubject();

}


function parseTutorBySubject (data) {
  console.log(selectedValue2);
    for (var i = 0; i < allTutors.length; i++) {
      // console.log(parseInt(allTutors[i].SubjectId))
      if (parseInt(selectedValue2) === parseInt(allTutors[i].SubjectId)) {
        userIdSubjTutor.push(allTutors[i]);
       }    
    }
  createTutorRow(userIdSubjTutor);
}

function createTutorRow(data) {
    for (var i = 0; i < data.length; i++) {
      tutorRow += "<div class='container tutorThumbnailContainer col-xs-6 col-md-3 col-lg-3'><div class='thumbnail tutorThumbnail'><img src ='assets/img/tutor" + data[i].id + ".jpg'><div class='tutorCaption'><h4 class = 'capitalize tutorName'>" + data[i].firstName + "</h4><p>" + data[i].about + "</p><a href='#' class='btn btn-default btn-sm capitalize bookTutorBtn' role='button'>Book" + data[i].firstName + "</a></div></div></div>"
    }
    showTutorRow(tutorRow); 

  }


function showTutorRow(data) {
   $('.tutorRow').html(data);
}



// ************* Book Tutor Button


}); 
