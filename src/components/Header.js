import logo from '../logo.svg';
function Header() {
   return (
      <header className="header container">
         <img src={logo} alt="Логотип" className="header__logo" />
         <div className="header__info">
         <p className="header__login"></p>
            <button className="header__logout-button"></button>
            
         </div>
      </header>
 );
}

export default Header;
