import React from 'react'
import NavLogo from '../components/NavLogo'
import NavButton from '../components/NavButton'

const Nav = ({User, AbosolutHandler}) => {
  return (
    <nav className='screen'>
        <div className='width flex between x'>
            <NavLogo/>
            <div className="buttons">
            {User==='false'&&<NavButton text='Přihlasit se' fce={()=>AbosolutHandler('LogIn')}/>}
            {User==='false'&&<NavButton text='Registrace' fce={()=>AbosolutHandler('RegIn')}/>}
            {User!=='false'&&<NavButton text={'Vítej '+User.title} fce={()=>AbosolutHandler('UserOption')}/>}
            </div>
        </div>
    </nav>
  )
}

export default Nav