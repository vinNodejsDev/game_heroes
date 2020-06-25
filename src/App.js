import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './assets/css/reset.css'
import AppLayout from './components/AppLayout/AppLayout';
import Dashboard from './components/Dashboard/Dashboard';
import HeroesList from './components/HeroesList/HeroesList';
import HeroDetailsPage from './components/HeroDetailsPage/HeroDetailsPage';

function App() {
  return (
    <BrowserRouter>
    <AppLayout>
      
        <Route path="/" exact component={Dashboard}/>
        <Route path="/heroes_list" exact component={HeroesList}/>
        <Route path="/heroes/:heroesId" exact component={HeroDetailsPage}/>
      
    </AppLayout>
    </BrowserRouter>
  );
}

export default App;
