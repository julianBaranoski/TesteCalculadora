function totalConta(number1, number2, operador){
    var output = 0;
      switch (operador) {
          case "+":
            output = Number(number1) + Number(number2);
            break;
    
          case "-":
            output = number1 - number2;
            break;
    
          case "*":
            output = number1 * number2;
            break;
    
          case "/":
            if(number2 == 0){
              output = 0;
            }else {
              output = number1 / number2;
            }
            break;
      }
      return output;
  }
  
  
  module.exports = totalConta;