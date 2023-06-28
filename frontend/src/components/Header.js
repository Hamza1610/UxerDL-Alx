import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = ({ searchData, onSearch }) => {
  const [searchedFile, setSearchedFile] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(searchedFile); // Call the onSearch function passed as a prop
    setSearchedFile(''); // Clear the input after submitting the form
  };

  const inputReset = (e) => {
    e.preventDefault();
    setSearchedFile('');
    console.log('Input Reset Clicked');
  };

  return (
    <header className="App-header">
      <div>LOGO</div>
      <form className="searchForm" onSubmit={submitHandler}>
        <input
          type="search"
          name="searchedFile"
          placeholder="Search books here"
          onChange={(e) => setSearchedFile(e.target.value)}
          value={searchedFile}
          className="searchInput"
          required
        />

        <Link to="/api/search"><button className="searchButton" type="submit" onClick={inputReset}>
          <b>Search</b>
        </button></Link>
      </form>
      <div>
        <i className="menuIcon" />
      </div>
    </header>
  );
};

export default Header;
