import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
// components
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Search from "./components/Search";

function App() {  
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState([]);
  const history = useHistory();

  // Function to handle the API request and update the data state
  const handleSearch = async (searchValue) => {

    try {
      const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ searchedFile: searchValue }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      console.log('Error');
      return;
    }
  
    const responseData = await response.json();
    setData(responseData); // Update the data state with the fetched results
    history.push('/api/search'); // Navigate to the '/api/search' route
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (
    <Router>
    <div className="App">
      <Header  searchData={searchData}  onSearch={handleSearch} />
      <div className='contents'>
        <Switch>
          <Route exact path='/api/'>
            <List />
          </Route>
          <Route exact path='/api/search'>
            <Search  searchData={searchData} data={data} />
          </Route>
          <Route exact path='/api/upload'>
            <Upload />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
