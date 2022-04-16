import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Bulud xidmetleri uzre destekciniz</h1>
            
            <Typed
                className='typed-text'
                strings={[
                    'Bawleytenant',
                    'Boluk komandiri',
                    'Canavarzabit']}
                    typeSpeed={40}
                    backSpeed={50}
                    // attr="placeholder"
                    loop >
                    {/* <input type="text"/> */}
                </Typed>
                <a href="" className='downloadCV'>CV-mi endir</a>
        </div>
        
    </div>
  )
}

export default Header