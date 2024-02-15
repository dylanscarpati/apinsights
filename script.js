document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const mcScore = parseFloat(document.getElementById('multiple-choice').value);
    const frq1Score = parseFloat(document.getElementById('frq1').value);
    // Calculate total score
    const totalScore = mcScore + frq1Score + /* Add scores for other free response questions */;
    // Determine AP score
    let apScore = '';
    if (totalScore < 28) {
      apScore = '1';
    } else if (totalScore < 51) {
      apScore = '2';
    } else if (totalScore < 74) {
      apScore = '3';
    } else if (totalScore < 93) {
      apScore = '4';
    } else {
      apScore = '5';
    }
    document.getElementById('result').innerHTML = `<p>Your estimated AP Biology score is: ${apScore}</p>`;
  });
  
  document.getElementById('multiple-choice').addEventListener('input', function() {
    document.getElementById('mc-output').textContent = this.value;
  });
  
  document.getElementById('frq1').addEventListener('input', function() {
    document.getElementById('frq1-output').textContent = this.value;
  });
  