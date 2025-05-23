import './App.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState([]);

  function handleInputAddition(){
    
  }

  return (
    <>
      <div className='flex flex-row justify-center items-center'> 
        <form action="">
          <input 
            type="text"
            placeholder='Enter an Input'  
            className='p-2 border-1 border-black'/>
        </form>
      </div>
    </>
  )
}

export default App
