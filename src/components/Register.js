import React from 'react';
function Register() {
   return (
      <section className="auth-form">
         <h2 className="auth-form__title">Регистрация</h2>
         <form className="auth-form__form">
            <input className="auth-form__email" placeholder="Email"></input>
            <input className="auth-form__password" placeholder="Пароль"></input>
            <button type="submit" className="auth-form__button">Зарегистрироваться</button>
         </form>
         <div className="auth-form__login">
            <p className="auth-form__question">Уже зарегистрированы?</p>
            <p className="auth-form__link">Войти</p>
         </div>
      </section>
   );
}
export default Register;