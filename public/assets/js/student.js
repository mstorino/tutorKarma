var selectedValue;
var tutorModal = $('#myModal');
var tutorModalBody = $('.modal-body');

$(document).ready(function() {
  
  $('#sel1').on("change", handleTutorFormSubmit);
 
  $('#sel2').on("change", handleSubjectFormSubmit);

// Tutor Modal .js to parse tutorobject of all tutors grabbed on get /student
  
  // select tutor from drop down box and get userId

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

  //use userId to collect relevant information for tutor and render in modal
  //then run function to match userId to subject table and display subjects in modal

  function parseTutorData (data) {
      console.log(selectedValue);
      for (var i = 0; i < allTutors.length; i++) {
        if (selectedValue == parseInt(allTutors[i].id)) {
          $('.modal-title').html(allTutors[i].firstName);
          $('.modal-body').html("<h4><strong>About:</strong> " + allTutors[i].about + "</p>");
          $('.modal-photo').html("<img src ='assets/img/tutor" + allTutors[i].id + ".jpg'>");
          $('.modal-footer').html("<form action='/student/" + allTutors[i].id + "?_method=PUT' method='POST'><input type = 'hidden' name = 'available' value = '0'><button type='submit' class='btn btn-info btn-primary CRUDSubmit'>Book A Session With " + allTutors[i].firstName+"</button></form>")
          
          matchTutorSubjects(allTutors[i].SubjectId);

          showModal();
         }    
      }
  }

  //match userId to subject table

  function matchTutorSubjects (data) {
    
    for (var j = 0; j < allSubjects.length; j++) {
      
      if (data == allSubjects[j].id) {
        // console.log(allSubjects[j].subjectName)
        $('.modal-subj').html("<h4><strong>Subject:</strong> " + allSubjects[j].subjectName + "</h4>");
      }
    }
  }

  //display modal with specific tutor information
  function showModal(){
    tutorModal.modal('show');    
  }



// Subject Button

var selectedValue2;
var userIdSubjTutor = [];
var tutorRow = "";

//reset state

  function resetTutorsBySubject(){
    selectedValue2 = 0;
    userIdSubjTutor = [];
    tutorRow = "";
  }

//take in subjectID from dropdown menu
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

//parse object of allTutors to find out where userID has relevant subjectID
//run function to create row of tutors with relevant subjectID
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

//function to create row of tutors with relevant subjectID
  function createTutorRow(data) {
      for (var i = 0; i < data.length; i++) {
        tutorRow += "<div class='container tutorThumbnailContainer col-xs-6 col-md-3 col-lg-3'><div class='thumbnail tutorThumbnail'><img src ='assets/img/tutor" + data[i].id + ".jpg'><div class='tutorCaption'><h4 class = 'capitalize tutorName'>" + data[i].firstName + "</h4><p>" + data[i].about + "<form action='/student/" + data[i].id + "?_method=PUT' method='POST'><input type = 'hidden' name = 'available' value = '0'><button type='submit' class='btn btn-info btn-primary bookTutorBtn'>Book A Session With " + data[i].firstName+"</button></form></div></div></div>"
      }
      
      showTutorRow(tutorRow); 

    }

// display the row of relevant tutors by subject
  function showTutorRow(data) {
     $('.tutorRow').html(data);
  }



}); 
