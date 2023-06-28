import { useState } from "react";
import Card from "./card";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchedFile, setSearchedFile] = useState(''); 

  // Function to handle the API request and update the data state
  const handleSearch = async () => {

    try {
      const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ searchedFile: searchedFile }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      console.log('Error');
      return;
    }
  
    const json = await response.json();
    console.log(json);
    setData(json); // Update the data state with the fetched results
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (

    <div className="search-div">
      <form className="searchForm" onSubmit={handleSearch}>
        <input
          type="search"
          name="searchedFile"
          placeholder="Search books here"
          onChange={(e) => setSearchedFile(e.target.value)}
          value={searchedFile}
          className="searchInput"
          required
        />

        <button className="searchButton" type="submit" >
          <b>Search</b>
        </button>
      </form>
      <div>
        <h1>Search Results</h1>
        <div className="listRow">
                  {data && data.map((item) => (
                      <Card key={item._id} list={item} error={item.error}/>
                  ))}
        </div>
      </div>
    </div>
  )
}
export default Search;