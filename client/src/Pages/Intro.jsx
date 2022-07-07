import React from 'react'
import Nav from "../Parts/Nav";
import Wall from '../Parts/Wall';


const Intro = ({User,setUser,LogInFormOn, RegInFormOn, UserOptionOn,AbosolutHandler}) => {
  return (
    <>
    <Nav
    User={User}
    AbosolutHandler={AbosolutHandler}
    />
    <Wall
        LogInFormOn={LogInFormOn}
        RegInFormOn={RegInFormOn}
        UserOptionOn={UserOptionOn}
        AbosolutHandler={AbosolutHandler}
        User = {User}
        setUser={setUser}
    />

    </>
  )
}

export default Intro