function checkAnswers() {
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var result = document.getElementById('result');
    
    if (q1 && q2 && q3) {
      var score = 0;
      
      if (q1.value === 'c') {
        score += 1;
      }
      
      if (q2.value === 'a') {
        score += 1;
      }
      
      if (q3.value === 'b') {
        score += 1;
      }
      
      result.innerHTML = "Você acertou " + score + " de 3 perguntas.";
    }
    }