import React from 'react';
import paintings from './painting'
import 'semantic-ui-css/semantic.min.css';
// import {Test} from './NavBar'
import NavBar from './NavBar'
import PaintingList from './PaintingList'


function App() {
  console.log(paintings)
  return (
    <div>
      <NavBar />
      <PaintingList paintingObjs={paintings}/>
    </div>
  );
}

export default App;
