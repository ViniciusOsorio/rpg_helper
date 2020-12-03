import React, { Component } from 'react';
import './FirebaseConfig';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Title } from './AppStyled';
import CharList from './Components/CharList/CharList';
import CharCreate from './Components/CharCreate/CharCreate';
import Navbar from './Components/Navbar/Navbar';
import TestGet from './Components/TestGet/TestGet';
import TestPost from './Components/TestPost/TestPost';
import TestPut from './Components/TestPut/TestPut';
import TestDelete from './Components/TestDelete/TestDelete';

class App extends Component {
  
  render = () => {

    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Title>Quest!</Title>
          <Switch>
            <Route exact path = "/" component={CharList}/>
            <Route exact path = "/create" component={CharCreate}/>
            <Route exact path = "/testGet" component={TestGet}/>
            <Route exact path = "/testPost" component={TestPost}/>
            <Route exact path = "/testPut" component={TestPut}/>
            <Route exact path = "/testDelete" component={TestDelete}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;