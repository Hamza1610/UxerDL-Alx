import { Link } from 'react-router-dom';
import logo from './logo.png';


const Header = () => {

  return (
    <header className="App-header">
      <div><img src={logo} className='logo'  alt='LOGO' /></div>
      <div className='Nav-bar'>
        <div className='Nav-item'><Link to="/">Home</Link></div>
        <div className='Nav-item'><Link to="/api/">Books</Link></div>
        <div className='Nav-item'><Link to="/api/search">Search</Link></div>
        <div className='Nav-item'><Link to="/api/upload">Upload</Link></div>
      </div>
      <div>
        <i className="menuIcon" />
      </div>
    </header>
  );
};

export default Header;
