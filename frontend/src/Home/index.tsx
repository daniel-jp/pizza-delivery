import './styles.css'

import {ReactComponent as MainImg } from'./img/deliver1.svg'
import Footer from '../footer'

function Home() {
  return (
    <>
    <div className="home-conteiner">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title"> 
          Faca o seu pedido <br/> que entregamos <br/>
          para voce!!
          </h1>
          <h3 className='home-subtitle'>
            Escolha o seu pedido e em poucos
           minutos <br/> levaremoss na sua porta</h3> 
           <a href="orders" className="home-btn-order">FAZER PEDIDO</a>
        </div>

        <div className="home-image">

          <MainImg/> 
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
