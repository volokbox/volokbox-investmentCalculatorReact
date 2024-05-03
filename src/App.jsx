import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
import './index.css';

function App() {
  const[ userInput, setUserInput ] = useState({
    initialInvestment: 15000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  function inputHandler(id, value){
      setUserInput(prevUserInput => {
          return{
              ...prevUserInput,
              [id]: + value
          } 
      });
  }

  return (
    <div>
      <Header/> 
      <UserInput userInput={userInput} onChange={inputHandler}/>
      <Result userInput={userInput}/>
    </div>
  )
}

export default App
