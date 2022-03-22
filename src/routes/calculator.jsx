import { useEffect, useState } from 'react';
import '../css/calculator.css';
/*
* User can see a display showing the current number entered or the result of the last operation.
* User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC' button (for clear all).
* User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored.
- User can click on an operation button to display the result of that operation on:
    - the result of the preceding operation and the last number entered OR
    - the last two numbers entered OR
    - the last number entered
- User can click the 'C' button to clear the last number or the last operation. If the users last entry was an operation the display will be updated to the value that preceded it.
* User can click the 'AC' button to clear all internal work areas and to set the display to 0.
* User can see 'ERR' displayed if any operation would exceed the 8 digit maximum.

Bonus Features
-  User can click a '+/-' button to change the sign of the number that is currently displayed.
- User can see a decimal point ('.') button on the entry pad to that allows floating point numbers up to 3 places to be entered 
  and operations to be carried out to the maximum number of decimal places entered for any one number.

TODO: If a coma is added the coma is removed in the removeIfZeroExists function.
*/
export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const [operator, setOperator] = useState("empty");
  const [operatorSet, setOperatorSet] = useState(false);
  const [numberDisplayed, setNumberDisplayed] = useState(0);

  useEffect(() => {
    setNumberDisplayed(total);
  }, [total, setTotal])

  const saveNumber = (number, newNumber) => {
    var totNumber = number;
    if((number + newNumber).toString().length <= 8) { //Check if length of number is 8 or smaller
      totNumber = number + newNumber;
    }
    totNumber = removeZeroIfExists(totNumber);
    if(!operatorSet) {
      setNumber1(totNumber);
    } else {
      setNumber2(totNumber);
    }
    setNumberDisplayed(totNumber);
  }
  
  const num1orNum2 = () => {
    if(!operatorSet) {
      return number1;
    } else {
      return number2;
    }
  }

  const setNum1orNum2 = (number) => {
    if(!operatorSet) {
      setNumber1(number);
    } else {
      setNumber2(number);
    }
  }

  const removeLastNumber = () => {
    if(numberDisplayed > 0 && numberDisplayed.toString().length > 1) {
      var slicedNumber = numberDisplayed.toString().slice(0, -1);
      setNumberDisplayed(slicedNumber);
      setNum1orNum2(slicedNumber);
    } else {
      setNumberDisplayed(0);
    }
  }

  const removeZeroIfExists = (number) => {
    var pattern = new RegExp("^0");
    if(pattern.test(number)) {
      return number.slice(1);
    } else {
      return number;
    }
  }

  const clearNumbers = () => {
    setNumberDisplayed(0);
    setNumber1(0);
    setNumber2(0);
    setOperatorSet(false);
  }
  
  const saveOperator = (operator) => {
    setOperator(operator);
    setOperatorSet(true);
    setNumberDisplayed(operator);
  }

  const calculate = () => {
    if(operatorSet && (number1 > 0 || number2 > 0)) {
      switch(operator) {
        case '+':
          (number1 + number2).toString().length > 8 ? setTotal("ERR") : setTotal(parseFloat(number1) + parseFloat(number2)); 
          break;
        case '-':
          (number1 - number2).toString().length > 8 ? setTotal("ERR") : setTotal(parseFloat(number1) - parseFloat(number2)); 
          break;
        case '*':
          (number1 * number2).toString().length > 8 ? setTotal("ERR") : setTotal(parseFloat(number1) * parseFloat(number2)); 
          break;
        case '/': 
          (number1 / number2).toString().length > 8 ? setTotal("ERR") : setTotal(parseFloat(number1) / parseFloat(number2)); 
        break;
        default:
          break;
      }
    } else {
      console.log("Something went wrong");
    }
  }

  const handleKeyPress = (event) => {
    if(event.keyCode === 13) {
      console.log("Works");
      saveNumber(num1orNum2(), event.target.textContent);
    }
  }

  return (
    <div className="content text-light">
        <h2>Calculator</h2>
        <p>{numberDisplayed}</p>
        <div className='grid-5x4'>
          <button className='grid-start' onClick={clearNumbers}>AC</button>
          <button onClick={removeLastNumber}>C</button>
          <button onClick={e => saveOperator(e.target.textContent)}>/</button>

          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>7</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>8</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>9</button>
          <button onClick={e => saveOperator(e.target.textContent)}>*</button>

          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>4</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>5</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>6</button>

          <button onClick={e => saveOperator(e.target.textContent)}>-</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>1</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>2</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>3</button>
          <button onClick={e => saveOperator(e.target.textContent)}>+</button>

          <button className='grid-start' onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>0</button>
          <button onClick={e => saveNumber(num1orNum2(), e.target.textContent)}>.</button>
          <button onClick={calculate}>=</button>
        </div>
    </div>
  );
}