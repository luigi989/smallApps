import { useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function Bin2Dec() {
  const [binaryNumber, setBinaryNumber] = useState(0);
  const [result, setResult] = useState();
  const [alert, setAlert] = useState(false);

  const convertToDec = (binaryNum) => {
    var pattern = new RegExp("[2-9A-Za-z]"); // Test if number has numbers > 1 and letters
    if(pattern.test(binaryNum)) {
      setResult();
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      setResult(parseInt(binaryNum, 2));
    }
  }

  return (
    <div className="content text-light">
        <h2>Bin2Dec</h2>
        <label>A tool to convert binary numbers to decimal numbers with base 2.</label>
        <div>
          <label for="binary">Enter a binary number:</label>
          <input type="text" id="binary" name="binary" maxLength="8" onChange={e => setBinaryNumber(e.target.value)}></input>
        </div>
        <button onClick={e => convertToDec(binaryNumber)}>Convert</button>
        <h4>Result: {result}</h4>
      {alert ? 
      <Alert className="alert mb-0" variant="danger" onClose={() => setAlert(false)} dismissible>
        <Alert.Heading>The inserted number is not a valid binary number!</Alert.Heading>  
      </Alert> :
      null}
    </div>
  );
}