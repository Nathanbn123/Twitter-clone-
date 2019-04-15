import React from "react";
import Header from "./header";
import Profile from "./prof";
import Tags from "./tags";
import Feed from "./feed";
import Peeps from './peeps';






function App(){

  var left = {

  }
  var right = {

  }
  var middle = {

  }
  var container = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }


  return (
    <div>
      <div>
      <Header/>
      </div>
      <div style={container}>
        <div style={left}>
          <Profile/>
          <Tags/>
        </div>
        <div style={middle}>
          <Feed/>
        </div>
        <div style={right}>
          <Peeps/>
      </div>

      </div>
    </div>
  );
}

export default App;
