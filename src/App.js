import { useState } from 'react';
import Dice from './Dise';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecords] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setRecords([...records, nextNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setRecords([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick} >던지기</Button>
        <Button onClick={handleClearClick} >처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color='blue' num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{records.join(', ')}</p>
      </div>
    </div>

  );
}

export default App;
