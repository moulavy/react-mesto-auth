import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from '../logo.svg';
function Header(props) {
   console.log(props.email);
   return (
      <header className="header container">
         <img src={logo} alt="Логотип" className="header__logo" />
         <div className="header__info">
            {props.email && <p className='header__email'>{props.email}</p>}
            <Routes>
               <Route path='/signin' element={
                  <Link className='header__button' to='/signup'>Регистрация</Link>
               } />
               <Route path='/signup' element={
                  <Link className='header__button' to='/signin'>Войти</Link>
               } />
               <Route path='/' element={
                  <Link className='header__button header__button_value_logout' to='/signin' onClick={props.onLogout}>Выйти</Link>
               } />
            </Routes>


         </div>
      </header>
   );
}

export default Header;
