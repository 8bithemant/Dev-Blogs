import React from 'react';
import './App.css';
import { Link, BrowserRouter, Route } from 'react-router-dom'

import HomeScreen from './screens/homeScreen'
import ArticleScreen from './screens/articleScreen';

function App() {
  return (
    <BrowserRouter>
    
    <div className="grid-container">

    


    <main className="main">
      <div className="content">
        <Route path ='/' exact={true} component={HomeScreen}/>
        <Route path='/articles/hemant/:slug' component={ArticleScreen} />
      </div>
    </main>





    </div>
    
    </BrowserRouter>
  )
}

export default App;
