import './styles.css'
import {ReactComponent as Instagram }from'./icons/Instagram.svg'
import {ReactComponent as Linkedin }from'./icons/Linkedin.svg'

import {ReactComponent as Github }from'./icons/GitHub.svg'

function Footer() {
  return (
    <footer className='main-footer'>
© 2024 Your Company Name. All rights reserved. 

<div className='footer-icons'>
    <a href="https://www.instagram.com/dannyscodeindev/" target='_new'> <Instagram/> </a>
    <a href="https://www.linkedin.com/in/daniel-j-paulino-737808198/" target='_new'><Linkedin/></a>
    <a href="https://github.com/daniel-jp?tab=repositories" target='_new'><Github/></a>
</div>
</footer>
  )
}

export default Footer