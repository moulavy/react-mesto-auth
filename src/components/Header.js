import logo from '../logo.svg';
function Header() {
   return (
      <header className="header container">
         <img src={logo} alt="Логотип" className="header__logo" />
      </header>
 );
}

export default Header;
