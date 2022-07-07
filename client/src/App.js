
import './App.css';
import Intro from './Pages/Intro';
import { useState } from 'react';

function App() {
  const [User, setUser] = useState('false')
  const [LogInFormOn, setLogInFormOn] = useState(false)
  const [RegInFormOn, setRegInFormOn] = useState(false)
  const [UserOptionOn, setUserOptionOn] = useState(false)

  const AbosolutHandler =(e)=>{
    setUserOptionOn(false)
    setLogInFormOn(false)
    setRegInFormOn(false)

    if(e==='LogIn'){return setLogInFormOn(!LogInFormOn)}
    if(e==='RegIn'){return setRegInFormOn(!RegInFormOn)}
    if(e==='UserOption'){return setUserOptionOn(!UserOptionOn)} 
  }
  return (
    <div className="App">
      <Intro
      setUser={setUser}
      User={User}
      LogInFormOn={LogInFormOn}
      RegInFormOn={RegInFormOn}
      UserOptionOn={UserOptionOn}
      AbosolutHandler={AbosolutHandler}
      />
    </div>
  );
}

export default App;
