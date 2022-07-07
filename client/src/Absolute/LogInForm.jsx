import React from 'react'
import Input from '../components/Input'
import { useState } from 'react'
import axios from 'axios'

const NavForm = ({name,fce, setUser}) => {
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [Alert, setAlert] = useState(false)
  const [Alert2, setAlert2] = useState(false)
  const [AllUsers, setAllUsers] = useState()
  const [Test, setTest] = useState([
      {id: 6, title: 'Maruska', body: 'kypré'},
      {id: 7, title: 'Milada', body: 'Plochá jak sviňa'},
      {id: 8, title: 'Maruska', body: 'kypré'}
  ])
  async function prev(e){
    e.preventDefault()

    async function c (){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: Name, body:Password })}

      const data = await fetch('http://localhost:2000/getUser',requestOptions);
      const user =await data.json()
      if(user[0]===undefined)return setAlert2(true);
      setUser(user[0])

      setName('')
      setPassword('')
      fce('u')
    }
    c()
    
  }

  return (
        <form action="" onSubmit={(e)=>{prev(e)}} className='formNav'>
            <h3 className='formName'>
                {name}
            </h3>
            <Input name="Jmeno" type="text" value={Name} change={setName}/>
            <Input name="Heslo" type="password" value={Password} change={setPassword}/>
            {Alert&&<p className='formAlertText'>Nevyplňeno</p>}
            {Alert2&&<p className='formAlertText'>Uživatel neexistuje</p>}
            <Input name ="Odeslat" type="submit"/>
            
        </form>
  )
}

export default NavForm