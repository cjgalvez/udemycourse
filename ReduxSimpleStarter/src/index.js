import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDjqr6uLXrNDhu_-RNGVKJTFIuxG9WF4Is"; //Using lachozadeldruida@gmail.com

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
