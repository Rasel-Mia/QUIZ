
function submitAnswers() {
	
  
  
  var totalQuestions = 5;
  
  
  
  var score = 0;
  
  
  
  var answers = ['a', 'd', 'a','b','d'];
  
  
  
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;
  
  
  
  for (var i = 1; i < totalQuestions+1; i++) {
	  
    
	
    if (eval('q'+i) == null || eval('q'+i) == '') {
      alert('You did not answer the question number ' + i);
	  
      
	  
      return false;
	  
      
	  
    } else {
		
      
	  
      if (eval('q'+i) === answers[i-1]) {
		  
        
		
        score += 1;
      };
    };
  };
  
  
  
  alert('Respons ' + score + ' of ' + totalQuestions + '  corrects');
}; 
 
