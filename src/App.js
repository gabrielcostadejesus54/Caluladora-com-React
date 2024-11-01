import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [valorPrimeiroNumero, setValorPrimeiroNumero] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (
      prev === '0' ? number : prev + number
    ));
  };

  const handleClearAll = () => {
    setCurrentNumber('0');
    setValorPrimeiroNumero(null);
    setOperator(null);
  };

  const handleOperator = (op) => {
    setValorPrimeiroNumero(Number(currentNumber));
    setCurrentNumber('0');
    setOperator(op);
  };

  const handleEquals = () => {
    if (valorPrimeiroNumero !== null && operator) {
      const segundoNumero = Number(currentNumber);
      let resultado;

      switch (operator) {
        case '+':
          resultado = valorPrimeiroNumero + segundoNumero;
          break;
        case '-':
          resultado = valorPrimeiroNumero - segundoNumero;
          break;
        case 'x':
          resultado = valorPrimeiroNumero * segundoNumero;
          break;
        case '/':
          resultado = valorPrimeiroNumero / segundoNumero;
          break;
        default:
          return;
      }

      setCurrentNumber(String(resultado));
      setValorPrimeiroNumero(null);
      setOperator(null);
    }
  };

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={() => handleOperator('x')}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={() => handleOperator('-')}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={() => handleOperator('+')}/>
          </Row>
          <Row>
            <Button label="C" onClick={handleClearAll}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="/" onClick={() => handleOperator('/')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
