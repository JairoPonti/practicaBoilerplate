import React from 'react';
import style from './styles/app.module.css';
// import Logo from './img/logo2.png'

const App = () => {
    return (
        <div className={style.div}>
            <p className={style.p}> Hola, soy el boilerplate!</p>
            {/* <img src={Logo} className="App-logo" alt="logo"/> */}
        </div>
    )
}

export default App

