import React from 'react'
import LogInForm from './../Absolute/LogInForm'
import RegistrForm from './../Absolute/RegistrForm'
import LogOutForm from '../Absolute/LogOutForm'

function Wall({LogInFormOn, RegInFormOn,UserOptionOn, setUser,AbosolutHandler,User}) {
  return (
    <div className="bgwall screen bg h-screen">
        <div className='width '>

            {User=='false'&&<main className='center h-screen'>
              <div>
              <h1>Zaregistruj se na nejmenší sociální síti</h1>
              <p>a pocítíš sílu samoty</p>
              </div>
            </main>}



            {LogInFormOn&&<LogInForm name="Příhlášení" fce={AbosolutHandler} setUser={setUser}/>}
            {RegInFormOn&&<RegistrForm name="Registrace" fce={AbosolutHandler}/>}
            {UserOptionOn&&<LogOutForm name="Odhlášení" fce={AbosolutHandler} setUser={setUser}/>}

        </div>

        
        
    </div>
  )
}

export default Wall