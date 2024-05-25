import React from 'react';

function StepsHeader(){
    return (
        <header className="orders-steps-container ">
        <div className="orders-stedps-content">
            <h1 className="steps-title">
                SIGA AS <br /> ETAPAS

            </h1>
            <ul className="steps-items">
                <li>
                    <span className="steps-number">1</span>
                    Selecione os produtos e localizacao.
                </li>
                <li>
                    <span className="steps-number">2</span>
                    Depois clique <strong>ENVIAR PEDIDO</strong> os produtos e localizacao.
                </li>
             
            </ul>
            
        </div></header>
    );
}

export default StepsHeader;
