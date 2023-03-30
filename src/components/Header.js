import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from '../logo.svg';
function Header(props) {
   return (
      <header className="header container">
         <img src={logo} alt="Логотип" className="header__logo" />
         <div className="header__info">
            {props.email && <p className='header__email'></p>}
            <Routes>
               <Route path='/signin' element={
                  <Link className='header__button' to='/signup'>Зарегистрироваться</Link>
               } />
               <Route path='/signup' element={
                  <Link className='header__button' to='/signin'>Войти</Link>
               } />
               <Route path='/' element={
                  <Link className='header__button' to='/signin' onClick={props.onLogout}>Войти</Link>
               } />
            </Routes>


         </div>
      </header>
   );
}

export default Header;
