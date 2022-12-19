import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context';

function About() {
    const {id} = useContext(Context)
    
    console.log(id);
  return (
    <div>
        <h1>About</h1>
        <h3>{id}</h3>
    </div>
  )
}

export default About