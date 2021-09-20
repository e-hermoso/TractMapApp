import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import { TractMapComponent } from './components/TractMapDirectory/TractMap';
import { CreateNewTractMapComponent } from './components/TractMapDirectory/CreateTractMap';
import { UpdateTractMapComponent } from './components/TractMapDirectory/UpdateTractMap'
import { Delete } from './components/TractMapDirectory/DeleteTract'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateNewTractMapComponent}/>
            <Route path='/TractMap' component={TractMapComponent} />
            <Route path='/updateTract/:id' component={UpdateTractMapComponent} />
            <Route path='/delete/:id' component={Delete}/>
      </Layout>
    );
  }
}