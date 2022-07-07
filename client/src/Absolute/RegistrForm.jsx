import React from 'react';
import { useState } from 'react';
import Input from './../components/Input';
import axios from 'axios';

const RegistrForm = ({name, fce}) => {

    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswortAgain, setPasswortAgain] = useState('')
    const [Alert, setAlert] = useState(false)
    const [Alert2, setAlert2] = useState(false)
    const [Alert3, setAlert3] = useState(false)

    function prev(e){
        e.preventDefault()
        if(Name===''||Password==''||PasswortAgain=='')return setAlert(true)
        setAlert(false)
        if(Password !== PasswortAgain) return setAlert2(true)
        if(Name.length<3) return setAlert3(true)
        setAlert2(false)
    
        axios.post('http://localhost:2000/save-materials',{title:Name,body:Password})
          .catch((err)=>console.log(err));
    
        setName('')
        setPassword('')
        fce('u')
      }

  return (
    <form action="" onSubmit={(e)=>{prev(e)}} className='formNav'>
            <h3 className='formName'>
                {name}
            </h3>
            <Input name="Jmeno" type="text" value={Name} change={setName}/>
            <Input name="Heslo" type="password" value={Password} change={setPassword}/>
            <Input name="Znovu heslo" type="password" value={PasswortAgain} change={setPasswortAgain}/>
            {Alert&&<p className='formAlertText'>Nevyplňeno</p>}
            {Alert2&&<p className='formAlertText'>Hesla se neshoduji</p>}
            {Alert3&&<p className='formAlertText'>Uživatelske jmeno je príliš krátké</p>}
            <Input name ="Odeslat" type="submit"/>
            
    </form>
  )
}

export default RegistrForm