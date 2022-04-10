import React from 'react';
import './App.css';
// import {Route, BrowserRouter} from 'react-router-dom';

import Navbar from './components/navbar/navbar.components';
import TeamPage from './pages/team-page/team-page.pages';
import Footer from './components/footer/footer.components';


export default class App extends React.Component {
  render(){
    return (
      <div className='main-app'>
      <Navbar/>
      <TeamPage/>
      <Footer/>
      </div>
    )
  }
}
