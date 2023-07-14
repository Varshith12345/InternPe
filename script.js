function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    const expression = document.getElementById('result').value;
    try {
      const result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  