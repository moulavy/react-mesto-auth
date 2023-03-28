import React from 'react';
function Login() {
   return (
      <section className="auth-form">
         <h2 className="auth-form__title">Вход</h2>
         <form className="auth-form__form">
            <input className="auth-form__email" placeholder="Email"></input>
            <input className="auth-form__password" placeholder="Пароль"></input>
            <button type="submit" className="auth-form__button">Войти</button>
         </form>
         
      </section>
   );
}
export default Login;