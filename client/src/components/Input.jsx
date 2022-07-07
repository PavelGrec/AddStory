import React from 'react'
import { useState } from 'react'

const Input = ({name, type, value, change, autofocus}) => {
    const [Submit, setSubmit] = useState(false)
    const number = Math.random()

    if(type=='submit')
    {
        return (
                <input type={type} value={name}
                className="formSubmit"></input>
                )
    }

        return (
            <div className='flexCol mb'>
                <label className='formLabel' htmlFor={number}>{name}:</label>
                <input className='formInput' type={type} id={number} autoComplete='true' value={value} onChange={(e)=>change(e.target.value)}></input>
            </div>
          )
}

export default Input