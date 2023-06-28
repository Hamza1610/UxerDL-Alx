
const Search = ({ searchData, data }) => {

  return (

    <div className="search-div">
      <h1>Search Results</h1>
      <p>Search Query: {searchData}</p>

      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
export default Search;