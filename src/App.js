import React from 'react';
import Header from "./component/Header";
import Meme from "./component/Meme";
import "./style/index.css";


function App({memesData})
{
  return( 
    <div>
      
      <Header />
      <Meme />

    </div>
  )
}
export default App;