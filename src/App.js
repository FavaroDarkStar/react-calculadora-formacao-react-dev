import { Container, Content, Row, Column } from './styles';
import Input from './components/Input';
import Button from './components/Button'
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber]= useState('0');
  const [firstNumber, setFirstNumber] = useState('0'); 
  const [operation, setOperation] = useState('');


  const handleAddNumber = (number) => {
    setCurrentNumber(prev=> `${prev ==='0'?'':prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      console.log(String(sum));
      setFirstNumber('0');
      setCurrentNumber(String(sum)); 
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      console.log(String(minus));
      setFirstNumber('0');
      setCurrentNumber(String(minus)); 
    }
  }

  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('X');
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(mult)); 
    }
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'X':
          handleMultNumber();
          break;
        default:
          break;
      }
    }else{

    }
  }


  
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        {/* 1°Linha */}
        <Row>
          <Button label="x" onClick={handleMultNumber}/>
          <Button label="/" onClick={() => handleAddNumber('/')}/>
          <Button label="C" onClick={handleOnClear}/> {/*Limpar*/}
          <Button label="." onClick={() => handleAddNumber('.')}/> {/*Vazio definir dps*/}
        </Row>
        {/* 2°Linha */}
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        {/* 3°Linha */}
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        {/* 4°Linha */}
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;