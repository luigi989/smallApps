import { useEffect, useState } from 'react';
import NumberButton from '../components/NumberButton';
import OperatorButton from '../components/OperatorButton';
import Page from '../components/Page';
/*
* User can see a display showing the current number entered or the result of the last operation.
* User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC' button (for clear all).
* User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored.
- User can click on an operation button to display the result of that operation on:
    - the result of the preceding operation and the last number entered OR
    - the last two numbers entered OR
    - the last number entered
* User can click the 'C' button to clear the last number or the last operation. If the users last entry was an operation the display will be updated to the value that preceded it.
* User can click the 'AC' button to clear all internal work areas and to set the display to 0.
* User can see 'ERR' displayed if any operation would exceed the 8 digit maximum.

Bonus Features
-  User can click a '+/-' button to change the sign of the number that is currently displayed.
- User can see a decimal point ('.') button on the entry pad to that allows floating point numbers up to 3 places to be entered 
  and operations to be carried out to the maximum number of decimal places entered for any one number.

TODO: If a coma is added the coma is removed in the removeIfZeroExists function.
*/

enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/',
  Equal = '=',
  None = '',
}

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [numberDisplayed, setNumberDisplayed] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState(Operator.None);
  const [error, setError] = useState('');

  const saveNumber = (number: number) => {
    if (selectedOperator == Operator.None) {
      if (number1.toString().length < 8) {
        if (number1 != 0) {
          var newNum = (number1 * 10) + number;
          setNumber1(newNum);
          setNumberDisplayed(newNum);
        } else {
          setNumber1(number);
          setNumberDisplayed(number);
        }
      }
    } else {
      if (number2.toString().length < 8) {
        if (number2 != 0) {
          var newNum = (number2 * 10) + number;
          setNumber2(newNum);
          setNumberDisplayed(newNum);
        } else {
          setNumber2(number);
          setNumberDisplayed(number);
        }
      }
    }
  }

  const removeLastNumber = () => {
    if (selectedOperator == Operator.None) {
      if (number1 != 0) {
        var newNum = Math.floor(number1 / 10)
        setNumber1(newNum)
        setNumberDisplayed(newNum);
      }
    } else {
      if (number2 != 0) {
        var newNum = Math.floor(number2 / 10)
        setNumber2(newNum)
        setNumberDisplayed(newNum);
      }
    }
  }

  const clearNumbers = () => {
    setNumberDisplayed(0);
    setNumber1(0);
    setNumber2(0);
    setSelectedOperator(Operator.None);
    setError('');
  }

  const saveOperator = (operator : Operator) => {
    setSelectedOperator(operator);
  }

  const calculate = () => {
    if (selectedOperator && (number1 > 0 || number2 > 0)) {
      var calculatedNumber = 0;
      switch (selectedOperator) {
        case Operator.Add:
          calculatedNumber = number1 + number2;
          break;
        case Operator.Subtract:
          calculatedNumber = number1 - number2;
          break;
        case Operator.Multiply:
          calculatedNumber = number1 * number2;
          break;
        case Operator.Divide:
          calculatedNumber = number1 / number2;
          break;
        default:
          break;
      }      
      if(calculatedNumber.toString().length > 8) {
        setError('ERR');
      } else {
        setNumberDisplayed(calculatedNumber);
        setNumber1(calculatedNumber);
      }
      setNumber2(0);
      setSelectedOperator(Operator.Equal);
    }
  }

  return (
    <Page
      title='Calculator'
      desc='A tool to calculate numbers, even floating numbers.'>
      <div>
        <div className='w-full flex justify-between'>
          <p>{selectedOperator}</p>
          {!error && <p>{numberDisplayed}</p>}
          {error && <p>{error}</p>}
        </div>
        <div className='grid grid-rows-5 grid-cols-4 gap-1'>
          <OperatorButton value={'AC'} func={() => clearNumbers()} />
          <OperatorButton value={'C'} func={() => removeLastNumber()} />
          <OperatorButton value={' '} />
          <OperatorButton value={'/'} func={() => saveOperator(Operator.Divide)} />

          <NumberButton value={7} func={() => saveNumber(7)} />
          <NumberButton value={8} func={() => saveNumber(8)} />
          <NumberButton value={9} func={() => saveNumber(9)} />

          <OperatorButton value={'*'} func={() => saveOperator(Operator.Multiply)} />

          <NumberButton value={4} func={() => saveNumber(4)} />
          <NumberButton value={5} func={() => saveNumber(5)} />
          <NumberButton value={6} func={() => saveNumber(6)} />
          <OperatorButton value={'-'} func={() => saveOperator(Operator.Subtract)} />

          <NumberButton value={1} func={() => saveNumber(1)} />
          <NumberButton value={2} func={() => saveNumber(2)} />
          <NumberButton value={3} func={() => saveNumber(3)} />
          <OperatorButton value={'+'} func={() => saveOperator(Operator.Add)} />

          <OperatorButton value={' '} />
          <NumberButton value={0} func={() => saveNumber(0)} />
          <OperatorButton value={' '} />
          <OperatorButton value={'='} func={() => calculate()} />
        </div>

      </div>
    </Page>

  );
}