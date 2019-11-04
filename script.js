
function submitAnswers() {
	
  // This is the total of questions so we can loop through all of thems and at the end show a result.
  
  var totalQuestions = 5;
  
  // Score 0 to display the puntuation, each correct answer adds 1.
  
  var score = 0;
  
  // Array of all the answers in order of the questions from top to bottom.
  
  var answers = ['a', 'd', 'a','b','d'];
  
  // Takes the value of the selected radio button with the  name q1, q2, q3 from the form 'form'.
  
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;
  
  // Loops through all the answers
  
  for (var i = 1; i < totalQuestions+1; i++) {
	  
    //Evaluates if q1, q2, q3 is null or empty
	
    if (eval('q'+i) == null || eval('q'+i) == '') {
      alert('You did not answer the question number ' + i);
	  
      // Returns false so the form is not send.
	  
      return false;
	  
      // if is not null or empty
	  
    } else {
		
      // Evaluates if the selection is the same as the answer inside the array of the answers.
	  
      if (eval('q'+i) === answers[i-1]) {
		  
        // If correct then adds 1 to the score.
		
        score += 1;
      };
    };
  };
  
  // Alerts how many correct answers you got.
  
  alert('Respons ' + score + ' of ' + totalQuestions + '  corrects');
}; 
 
