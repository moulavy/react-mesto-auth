import React from 'react';
function Register() {
   return (
      <section className="auth">
         <h2 className="auth__title">Регистрация</h2>
         <form className="auth__form">
            <input className="auth__email auth__input" placeholder="Email"></input>
            <input className="auth__password auth__input" placeholder="Пароль"></input>
            <button type="submit" className="auth__button">Зарегистрироваться</button>
         </form>
         <div className="auth__login">
            <p className="auth__question">Уже зарегистрированы?</p>
            <p className="auth__link">Войти</p>
         </div>
      </section>
   );
}
export default Register;