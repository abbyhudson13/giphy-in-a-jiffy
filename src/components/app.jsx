import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    return (<div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="QWRtAK9uifSKEZx7LX"/>
        </div>
      </div>
        <div className="right-scene"></div>
          <GifList />
      </div>
    );
  }
}

export default App;
