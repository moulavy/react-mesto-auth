import React from 'react';
function Login() {
   return (
      <section className="auth">
         <h2 className="auth__title">Вход</h2>
         <form className="auth__form">
            <input className="auth__email auth__input" placeholder="Email"></input>
            <input className="auth__password auth__input" placeholder="Пароль"></input>
            <button type="submit" className="auth__button">Войти</button>
         </form>
         
      </section>
   );
}
export default Login;