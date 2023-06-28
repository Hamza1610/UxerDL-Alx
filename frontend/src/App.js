import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// components
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Search from "./components/Search";

function App() {  

  return (
    <Router>
    <div className="App">
      <Header />
      <div className='contents'>
        <Switch>
          <Route exact path='/api/'>
            <List />
          </Route>
          <Route exact path='/api/search'>
            <Search />
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
