$(document).ready(function() {
  
  $('#sel1').on("change", handleTutorFormSubmit);
 
  function handleTutorFormSubmit(event) {
    event.preventDefault();
  
    var selectBox = document.getElementById("sel1");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (!selectedValue) {
      return;
    }
  
    getTutor(selectedValue);
    getTutorAvailability();
    showModal();
  
  };
 
  function getTutor(tutorData) {
     $.get("/api/users/" + tutorData)
     .then(parseTutorData);
  }

  // function getTutorAvailability() {
  //    $.get("/api/availabilities/")
  //    .then(parseAvailData);
  // }

  var tutorModal = $('#myModal');
  var tutorModalBody = $('.modal-body');

  function parseTutorData (data) {
     // console.log(data); 
     $('#myModalLabel').append("<h4>" + data.firstName + "</h4><div class = 'col-lg-2'> <img class='modalImg' src ='assets/img/tutor" + data.id+ ".jpg'></div>");
     tutorModalBody.append("<p>" + data.about + "</p>");
  }

  function parseAvailData (data) {
     tutorModalBody.append(

    //   for (var i = 0; i >= data.length; i++) {
      "<p>Availabile: " + data[0].day + " " + data[0].timeSlot + "</p>"
    // }

      );
  }

  function showModal(){
    tutorModal.modal('show');
  }


// **************

$('#sel2').on("change", handleSubjectFormSubmit);

var tutorRow =" ";
var tutorHeader = " ";
var userIdSubjTutor= [];

// grab SubjectId value from dropdown menu, then run function filterSubjects where the params are the selected SubjectId value

function handleSubjectFormSubmit(event) {
    event.preventDefault();
  
    var selectBox2 = document.getElementById("sel2");
    var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;

    if (!selectedValue2) {
      return;
    }
    //reset tutor data fxn
    userIdSubjTutor= [];
    tutorRow =" ";
    // tutorHeader = " ";
    
    filterSubjects(selectedValue2);
  
  };

//

//global variable to store array of each tutor's userId that corresponds to a selected subject

 

//grab all rows of tutors who have the SubjectId that was selected in the dropdown

  function filterSubjects(data){
       $.get("/api/usersubjects/" + data)
     .then(parseUserSubjectData);
  }

//run for loop through all the userIds and push just the userId into the userIdSubjTutor object, then fire off collectTutors function to run through each item in the userIdSubjTutor object in the user database to pull all the information for each tutor. 

  function parseUserSubjectData (data) {
    if (data.length === 0) {
      noTutors();
    }

    for (var i = 0; i < data.length; i++) {
      // var userIdExp = data[i];
      // userIdSubjTutor.push(userIdExp);
      tutorId = data[i].UserId;
      console.log("tutorId " + tutorId);
      userIdSubjTutor.push(tutorId);
    }

    console.log ("array of tutorids " + userIdSubjTutor);
    
    collectTutors(userIdSubjTutor); 
  }

function noTutors(){
    $('.tutorRow').html("<div class='col-xs-12 col-md-12 col-lg-12'><h4>There are no tutors that fit your search. Please check another subject.</h4></div>")
  }

//run through each item in the userIdSubjTutor object in the user database to pull all the information for each tutor.

  function collectTutors(data){
     for (var i = 0; i < data.length; i++) {
      var selectTutor = data[i];
      $.get("/api/users/" + selectTutor)
       .then(createTutorRow);
      }    
  }

  //create a row for each tutor w/ html and add it to the tutorRow variable.  THIS IS PROBABLY WHERE YOU NEED TO USE RECURSION

  function createTutorRow(data) {
    console.log (data.id);
    tutorRow += "<div class='tutorThumbnailContainer col-xs-6 col-md-3 col-lg-3'><div class='thumbnail tutorThumbnail'><img src ='assets/img/tutor"+ data.id +".jpg'><div class='caption'><h4 class = 'capitalize tutorName'>" + data.firstName +"</h4><p>" + data.about + "</p><a href='#'' class='btn btn-default btn-xs capitalize' role='button'>Meet " + data.firstName + "</a></div></div></div>";
   
    //RUNNING THIS HERE BECAUSE I CAN'T
    showTutorRow(tutorRow); 

  }

//display tutorRow on page

function showTutorRow(data) {
   $('.tutorRow').html(data);
   // console.log(data)
}

});
