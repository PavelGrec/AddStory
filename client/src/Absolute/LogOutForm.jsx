import React from 'react'
import Input from '../components/Input'

const LogOutForm = ({name,fce,setUser}) => {

    function prev (e){
        e.preventDefault()
        setUser('false')
        fce('u')
    }

  return (
    <form action="" onSubmit={(e)=>{prev(e)}} className='formNav'>
    {/* <h3 className='formName'>
        {name}
    </h3> */}
    <Input name="Odhlásit se" type="submit"/>
    
</form>
  )
}

export default LogOutForm