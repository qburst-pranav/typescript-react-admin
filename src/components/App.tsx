import * as React from 'react';
import ProductSearch from '../containers/ProductSearch';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ProductSearch />
      </div>
    );
  }
}

export default App;
