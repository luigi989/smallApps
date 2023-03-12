import { useState } from 'react';
import Button from '../components/Button';
import Page from '../components/Page';

export default function Bin2Dec() {
  const [binaryNumber, setBinaryNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [alert, setAlert] = useState(false);

  const convertToDec = (binaryNum: number) => {
    var pattern = new RegExp("[2-9A-Za-z]"); // Test if number has numbers > 1 and letters        
    if (pattern.test(binaryNum.toString())) {
      setResult(0);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      setResult(parseInt(binaryNum.toString(), 2));
    }
  }

  return (
    <Page
      title='Bin2Dec'
      desc='A tool to convert binary numbers to decimal numbers with base 2.'>
      <div className='flex gap-2'>
        <label htmlFor="binary">Enter a binary number:</label>

        <input
          type="text"
          id="binary"
          name="binary"
          maxLength={8}
          onChange={e => setBinaryNumber(parseInt(e.target.value))}
          placeholder="Type here"
          className="input input-bordered" />
        <Button onClick={() => convertToDec(binaryNumber)}>Convert</Button>
      </div>
      <h4 className='mt-4 text-xl'>Result: {result}</h4>
    </Page>
  );
}