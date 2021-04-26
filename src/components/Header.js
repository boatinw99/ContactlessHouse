import React from 'react'
import houseLogo from './house-icon.png'
const Header = () => {
    return (
        <div className='header'>
            <img id="house-logo" src={houseLogo} width="80" height="80 "></img>
           <h1> Contactless House</h1>  
        </div>
    )
}

export default Header
